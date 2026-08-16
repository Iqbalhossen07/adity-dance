<!DOCTYPE html>
<html lang="en-GB" class="scroll-smooth">
<head>
    @php
        $siteName = 'Adity Dance CIC';
        $defaultTitle = 'Adity Dance CIC — Celebrating Culture & Creativity';
        $defaultDescription = 'Adity Dance CIC — celebrating culture and creativity through the joy of dance. Community events, performances, and gallery moments in Dagenham, Essex and across the UK.';
        $defaultImage = asset('images/hero-1.png');

        $seoTitle = trim($__env->yieldContent('title', $defaultTitle));
        $seoDescription = trim($__env->yieldContent('meta_description', $defaultDescription));
        $seoImage = trim($__env->yieldContent('og_image', $defaultImage));
        $seoType = trim($__env->yieldContent('og_type', 'website'));
        $canonical = trim($__env->yieldContent('canonical', url()->current()));
        $robots = trim($__env->yieldContent('robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'));
    @endphp

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="color-scheme" content="dark">
    <meta name="theme-color" content="#0c0809">
    <meta name="robots" content="{{ $robots }}">
    <meta name="author" content="Adity Dance CIC">
    <meta name="geo.region" content="GB-ESS">
    <meta name="geo.placename" content="Dagenham">
    <meta name="description" content="{!! $seoDescription !!}">

    <title>{!! $seoTitle !!}</title>

    <link rel="canonical" href="{{ $canonical }}">
    <link rel="icon" type="image/png" href="{{ asset('images/logo.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('images/logo.png') }}">
    <link rel="alternate" type="application/xml" title="Sitemap" href="{{ url('/sitemap.xml') }}">

    <meta property="og:site_name" content="{{ $siteName }}">
    <meta property="og:locale" content="en_GB">
    <meta property="og:type" content="{{ $seoType }}">
    <meta property="og:title" content="{!! $seoTitle !!}">
    <meta property="og:description" content="{!! $seoDescription !!}">
    <meta property="og:url" content="{{ $canonical }}">
    <meta property="og:image" content="{{ $seoImage }}">
    <meta property="og:image:alt" content="{{ $siteName }}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{!! $seoTitle !!}">
    <meta name="twitter:description" content="{!! $seoDescription !!}">
    <meta name="twitter:image" content="{{ $seoImage }}">

    <script type="application/ld+json">
        {!! json_encode([
            '@context' => 'https://schema.org',
            '@graph' => [
                [
                    '@type' => 'Organization',
                    '@id' => url('/').'/#organization',
                    'name' => 'Adity Dance CIC',
                    'legalName' => 'Adity Dance CIC',
                    'url' => url('/'),
                    'logo' => [
                        '@type' => 'ImageObject',
                        'url' => asset('images/logo.png'),
                    ],
                    'image' => asset('images/hero-1.png'),
                    'email' => 'adity48@yahoo.com',
                    'telephone' => '+44-7894-222114',
                    'foundingDate' => '2023',
                    'description' => $defaultDescription,
                    'address' => [
                        '@type' => 'PostalAddress',
                        'streetAddress' => '175 Woodward Road',
                        'addressLocality' => 'Dagenham',
                        'addressRegion' => 'Essex',
                        'postalCode' => 'RM9 4SU',
                        'addressCountry' => 'GB',
                    ],
                    'areaServed' => [
                        '@type' => 'Country',
                        'name' => 'United Kingdom',
                    ],
                    'sameAs' => [
                        'https://www.facebook.com/profile.php?id=100051044897638',
                        'https://wa.me/447894222114',
                    ],
                    'contactPoint' => [
                        '@type' => 'ContactPoint',
                        'telephone' => '+44-7894-222114',
                        'contactType' => 'customer service',
                        'email' => 'adity48@yahoo.com',
                        'areaServed' => 'GB',
                        'availableLanguage' => ['English'],
                    ],
                ],
                [
                    '@type' => 'WebSite',
                    '@id' => url('/').'/#website',
                    'url' => url('/'),
                    'name' => 'Adity Dance CIC',
                    'description' => $defaultDescription,
                    'publisher' => [
                        '@id' => url('/').'/#organization',
                    ],
                    'inLanguage' => 'en-GB',
                ],
                [
                    '@type' => 'WebPage',
                    '@id' => $canonical.'#webpage',
                    'url' => $canonical,
                    'name' => $seoTitle,
                    'description' => $seoDescription,
                    'isPartOf' => [
                        '@id' => url('/').'/#website',
                    ],
                    'about' => [
                        '@id' => url('/').'/#organization',
                    ],
                    'inLanguage' => 'en-GB',
                ],
            ],
        ], JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT) !!}
    </script>

    @stack('jsonld')

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="min-h-screen overflow-x-hidden">
    <a
        href="#main-content"
        class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-vermillion focus:px-4 focus:py-2 focus:text-sm focus:text-white"
    >
        Skip to content
    </a>
    @include('partials.header')

    <main id="main-content">
        @yield('content')
    </main>

    @include('partials.footer')
    @include('partials.sticky-socials')
    @include('partials.lightbox')
</body>
</html>
