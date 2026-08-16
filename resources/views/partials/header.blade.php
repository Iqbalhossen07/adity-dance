@php
    $links = [
        ['route' => 'home', 'label' => 'Home'],
        ['route' => 'about', 'label' => 'About'],
        ['route' => 'gallery', 'label' => 'Gallery'],
        ['route' => 'videos', 'label' => 'Videos'],
        ['route' => 'events', 'label' => 'Events'],
        ['route' => 'contact', 'label' => 'Contact'],
    ];
    $leftLinks = array_slice($links, 0, 3);
    $rightLinks = array_slice($links, 3, 3);
@endphp

<header
    data-header
    @if (! request()->routeIs('home'))
        data-force-scrolled="true"
    @endif
    @class([
        'site-header fixed inset-x-0 top-0 z-50 border-b border-transparent pt-[env(safe-area-inset-top)] transition-all duration-300',
        'is-scrolled' => ! request()->routeIs('home'),
    ])
>
    {{-- Mobile: logo left, menu right --}}
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-3 safe-px py-2 sm:py-2.5 lg:hidden">
        <a href="{{ route('home') }}" class="relative z-10 shrink-0">
            <img
                src="{{ asset('images/logo.png') }}"
                alt="Adity Dance CIC"
                class="h-24 w-auto sm:h-[6.5rem]"
            >
        </a>

        <button
            type="button"
            data-menu-btn
            class="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-gold-soft"
            aria-expanded="false"
            aria-controls="mobile-nav"
            aria-label="Open menu"
        >
            <svg class="menu-icon-open h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg class="menu-icon-close h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
        </button>
    </div>

    {{-- Desktop: 3 links | centered logo | 3 links --}}
    <div class="mx-auto hidden max-w-7xl items-center safe-px py-2.5 lg:flex">
        <nav class="flex flex-1 items-center justify-end gap-8 text-sm font-medium tracking-wide text-white/90 xl:gap-10" aria-label="Primary left">
            @foreach ($leftLinks as $link)
                <a
                    href="{{ route($link['route']) }}"
                    @class([
                        'transition hover:text-gold-soft',
                        'text-gold-soft' => request()->routeIs($link['route']),
                    ])
                >
                    {{ $link['label'] }}
                </a>
            @endforeach
        </nav>

        <a href="{{ route('home') }}" class="mx-10 shrink-0 xl:mx-14">
            <img
                src="{{ asset('images/logo.png') }}"
                alt="Adity Dance CIC"
                class="h-28 w-auto xl:h-32"
            >
        </a>

        <nav class="flex flex-1 items-center justify-start gap-8 text-sm font-medium tracking-wide text-white/90 xl:gap-10" aria-label="Primary right">
            @foreach ($rightLinks as $link)
                <a
                    href="{{ route($link['route']) }}"
                    @class([
                        'transition hover:text-gold-soft',
                        'text-gold-soft' => request()->routeIs($link['route']),
                    ])
                >
                    {{ $link['label'] }}
                </a>
            @endforeach
        </nav>
    </div>

    <div id="mobile-nav" data-mobile-nav class="mobile-nav border-t border-gold/20 bg-ink/98 lg:hidden">
        <nav class="flex flex-col px-5 py-2 pb-[max(1rem,env(safe-area-inset-bottom))] text-base font-medium text-white" aria-label="Mobile">
            @foreach ($links as $link)
                <a
                    href="{{ route($link['route']) }}"
                    @class([
                        'border-b border-white/5 py-3.5',
                        'text-gold-soft' => request()->routeIs($link['route']),
                    ])
                >
                    {{ $link['label'] }}
                </a>
            @endforeach
        </nav>
    </div>
</header>
