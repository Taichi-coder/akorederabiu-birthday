<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=akshar:300" rel="stylesheet" />
    <title>Birthday Invitation</title>
</head>

<body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: 'Akshar', sans-serif; font-size: 16px;">

    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600"
        style="background: #ffffff; margin-top: 20px; border-radius: 8px; overflow:hidden;">

        <!-- Banner -->
        {{-- <tr>
            <td style="text-align:center; padding: 20px; display:flex; justify-content:center;">
                <img src="{{ asset('images/Photo2.jpg') }}" alt="Birthday Banner"
                    style="max-width:90%; height:auto; border:none; display:block; margin-inline: auto;">
            </td>
        </tr> --}}

        <!-- Body -->
        <tr>
            <td style="padding: 20px; color: #000000ff; font-size: 18px; font-weight:400; line-height: 1.6;">
                <h2 style="margin-top:3px; font-size: 24px; line-height: 1.6; font-weight:500; padding: 10px;">Dear {{ $user->name }}, You're Invited to a Special Birthday Celebration! 🎉</h2>

                <p style="margin:10px 0;">
                    We are thrilled to invite you to celebrate the amazing day of our beloved celebrant:
                </p>

                <h3 style="margin:10px 0; font-size:20px;">
                    <strong>Name of Celebrant: Rabiu Akorede</strong>
                </h3>

                <p style="margin:10px 0;">
                    Join us for an unforgettable day filled with laughter, music, fun and cherished memories.  
                    We can’t wait to celebrate with you! 🎂💃🕺
                </p>

                <!-- QR Code -->
                <div style="text-align:center; margin:20px 0;">
                    <img src="{{ asset('qrcode/' . $user->code . '.png') }}" alt="QR Code"
                        style="width:300px; border:2px solid #ddd; padding:5px; background: #fff; display:inline-block;">
                    <p style="margin:10px 0; text-align:center;">
                        Please bring this QR code for a smooth entry at the venue.
                    </p>
                </div>

                <!-- Event Details -->
                <div style="margin:20px 0; font-size:16px;">
                    <p style="margin:5px 0;">
                        <strong>📍 Venue:</strong>
                        <a href="https://www.google.com/maps?q=Whitestone+Events+Place+3+Billings+Way+Oregun+Ikeja+Lagos+Nigeria" 
                           target="_blank" 
                           style="color:#007bff; text-decoration:none;">
                            Whitestone Events Place - 3 Billings Way, Oregun, Ikeja, Lagos, Nigeria
                        </a>
                    </p>

                    <p style="margin:5px 0;">
                        <strong>📅 Date:</strong>
                        <time datetime="2025-10-19">19/10/2025</time>
                    </p>

                    <p style="margin:5px 0;">
                        <strong>⏰ Time:</strong>
                        <time datetime="2025-10-19T13:00">1:00 PM</time>
                    </p>

                    <p style="margin:5px 0;"><strong>📞 RSVP:</strong><a href="tel:+2347083610035">0708 361 0035 </a>, <a href="tel:+2349010932945">0901 093 2945</a></p>
                </div>

                <!-- Party Image -->
                <div style="text-align: center; margin:15px auto; display:flex; justify-content:center;">
                    <img src="{{ asset('images/Photo2.jpg') }}" alt="Birthday Celebrant"
                        style="max-width:60%; height:auto; border:none; display:block; margin-inline: auto;">
                </div>

                <p style="margin-top:10px;">
                    With love,<br>
                    🎂 <strong>Rabiu Akorede’s Birthday Celebration Team</strong>
                </p>
            </td>
        </tr>
    </table>

</body>
</html>