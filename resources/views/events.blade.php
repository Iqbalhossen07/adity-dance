@extends('layouts.app')

@section('title', 'Events | Adity Dance CIC')
@section('meta_description', 'Discover upcoming Adity Dance CIC events and performances. Book tickets and join celebrations of dance and culture in Essex and the UK.')
@section('og_image', asset('images/hero-1.png'))

@section('content')
    @include('partials.page-hero', ['title' => 'Our Events', 'current' => 'Events'])

    <section class="section-wash py-16 sm:py-24 lg:py-28">
        <div class="mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <h2 class="font-display text-3xl text-white sm:text-4xl">Upcoming Events</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    Be part of our next celebration of dance and culture. Book your spot today!
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
            @else
                <div class="reveal mx-auto mt-10 max-w-3xl border border-gold/30 bg-panel-soft/80 px-5 py-12 text-center sm:mt-14 sm:px-8 sm:py-14" data-reveal>
                    <p class="font-display text-2xl text-white sm:text-3xl">No upcoming events at the moment</p>
                    <p class="mt-3 text-sm text-ink-soft">
                        Please check back soon, or get in touch to find out about our next events.
                    </p>
                    <a href="{{ route('contact') }}" class="btn-cultural mt-7 inline-flex w-full items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white sm:mt-8 sm:w-auto">
                        Contact Us
                    </a>
                </div>
            @endif
        </div>
    </section>

    <section class="lotus-wash py-16 sm:py-24">
        <div class="mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <h2 class="font-display text-3xl text-white sm:text-4xl">Past Events</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    A look back at some of our memorable moments.
                </p>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                @forelse ($pastEvents as $index => $event)
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
                            <div class="flex aspect-[4/3] w-full items-center justify-center bg-ink/50 sm:aspect-[16/10]" aria-hidden="true">
                                <span class="font-display text-3xl text-gold/40 sm:text-4xl">{{ $event->event_date->format('Y') }}</span>
                            </div>
                        @endif
                        <div class="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
                            <p class="text-[0.65rem] tracking-[0.14em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.18em]">
                                {{ $event->event_date->format('M j, Y') }}
                            </p>
                            <h3 class="mt-1.5 font-display text-base leading-snug text-white sm:mt-2 sm:text-2xl">{{ $event->title }}</h3>
                            @if ($event->description)
                                <div class="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-soft sm:mt-3 sm:line-clamp-3 sm:text-sm prose prose-invert prose-sm max-w-none">{!! $event->description !!}</div>
                            @endif
                            <a href="{{ route('gallery') }}" class="mt-auto pt-3 text-xs font-semibold text-gold-soft transition hover:text-white sm:pt-5 sm:text-sm">
                                View Gallery →
                            </a>
                        </div>
                    </article>
                @empty
                    <p class="col-span-full py-12 text-center text-sm text-ink-soft">Past events will appear here.</p>
                @endforelse
            </div>
        </div>
    </section>
@endsection

@push('jsonld')
    @php
        $eventSchema = $upcomingEvents->map(fn ($event) => array_filter([
            '@type' => 'Event',
            'name' => $event->title,
            'description' => strip_tags($event->description),
            'startDate' => $event->event_date->toDateString(),
            'eventAttendanceMode' => 'https://schema.org/OfflineEventAttendanceMode',
            'eventStatus' => 'https://schema.org/EventScheduled',
            'image' => $event->image_url,
            'location' => $event->location ? [
                '@type' => 'Place',
                'name' => $event->location,
                'address' => $event->location,
            ] : null,
            'organizer' => [
                '@type' => 'Organization',
                'name' => 'Adity Dance CIC',
                'url' => url('/'),
            ],
            'url' => $event->ticket_link ?: route('events'),
            'offers' => $event->ticket_link ? [
                '@type' => 'Offer',
                'url' => $event->ticket_link,
                'availability' => 'https://schema.org/InStock',
            ] : null,
        ]))->values()->all();
    @endphp
    @if (count($eventSchema))
        <script type="application/ld+json">
            {!! json_encode([
                '@context' => 'https://schema.org',
                '@type' => 'ItemList',
                'itemListElement' => collect($eventSchema)->map(fn ($item, $index) => [
                    '@type' => 'ListItem',
                    'position' => $index + 1,
                    'item' => $item,
                ])->values()->all(),
            ], JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE) !!}
        </script>
    @endif
@endpush
