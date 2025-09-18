<?php

namespace App\Jobs;

use App\Models\User;
use App\Mail\QrMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Mail;

class GenerateAndSendQr implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $user;

    /**
     * Create a new job instance.
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $path = public_path('qrcode');
        $code = str_pad(strval($this->user->id), 4, "0");
        if (!file_exists($path)) {
            mkdir($path, 0777, true);
        }

        try {
            $file = $code . ".png";
            $filename = $path . "/" . $file;

            QrCode::color(255, 0, 127)
                ->format('png')
                ->size(500)
                ->generate(strval($code), $filename);

            $this->user->code = $code;
            $this->user->is_sent = true;
            $this->user->save();

            Mail::to($this->user)->send(new QrMail($this->user));
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
        }
    }
}