@extends('layouts.app')

@section('title', 'Adity Dance CIC — Celebrating Culture & Creativity')
@section('meta_description', 'Adity Dance CIC — celebrating culture and creativity through the joy of dance. Community events, performances, and gallery moments rooted in Bharatanatyam and Indian folk dance.')
@section('og_image', asset('images/hero-1.png'))

@section('content')
    {{-- Hero --}}
    <section class="relative min-h-[100svh] overflow-hidden bg-ink text-white">
        <div class="absolute inset-0" aria-hidden="true">
                <img
                data-hero-slide
                src="{{ asset('images/hero-1.png') }}"
                alt="Adity Dance CIC Bharatanatyam performance"
                class="hero-slide is-active absolute inset-0 h-full w-full object-cover object-[center_20%] sm:object-center"
            >
            <img
                data-hero-slide
                src="{{ asset('images/hero-2.png') }}"
                alt="Adity Dance CIC Indian folk dance celebration"
                class="hero-slide absolute inset-0 h-full w-full object-cover object-[center_20%] sm:object-center"
            >
            <img
                data-hero-slide
                src="{{ asset('images/hero-3.png') }}"
                alt="Adity Dance CIC community dance performance"
                class="hero-slide absolute inset-0 h-full w-full object-cover object-[center_20%] sm:object-center"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-stage-deep via-ink/65 to-stage/35"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-stage/80 via-stage/20 to-transparent sm:via-transparent"></div>
            <div class="jali-overlay absolute inset-0 opacity-30 mix-blend-soft-light sm:opacity-40"></div>
        </div>

        <div class="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.12] lg:block" aria-hidden="true">
            <svg class="mandala-mark h-[34rem] w-[34rem] text-gold-soft" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="88" stroke="currentColor" stroke-width="0.6"/>
                <circle cx="100" cy="100" r="68" stroke="currentColor" stroke-width="0.6"/>
                <circle cx="100" cy="100" r="48" stroke="currentColor" stroke-width="0.6"/>
                <circle cx="100" cy="100" r="28" stroke="currentColor" stroke-width="0.6"/>
                @for ($i = 0; $i < 12; $i++)
                    <path d="M100 12c4 18 4 34 0 52-4-18-4-34 0-52Z" stroke="currentColor" stroke-width="0.5" transform="rotate({{ $i * 30 }} 100 100)"/>
                @endfor
            </svg>
        </div>

        <div class="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end safe-px pb-12 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
            <p class="text-[0.65rem] font-semibold tracking-[0.22em] text-gold-soft uppercase sm:text-[0.7rem] sm:tracking-[0.42em]">
                Events · Performances · Gallery
            </p>
            <p class="mt-3 font-display text-[2.75rem] leading-[0.95] tracking-wide text-gold-soft sm:mt-4 sm:text-6xl lg:text-7xl xl:text-8xl">
                Adity Dance
            </p>
            <div class="brand-underline" aria-hidden="true"></div>
            <h1 class="mt-5 max-w-3xl font-display text-[1.65rem] leading-tight text-balance italic text-white sm:mt-6 sm:text-4xl lg:text-5xl">
                Celebrating culture &amp; creativity through the joy of dance
            </h1>
            <p class="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
                Community events, stage performances, and gallery moments rooted in Bharatanatyam and Indian folk dance.
            </p>
            <div class="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
                <a href="{{ route('events') }}" class="btn-cultural inline-flex items-center justify-center px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-white sm:px-8">
                    View Events
                </a>
                <a
                    href="{{ route('gallery') }}"
                    class="inline-flex items-center justify-center border border-gold/50 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-gold-soft transition hover:border-gold-soft hover:bg-white/5 sm:px-8"
                >
                    Explore Gallery
                </a>
            </div>
        </div>
    </section>

    {{-- Cultural values ribbon --}}
    <section class="border-y border-gold/25 bg-stage-deep py-4 text-gold-soft sm:py-5" aria-label="Cultural values">
        <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 safe-px text-center text-[0.62rem] font-semibold tracking-[0.2em] uppercase sm:gap-x-12 sm:text-[0.7rem] sm:tracking-[0.32em]">
            <span>Natya</span>
            <span class="hidden h-1.5 w-1.5 rotate-45 bg-gold/60 sm:inline-block" aria-hidden="true"></span>
            <span>Rasa</span>
            <span class="hidden h-1.5 w-1.5 rotate-45 bg-gold/60 sm:inline-block" aria-hidden="true"></span>
            <span>Sangam</span>
            <span class="hidden h-1.5 w-1.5 rotate-45 bg-gold/60 sm:inline-block" aria-hidden="true"></span>
            <span>Inclusion</span>
        </div>
    </section>

    {{-- About --}}
    <section id="about" class="section-wash relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div class="pointer-events-none absolute left-3 top-6 hidden opacity-30 sm:left-10 sm:top-10 sm:block" aria-hidden="true">
            @include('partials.corner', ['class' => 'h-14 w-14 text-gold'])
        </div>
        <div class="pointer-events-none absolute right-3 bottom-6 hidden rotate-180 opacity-30 sm:right-10 sm:bottom-10 sm:block" aria-hidden="true">
            @include('partials.corner', ['class' => 'h-14 w-14 text-gold'])
        </div>

        <div class="mx-auto grid max-w-7xl items-center gap-10 safe-px sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <div class="reveal relative mx-auto w-full max-w-md lg:max-w-none" data-reveal>
                <div class="temple-frame">
                    <img
                        src="{{ asset('images/about.jpg') }}"
                        alt="Adity Dance CIC performance"
                        class="relative z-10 aspect-[4/5] w-full object-cover"
                    >
                </div>
            </div>

            <div class="reveal reveal-delay-1" data-reveal>
                <p class="text-[0.7rem] font-semibold tracking-[0.22em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Our story</p>
                <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">About Adity Dance</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:mt-6 sm:text-base">
                    Adity Dance CIC, founded in 2023, promotes community engagement through inclusive dance experiences. We introduce Bharatanatyam and Bangladeshi folk dance to diverse audiences through performances, events, and shared celebration.
                </p>
                <p class="mt-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    Our events welcome neurotypical and neurodiverse audiences of all ages and abilities. We create a compassionate platform for autistic individuals, challenge stigma within the South Asian community, and celebrate the joy of movement for everyone.
                </p>

                <dl class="mt-8 grid grid-cols-3 gap-2 border-t border-gold/30 pt-6 sm:mt-10 sm:gap-4 sm:pt-8">
                    <div>
                        <dt class="font-display text-2xl text-vermillion sm:text-3xl lg:text-4xl">2023</dt>
                        <dd class="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Founded</dd>
                    </div>
                    <div>
                        <dt class="font-display text-2xl text-vermillion sm:text-3xl lg:text-4xl">All</dt>
                        <dd class="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Ages &amp; abilities</dd>
                    </div>
                    <div>
                        <dt class="font-display text-2xl text-vermillion sm:text-3xl lg:text-4xl">UK</dt>
                        <dd class="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Based in Essex</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>

    {{-- What we celebrate --}}
    <section id="dance" class="stage-wash relative overflow-hidden py-16 text-white sm:py-24 lg:py-28">
        <div class="jali-overlay pointer-events-none absolute inset-0 opacity-40 sm:opacity-50" aria-hidden="true"></div>

        <div class="relative mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <p class="text-[0.7rem] font-semibold tracking-[0.22em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.32em]">On stage &amp; in community</p>
                <h2 class="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">Dance rooted in culture</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-white/75 sm:text-base">
                    Classical storytelling, folk celebration, and inclusive performance — shared through our events and gallery.
                </p>
            </div>

            <div class="mt-10 grid gap-5 sm:mt-14 sm:gap-8 md:grid-cols-3">
                <article class="reveal relative border border-gold/25 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-gold/50 sm:p-7" data-reveal>
                    <div class="pointer-events-none absolute left-3 top-3 hidden opacity-50 sm:block" aria-hidden="true">
                        @include('partials.corner', ['class' => 'h-8 w-8 text-gold-soft'])
                    </div>
                    <p class="font-display text-4xl text-gold/40 sm:text-5xl">01</p>
                    <h3 class="mt-2 font-display text-2xl text-gold-soft sm:mt-3 sm:text-3xl">Bharatanatyam</h3>
                    <p class="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4">
                        Classical South Indian dance with storytelling, rhythm, and expressive abhinaya — brought to life in performance and celebration.
                    </p>
                </article>

                <article class="reveal reveal-delay-1 relative border border-gold/25 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-gold/50 sm:p-7" data-reveal>
                    <div class="pointer-events-none absolute left-3 top-3 hidden opacity-50 sm:block" aria-hidden="true">
                        @include('partials.corner', ['class' => 'h-8 w-8 text-gold-soft'])
                    </div>
                    <p class="font-display text-4xl text-gold/40 sm:text-5xl">02</p>
                    <h3 class="mt-2 font-display text-2xl text-gold-soft sm:mt-3 sm:text-3xl">Indian Folk Dance</h3>
                    <p class="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4">
                        Joyful Bangladeshi and Indian folk forms that celebrate community, colour, and shared movement across generations.
                    </p>
                </article>

                <article class="reveal reveal-delay-2 relative border border-gold/25 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-gold/50 sm:p-7" data-reveal>
                    <div class="pointer-events-none absolute left-3 top-3 hidden opacity-50 sm:block" aria-hidden="true">
                        @include('partials.corner', ['class' => 'h-8 w-8 text-gold-soft'])
                    </div>
                    <p class="font-display text-4xl text-gold/40 sm:text-5xl">03</p>
                    <h3 class="mt-2 font-display text-2xl text-gold-soft sm:mt-3 sm:text-3xl">Inclusive Events</h3>
                    <p class="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4">
                        Welcoming performances and gatherings for neurodiverse and disabled audiences, creating space for everyone to belong.
                    </p>
                </article>
            </div>
        </div>
    </section>

    {{-- Founder --}}
    <section id="founder" class="lotus-wash relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div class="mx-auto grid max-w-7xl items-center gap-10 safe-px sm:gap-12 lg:grid-cols-12 lg:gap-16">
            <div class="reveal mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none" data-reveal>
                <div class="temple-frame">
                    <img
                        src="{{ asset('images/about-adity.jpg') }}"
                        alt="Adity Roy, founder of Adity Dance CIC"
                        class="relative z-10 aspect-[3/4] max-h-[28rem] w-full object-cover sm:max-h-none"
                    >
                </div>
            </div>

            <div class="reveal reveal-delay-1 lg:col-span-7" data-reveal>
                <p class="text-[0.7rem] font-semibold tracking-[0.18em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Artist · Choreographer · Performer</p>
                <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Adity Roy</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 font-display text-lg italic leading-relaxed text-ink-soft sm:mt-6 sm:text-xl lg:text-2xl">
                    “Dance is devotion made visible — a language of story, spirit, and belonging.”
                </p>
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:mt-6 sm:text-base">
                    Adity Roy is a Bharatanatyam dancer and choreographer based in London. Deeply rooted in classical tradition, her work is known for dynamic storytelling and exceptional abhinaya — connecting seasoned audiences and newcomers alike.
                </p>
                <p class="mt-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    Performing since the age of eight, she has trained in the Kalakshetra style, studied at Trinity Laban, and performed across the UK, France, Switzerland, India, and Bangladesh. In 2023 she founded Adity Dance CIC to celebrate culture through events, performance, and community.
                </p>

                <div class="mt-8 grid grid-cols-3 gap-2 border-t border-gold/30 pt-6 sm:mt-10 sm:gap-6 sm:pt-8">
                    <div>
                        <p class="font-display text-3xl text-peacock sm:text-4xl">15+</p>
                        <p class="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Years experience</p>
                    </div>
                    <div>
                        <p class="font-display text-3xl text-peacock sm:text-4xl">5+</p>
                        <p class="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Countries</p>
                    </div>
                    <div>
                        <p class="font-display text-3xl text-peacock sm:text-4xl">2023</p>
                        <p class="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">CIC founded</p>
                    </div>
                </div>

                <a href="{{ route('about') }}" class="mt-8 inline-block text-sm font-semibold text-gold-soft transition hover:text-white">
                    Learn More About Us →
                </a>
            </div>
        </div>
    </section>

    {{-- Events --}}
    <section id="events" class="section-wash relative py-16 sm:py-24 lg:py-28">
        <div class="mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <p class="text-[0.7rem] font-semibold tracking-[0.22em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Gather with us</p>
                <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Upcoming events</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    Be part of our next celebration of dance and culture. Upcoming performances and community events will appear here.
                </p>
            </div>

            @if ($upcomingEvents->isNotEmpty())
                <div class="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                    @foreach ($upcomingEvents as $index => $event)
                        <article
                            @class([
                                'reveal flex flex-col overflow-hidden border border-gold/25 bg-panel-soft/80',
                                'reveal-delay-1' => $index % 3 === 1,
                                'reveal-delay-2' => $index % 3 === 2,
                            ])
                            data-reveal
                        >
                            @if ($event->image_url)
                                <img src="{{ $event->image_url }}" alt="{{ $event->title }}" class="aspect-[4/3] w-full object-cover sm:aspect-[16/10]">
                            @else
                                <div class="aspect-[4/3] w-full bg-ink/60 sm:aspect-[16/10]" aria-hidden="true"></div>
                            @endif
                            <div class="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
                                <p class="text-[0.65rem] tracking-[0.14em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.18em]">
                                    {{ $event->event_date->format('M j, Y') }}
                                </p>
                                <h3 class="mt-1.5 font-display text-base leading-snug text-white sm:mt-2 sm:text-2xl">{{ $event->title }}</h3>
                                @if ($event->location)
                                    <p class="mt-1.5 line-clamp-1 text-xs text-ink-soft sm:mt-2 sm:text-sm">{{ $event->location }}</p>
                                @endif
                                @if ($event->description)
                                    <div class="mt-2 line-clamp-3 hidden text-sm leading-relaxed text-ink-soft sm:mt-3 sm:block prose prose-invert prose-sm max-w-none">{!! $event->description !!}</div>
                                @endif
                                @if ($event->ticket_link)
                                    <a
                                        href="{{ $event->ticket_link }}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="btn-cultural mt-auto inline-flex w-full items-center justify-center px-3 py-2 text-[0.7rem] font-semibold tracking-wide text-white sm:mt-5 sm:px-6 sm:py-2.5 sm:text-sm"
                                    >
                                        Book Now
                                    </a>
                                @endif
                            </div>
                        </article>
                    @endforeach
                </div>
                <div class="reveal mt-8 text-center" data-reveal>
                    <a href="{{ route('events') }}" class="btn-cultural inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white">
                        View All Events
                    </a>
                </div>
            @else
                <div class="reveal relative mx-auto mt-10 max-w-3xl border border-gold/35 bg-panel-soft/90 px-5 py-10 text-center sm:mt-14 sm:px-8 sm:py-14" data-reveal>
                    <p class="font-display text-2xl text-white sm:text-3xl">No upcoming events just yet</p>
                    <p class="mt-3 text-sm text-ink-soft">
                        Please check back soon, or get in touch to find out about our next events.
                    </p>
                    <a href="{{ route('events') }}" class="btn-cultural mt-7 inline-flex w-full items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white sm:mt-8 sm:w-auto">
                        View All Events
                    </a>
                </div>
            @endif
        </div>
    </section>

    {{-- Gallery --}}
    <section id="gallery" class="bg-panel relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div class="jali-overlay pointer-events-none absolute inset-0 opacity-30" aria-hidden="true"></div>

        <div class="relative mx-auto max-w-7xl safe-px">
            <div class="reveal flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4" data-reveal>
                <div>
                    <p class="text-[0.7rem] font-semibold tracking-[0.22em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Moments</p>
                    <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Our gallery</h2>
                    @include('partials.ornament', ['tone' => 'dark'])
                </div>
                <div class="max-w-md">
                    <p class="text-sm leading-relaxed text-ink-soft">
                        From stage to celebration — glimpses of performance, community, and the joy of dance.
                    </p>
                    <a href="{{ route('gallery') }}" class="mt-3 inline-block text-sm font-semibold text-gold-soft transition hover:text-white">
                        View Full Gallery →
                    </a>
                </div>
            </div>

            <div class="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3 md:grid-cols-4 md:gap-4" data-lightbox-gallery>
                @forelse ($galleryImages as $index => $image)
                    @php
                        $alt = $image->alt_text ?: ($image->title ?: 'Adity Dance gallery image');
                    @endphp
                    <button
                        type="button"
                        @class([
                            'gallery-item reveal aspect-square overflow-hidden',
                            'reveal-delay-1' => $index % 4 === 1,
                            'reveal-delay-2' => $index % 4 === 2,
                        ])
                        data-reveal
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
                    <p class="col-span-full text-center text-ink-soft">Gallery images coming soon.</p>
                @endforelse
            </div>
        </div>
    </section>

    {{-- Videos --}}
    <section id="videos" class="lotus-wash py-16 sm:py-24 lg:py-28">
        <div class="mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <p class="text-[0.7rem] font-semibold tracking-[0.22em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Watch</p>
                <h2 class="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Video gallery</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    Experience the storytelling, rhythm, and spirit of Adity Dance on stage.
                </p>
                <a href="{{ route('videos') }}" class="mt-4 inline-block text-sm font-semibold text-gold-soft transition hover:text-white">
                    Watch More Videos →
                </a>
            </div>

            @if ($featuredVideo)
                <div class="reveal relative mx-auto mt-10 max-w-4xl sm:mt-12" data-reveal>
                    <div class="temple-frame temple-frame-dark">
                        <div class="relative z-10 overflow-hidden bg-ink">
                            <div class="aspect-video">
                                @if ($featuredVideo->embed_url)
                                    <iframe
                                        class="h-full w-full"
                                        src="{{ $featuredVideo->embed_url }}"
                                        title="{{ $featuredVideo->title }}"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                        loading="lazy"
                                    ></iframe>
                                @endif
                            </div>
                            <div class="border-t border-gold/25 px-4 py-4 sm:px-6 sm:py-5">
                                <h3 class="font-display text-xl text-gold-soft sm:text-2xl">{{ $featuredVideo->title }}</h3>
                                @if ($featuredVideo->description)
                                    <div class="mt-1 text-sm text-white/65 prose prose-invert max-w-none prose-sm">{{ $featuredVideo->description }}</p>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </section>

    {{-- Contact --}}
    <section id="contact" class="stage-wash relative overflow-hidden py-16 text-white sm:py-24 lg:py-28">
        <div class="jali-overlay pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>

        <div class="relative mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <p class="text-[0.7rem] font-semibold tracking-[0.22em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.32em]">Connect</p>
                <h2 class="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">Get in touch</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-white/75 sm:text-base">
                    Questions about events, performances, or collaborations? We would love to hear from you.
                </p>
            </div>

            <div class="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
                <a href="mailto:adity48@yahoo.com" class="reveal border border-gold/30 bg-white/[0.04] p-6 transition hover:border-gold/50" data-reveal>
                    <p class="text-[0.7rem] tracking-[0.18em] text-gold-soft uppercase">Email</p>
                    <p class="mt-2 break-all text-lg text-white">adity48@yahoo.com</p>
                </a>
                <a href="tel:+447894222114" class="reveal reveal-delay-1 border border-gold/30 bg-white/[0.04] p-6 transition hover:border-gold/50" data-reveal>
                    <p class="text-[0.7rem] tracking-[0.18em] text-gold-soft uppercase">Phone</p>
                    <p class="mt-2 text-lg text-white">+44 7894 222114</p>
                </a>
                <div class="reveal reveal-delay-2 border border-gold/30 bg-white/[0.04] p-6" data-reveal>
                    <p class="text-[0.7rem] tracking-[0.18em] text-gold-soft uppercase">Address</p>
                    <p class="mt-2 text-lg leading-snug text-white/90">175 Woodward Road, Dagenham, Essex, RM9 4SU</p>
                </div>
            </div>

            <div class="reveal mt-8 text-center" data-reveal>
                <a href="{{ route('contact') }}" class="btn-cultural inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white">
                    Contact Page
                </a>
            </div>
        </div>
    </section>
@endsection
