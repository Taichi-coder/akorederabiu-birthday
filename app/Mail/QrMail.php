<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class QrMail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    
    // * Create a new message instance.
    
    public function __construct($user)
    {
        $this->user = $user;
    }
    
    /*
    Get the message content definition.
    */
    
       public function build()
        {
            return $this->subject('🎂 Birthday Invitation 🎉')
                ->view('emails.qr')   // ✅ use pure HTML template
                ->with([
                    'user' => $this->user,
                ]);
        }


     /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
    */
    public function attachments(): array
    {
        return [];
    }
}