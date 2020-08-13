<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Robert Roksela - Web Development</title>

        <!-- Fonts -->
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        {{-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> --}}
        <script src="{{ asset('js/app.js')}}" defer></script>
        <!-- Styles -->
        {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}

        <script>
            window.prismic = {
            endpoint: 'https://mywebsite-about.cdn.prismic.io/api/v2'
            };
        </script>
        <script src="https://static.cdn.prismic.io/prismic.min.js"></script>
        </script>
    </head>
    <body>
        <div id="app">
            <index></index>

        </div>
    </body>
</html>

