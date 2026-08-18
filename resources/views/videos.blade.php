@extends('layouts.app')

@section('title', 'Videos | Adity Dance CIC')
@section('meta_description', 'Watch Adity Dance CIC performance videos and stage recordings of Bharatanatyam and Indian folk dance.')
@section('og_image', asset('images/hero-3.png'))

@section('content')
    @include('partials.page-hero', ['title' => 'Video Gallery', 'current' => 'Videos'])

    <section class="section-wash py-16 sm:py-24 lg:py-28">
        <div class="mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <h2 class="font-display text-3xl text-white sm:text-4xl">Performances & Events</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    Watch highlights from our stage performances and community celebrations.
                </p>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                @forelse ($videos as $index => $video)
                    <article
                        @class([
                            'reveal flex flex-col overflow-hidden border border-gold/25 bg-panel-soft/80',
                            'reveal-delay-1' => $index % 3 === 1,
                            'reveal-delay-2' => $index % 3 === 2,
                        ])
                        data-reveal
                    >
                        <div class="aspect-video bg-ink">
                            @if ($video->embed_url)
                                <iframe
                                    class="h-full w-full"
                                    src="{{ $video->embed_url }}"
                                    title="{{ $video->title }}"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"
                                ></iframe>
                            @endif
                        </div>
                        <div class="flex flex-1 flex-col border-t border-gold/20 px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5">
                            <h3 class="font-display text-sm leading-snug text-gold-soft sm:text-xl lg:text-2xl" title="{{ $video->title }}">
                                {{ $video->title }}
                            </h3>
                            @if ($video->description)
                                <div class="mt-1.5 line-clamp-2 text-xs text-ink-soft sm:mt-2 sm:text-sm prose prose-invert max-w-none">{!! $video->description !!}</div>
                            @endif
                        </div>
                    </article>
                @empty
                    <p class="col-span-full py-16 text-center text-ink-soft">No videos published yet.</p>
                @endforelse
            </div>
        </div>
    </section>
@endsection

@push('jsonld')
    @php
        $videoSchema = $videos
            ->filter(fn ($video) => filled($video->embed_url))
            ->map(fn ($video) => [
                '@type' => 'VideoObject',
                'name' => $video->title,
                'description' => strip_tags($video->description) ?: $video->title,
                'thumbnailUrl' => $video->thumbnail_url,
                'embedUrl' => $video->embed_url,
                'contentUrl' => $video->youtube_url,
                'uploadDate' => optional($video->created_at)?->toAtomString(),
                'publisher' => [
                    '@type' => 'Organization',
                    'name' => 'Adity Dance CIC',
                    'logo' => [
                        '@type' => 'ImageObject',
                        'url' => asset('images/logo.png'),
                    ],
                ],
            ])
            ->values()
            ->all();
    @endphp
    @if (count($videoSchema))
        <script type="application/ld+json">
            {!! json_encode([
                '@context' => 'https://schema.org',
                '@type' => 'ItemList',
                'itemListElement' => collect($videoSchema)->map(fn ($item, $index) => [
                    '@type' => 'ListItem',
                    'position' => $index + 1,
                    'item' => $item,
                ])->values()->all(),
            ], JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE) !!}
        </script>
    @endif
@endpush
