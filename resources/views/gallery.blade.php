@extends('layouts.app')

@section('title', 'Gallery | Adity Dance CIC')
@section('meta_description', 'Browse the Adity Dance CIC photo gallery — performances and community celebrations of Bharatanatyam and Indian folk dance.')
@section('og_image', asset('images/hero-2.png'))

@section('content')
    @include('partials.page-hero', ['title' => 'Our Gallery', 'current' => 'Gallery'])

    <section class="section-wash py-16 sm:py-24 lg:py-28">
        <div class="mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <h2 class="font-display text-3xl text-white sm:text-4xl">Moments of Dance & Celebration</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    From stage to celebration — glimpses of performance, community, and the joy of dance.
                </p>
            </div>

            <div class="reveal mt-8 -mx-1 overflow-x-auto px-1 sm:mt-10 sm:overflow-visible" data-reveal data-gallery-filters>
                <div class="flex min-w-max justify-start gap-2 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-3">
                    <button
                        type="button"
                        data-filter="all"
                        class="border border-vermillion bg-vermillion px-3.5 py-2 text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase transition sm:px-5 sm:text-sm"
                    >
                        All
                    </button>
                    @foreach ($categories as $category)
                        <button
                            type="button"
                            data-filter="{{ $category->slug }}"
                            class="border border-gold/30 px-3.5 py-2 text-[0.65rem] font-semibold tracking-[0.14em] text-gold-soft uppercase transition hover:border-gold-soft sm:px-5 sm:text-sm"
                        >
                            {{ $category->name }}
                        </button>
                    @endforeach
                </div>
            </div>

            <div class="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4" data-gallery-grid data-lightbox-gallery>
                @forelse ($images as $index => $image)
                    @php
                        $alt = $image->alt_text ?: ($image->title ?: 'Adity Dance gallery image');
                    @endphp
                    <button
                        type="button"
                        @class([
                            'gallery-item reveal aspect-square overflow-hidden',
                            'reveal-delay-1' => $index % 3 === 1,
                            'reveal-delay-2' => $index % 3 === 2,
                        ])
                        data-reveal
                        data-category="{{ $image->category?->slug ?? 'uncategorized' }}"
                        data-lightbox-trigger
                        data-lightbox-src="{{ $image->url }}"
                        data-lightbox-alt="{{ $alt }}"
                        aria-label="View larger: {{ $alt }}"
                    >
                        <img
                            src="{{ $image->url }}"
                            alt="{{ $alt }}"
                            class="h-full w-full object-cover"
                            loading="lazy"
                        >
                        <span class="gallery-zoom" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                                <circle cx="11" cy="11" r="6.5" />
                                <path stroke-linecap="round" d="M16.5 16.5L21 21M11 8.5v5M8.5 11h5" />
                            </svg>
                        </span>
                    </button>
                @empty
                    <p class="col-span-full py-16 text-center text-ink-soft">No gallery images published yet.</p>
                @endforelse
            </div>
        </div>
    </section>
@endsection
