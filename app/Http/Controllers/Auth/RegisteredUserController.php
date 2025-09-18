<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use App\Services\TwilioService;
use App\Mail\QrMail;
use Mail;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }
    

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
  public function store(Request $request, TwilioService $twilio): RedirectResponse
{
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
        'phone' => 'required|string|max:20|unique:users,phone',
        //'nationality' => 'required|string|max:255',
            //'organization' => 'required|string|max:255',
            //'designation' => 'required|string|max:255', 
            //'industry' => 'required|string|max:255',
            //'attendance' => 'required|string|max:255',
            // 'password' => ['required', 'confirmed', Rules\Password::defaults()],
    ]);

    // Create user
    $payload = $request->all();
    $user = User::create($payload);

    // Generate QR immediately
    $path = public_path('qrcode');
    if (!file_exists($path)) {
        mkdir($path, 0777, true);
    }

    $code = strtolower(bin2hex(random_bytes(4)));
    $file = $code . ".png";
    $filename = $path . "/" . $file;

    \QrCode::color(255, 0, 127)
        ->format('png')
        ->size(500)
        ->generate(strval($code), $filename);

    // Save code to user
    $user->code = $code;
    $user->is_sent = true; 
    $user->save();

    $qrUrl = asset("qrcode/{$file}");

    // Send email with QR attached
    try {
        Mail::to($user)->send(new QrMail($user));
    } catch (\Throwable $e) {
        // Log the error but don’t break registration
        info("Mail failed: " . $e->getMessage());
    }


    // Send WhatsApp template with name + QR link
        try {
            $twilio->sendWhatsAppTemplate(
                $user->phone,
                $user->name,
                $qrUrl
            );
        } catch (\Throwable $e) {
            info("WhatsApp failed: " . $e->getMessage());
        }

    // ✅ Return success + qr_url to frontend popup
    return redirect()->back()->with([
    'message' => 'Account created successfully',
    'qr_url' => $qrUrl,
]);
}
}