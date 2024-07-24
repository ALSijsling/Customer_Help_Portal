<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Customer Help Portal</title>

        @vite(['resources/css/app.css', 'resources/js/app.ts'])

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->
        <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" ref="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.mins.js"></script>
    </head>
    
    <body class="font-sans antialiased">
        <div id="app"></div>
    </body>
</html>