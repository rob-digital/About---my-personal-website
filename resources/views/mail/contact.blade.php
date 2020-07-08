@component('mail::message')
# Contact Form

<p>From: {{ $contact['name'] }}</p>

<p>Email: {{ $contact['email'] }}</p>

{{ $contact['message'] }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
