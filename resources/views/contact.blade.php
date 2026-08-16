@extends('layouts.app')

@section('title', 'Contact Us | Adity Dance CIC')
@section('meta_description', 'Contact Adity Dance CIC in Dagenham, Essex. Email, phone, or WhatsApp for event information and bookings.')
@section('og_image', asset('images/logo.png'))

@section('content')
    @include('partials.page-hero', ['title' => 'Contact Us', 'current' => 'Contact'])

    <section class="section-wash py-16 sm:py-24 lg:py-28">
        <div class="mx-auto max-w-7xl safe-px">
            <div class="reveal mx-auto max-w-2xl text-center" data-reveal>
                <h2 class="font-display text-3xl text-white sm:text-4xl">Get in Touch</h2>
                @include('partials.ornament', ['tone' => 'dark'])
                <p class="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                    We would love to hear from you — whether you have a question about our events, gallery, or upcoming performances.
                </p>
            </div>

            <div class="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
                <a
                    href="mailto:adity48@yahoo.com"
                    class="reveal group border border-gold/25 bg-panel-soft/70 p-6 transition hover:border-gold/50 sm:p-8"
                    data-reveal
                >
                    <p class="text-[0.7rem] tracking-[0.22em] text-gold-soft uppercase">Email Us</p>
                    <p class="mt-3 break-all font-display text-2xl text-white transition group-hover:text-gold-soft">
                        adity48@yahoo.com
                    </p>
                </a>

                <a
                    href="tel:+447894222114"
                    class="reveal reveal-delay-1 group border border-gold/25 bg-panel-soft/70 p-6 transition hover:border-gold/50 sm:p-8"
                    data-reveal
                >
                    <p class="text-[0.7rem] tracking-[0.22em] text-gold-soft uppercase">Call Us</p>
                    <p class="mt-3 font-display text-2xl text-white transition group-hover:text-gold-soft">
                        +44 7894 222114
                    </p>
                </a>

                <div
                    class="reveal reveal-delay-2 border border-gold/25 bg-panel-soft/70 p-6 sm:p-8"
                    data-reveal
                >
                    <p class="text-[0.7rem] tracking-[0.22em] text-gold-soft uppercase">Our Address</p>
                    <p class="mt-3 font-display text-2xl leading-snug text-white">
                        175 Woodward Road, Dagenham, Essex, RM9 4SU
                    </p>
                </div>
            </div>

            <div class="reveal mx-auto mt-10 max-w-3xl border border-gold/25 bg-white/[0.03] px-5 py-8 text-center sm:mt-14 sm:px-8 sm:py-10" data-reveal>
                <p class="font-display text-2xl text-gold-soft sm:text-3xl">Prefer WhatsApp?</p>
                <p class="mt-3 text-sm text-ink-soft">
                    Reach out quickly using the sticky WhatsApp button, or message us directly.
                </p>
                <a
                    href="https://wa.me/447894222114"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-cultural mt-6 inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white"
                >
                    Chat on WhatsApp
                </a>
            </div>
        </div>
    </section>
@endsection
