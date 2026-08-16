<footer class="relative overflow-hidden bg-stage-deep pb-[env(safe-area-inset-bottom)] text-white">
    <div class="jali-overlay pointer-events-none absolute inset-0 opacity-30" aria-hidden="true"></div>

    <div class="relative mx-auto max-w-7xl safe-px pb-6 pt-6 sm:pb-8">
        @include('partials.ornament', ['tone' => 'dark'])
    </div>

    <div class="relative mx-auto grid max-w-7xl gap-10 safe-px pb-12 pt-2 sm:gap-12 sm:pb-16 lg:grid-cols-4">
        <div class="lg:col-span-2">
            <div class="mb-5 flex items-center gap-3">
                <img src="{{ asset('images/logo.png') }}" alt="Adity Dance CIC" class="h-12 w-auto sm:h-14">
                <span class="font-display text-2xl tracking-wide text-gold-soft sm:text-3xl">Adity Dance</span>
            </div>
            <p class="max-w-md text-sm leading-relaxed text-white/70">
                Adity Dance CIC, founded in 2023, celebrates culture and creativity through the joy of dance — events, performances, and community moments for all ages and abilities.
            </p>
            <div class="mt-6 flex flex-wrap gap-5">
                <a
                    href="https://www.facebook.com/profile.php?id=100051044897638"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm tracking-wide text-gold-soft transition hover:text-white"
                >
                    Facebook
                </a>
                <a
                    href="https://wa.me/447894222114"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm tracking-wide text-gold-soft transition hover:text-white"
                >
                    WhatsApp
                </a>
            </div>
        </div>

        <div>
            <h3 class="font-display text-2xl text-gold-soft">Explore</h3>
            <ul class="mt-4 space-y-3 text-sm text-white/70">
                <li><a href="{{ route('home') }}" class="hover:text-gold-soft">Home</a></li>
                <li><a href="{{ route('about') }}" class="hover:text-gold-soft">About</a></li>
                <li><a href="{{ route('gallery') }}" class="hover:text-gold-soft">Gallery</a></li>
                <li><a href="{{ route('videos') }}" class="hover:text-gold-soft">Videos</a></li>
                <li><a href="{{ route('events') }}" class="hover:text-gold-soft">Events</a></li>
            </ul>
        </div>

        <div>
            <h3 class="font-display text-2xl text-gold-soft">Visit</h3>
            <ul class="mt-4 space-y-3 text-sm text-white/70">
                <li>
                    <a href="mailto:adity48@yahoo.com" class="break-all hover:text-gold-soft">adity48@yahoo.com</a>
                </li>
                <li>
                    <a href="tel:+447894222114" class="hover:text-gold-soft">+44 7894 222114</a>
                </li>
                <li class="leading-relaxed">175 Woodward Road, Dagenham, Essex, RM9 4SU</li>
                <li><a href="{{ route('contact') }}" class="hover:text-gold-soft">Contact page →</a></li>
            </ul>
        </div>
    </div>

    <div class="relative border-t border-gold/20">
        <div class="mx-auto flex max-w-7xl flex-col gap-2 safe-px py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {{ date('Y') }} Adity Dance CIC. All rights reserved.</p>
            <p class="tracking-[0.12em] text-gold/60 uppercase sm:tracking-[0.18em]">Celebrating culture through the joy of dance</p>
        </div>
    </div>
</footer>
