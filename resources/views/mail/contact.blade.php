@component('mail::message')
# Contact Form

<p>From: {{ $contact['name'] }}</p>

<p>Email: {{ $contact['email'] }}</p>


<p>Message: {{ $contact['message'] }}</p>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
