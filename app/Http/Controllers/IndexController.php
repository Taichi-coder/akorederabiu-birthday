<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use App\Mail\QrMail;
use Mail;
use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Services\TwilioService;


class IndexController extends Controller
{
    /**
     * Display the users
     */
    public function index(Request $request)
    {
        $query = User::query()->where('type', 'User');
       
        if (!empty($request->search)) {
        $search = $request->search;
        $query->where(function ($q) use ($search) {
            $q->where('name', 'like', "%$search%")
              ->orWhere('email', 'like', "%$search%")
              ->orWhere('phone', 'like', "%$search%");
        });
    }
        
        if ($request->search === 'physically') {
        $query->where('type', 'Physical');
        } elseif ($request->search === 'virtually') {
            $query->where('type', 'Virtual');
        }
        
        $models = $query->latest()->paginate(10);
        $virtuals = 0;
        $physicals = 0;

        //
        return Inertia::render('Dashboard', [
            'models' => $models,
            'virtuals' => $virtuals,
            'physicals' => $physicals,
        ]);
    }

    public function acceptOrReject($id, $type)
    {
        $type = $type == 'false' ? false : true;

        $model = User::findOrFail($id);
        $model->confirmed = $type;
        $model->save();

        try {
            Mail::to($model)->send(new QrMail($model, $type));
        } 
        catch (\Throwable $e) {}

        return redirect()->back();
    }

    private function createQr($user) {

        $path = public_path('qrcode');
        $code = str_pad(strval($user->id), 4, "0");
        if(!file_exists($path)) mkdir($path, 0777, true);

        try {

            $file = $code . ".png";
            $filename = $path . "/" . $file;
            $realPath = "qrcode/" . $code . ".png";
            
            \QrCode::color(255, 0, 127)->format('png')
                ->size(500)->generate(strval($code), $filename);
            
            $user->code = $code;
            $user->is_sent = true;
            $user->save();

            //
            $this->sendEmail($user);
        } 
        catch (\Exception $e) {
            info($e->getMessage());
        }
    }

    public function sendQR(Request $request) {

        $IDs = $request->ids ?? [];
        $twilio = new TwilioService();
        foreach ($IDs as $key => $id) {
            $this->createQr(User::find($id));
            $user = User::find($id);
            
            if ($user && $user->phone) {
                $message = "Hello {$user->name}, your QR code for the event is ready. Please check your email for the QR code.";
                $twilio->sendSms($user->phone, $message);
            }
        }

        //
        return redirect()->back();
    }

    private function sendEmail($user) {
        Mail::to($user)->send(new QrMail($user));
    }

    public function exportQR() {
        return Excel::download(new UsersExport, 'attendees.xlsx');
    }
}