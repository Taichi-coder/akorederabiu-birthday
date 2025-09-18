<x-mail::message>

    <div style="text-align: center; margin-bottom: 10px">
        <img src="{{ asset("\images\landPage1.jpg") }}" alt="Birthday Banner">
    </div>

    Dear {{$user->name}}

    <p>
        🎉 Thank you for registering to celebrate with us! 🎉
        We are excited to have you join the birthday celebration 🎂 filled with joy, fun, and unforgettable memories.
    </p>

    <p>
        To make your entry smooth, please keep the attached QR code handy.
        Show this QR at the venue for quick access.
    </p>

    <div style="text-align: center; margin: 10px">
        <img style="width: 200px; margin: auto" src="{{ asset("qrcode/" . $user->code . ".png") }}" alt="QR Code">
    </div>

    <p>
        We can’t wait to celebrate together — it’s going to be a day of laughter, music, and love ❤️.
        Don’t forget to bring your dancing shoes! 💃🕺
    </p>

    <p>
        We look forward to welcoming you!
    </p>

    <div style="margin: 10px 0px">
        <img src="{{ asset("\images\partyTime.jpg") }}" alt="Party Time Banner">
    </div>

    With love,<br>
    {{ config('app.name') }}
</x-mail::message>