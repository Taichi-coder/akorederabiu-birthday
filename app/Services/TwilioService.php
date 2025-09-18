<?php

namespace App\Services;

use Twilio\Rest\Client;

class TwilioService
{
    protected $client;
    protected $from;
    protected $template;

    public function __construct()
    {
        $this->client = new Client(
            config('services.twilio.sid'),
            config('services.twilio.token')
        );

        $this->from = "whatsapp:" . config('services.twilio.whatsapp_from');
        $this->template = config('services.twilio.template');
    }

    /**
     * Send WhatsApp template
     */
    public function sendWhatsAppTemplate(string $to, string $name, string $qrUrl)
    {
        
        return $this->client->messages->create(
            "whatsapp:$to",
            [
                "from" => $this->from,
                "contentSid" => $this->template,
                "contentVariables" => json_encode([
                    "1" => $name,
                    "2" => $qrUrl,
                ]),
            ]
        );
    }
}


