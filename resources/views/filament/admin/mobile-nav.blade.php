@php
    $isLogin = request()->routeIs('filament.admin.auth.*');
    $current = trim(request()->path(), '/');

    $dockItems = [
        [
            'label' => 'Home',
            'url' => url('/admin'),
            'active' => $current === 'admin',
            'icon' => 'home',
        ],
        [
            'label' => 'Events',
            'url' => url('/admin/events'),
            'active' => str_starts_with($current, 'admin/events'),
            'icon' => 'events',
        ],
        [
            'label' => 'Gallery',
            'url' => url('/admin/gallery-images'),
            'active' => str_starts_with($current, 'admin/gallery'),
            'icon' => 'gallery',
        ],
        [
            'label' => 'Videos',
            'url' => url('/admin/videos'),
            'active' => str_starts_with($current, 'admin/videos'),
            'icon' => 'videos',
        ],
    ];

    $sheetLinks = [
        [
            'group' => 'Website Content',
            'items' => [
                ['label' => 'Dashboard', 'url' => url('/admin'), 'desc' => 'Overview & stats'],
                ['label' => 'Events', 'url' => url('/admin/events'), 'desc' => 'Upcoming & past'],
                ['label' => 'Videos', 'url' => url('/admin/videos'), 'desc' => 'YouTube performances'],
            ],
        ],
        [
            'group' => 'Gallery',
            'items' => [
                ['label' => 'Images', 'url' => url('/admin/gallery-images'), 'desc' => 'Upload & manage'],
                ['label' => 'Categories', 'url' => url('/admin/gallery-categories'), 'desc' => 'Filter groups'],
            ],
        ],
        [
            'group' => 'Quick links',
            'items' => [
                ['label' => 'View website', 'url' => url('/'), 'desc' => 'Open public site', 'external' => true],
                ['label' => 'Account settings', 'url' => url('/admin/account-settings'), 'desc' => 'Change email & password'],
            ],
        ],
    ];
@endphp

@unless ($isLogin)
    <div
        class="adity-mobile-nav lg:hidden"
        x-data="adityMobileNav()"
        x-cloak
        @keydown.escape.window="closeSheet()"
    >
        {{-- Bottom dock --}}
        <nav class="adity-dock" aria-label="Mobile navigation">
            <div class="adity-dock-shell">
                <div class="adity-dock-glow" aria-hidden="true"></div>

                @foreach ($dockItems as $item)
                    <a
                        href="{{ $item['url'] }}"
                        @class(['adity-dock-item', 'is-active' => $item['active']])
                        @click="pulse($event)"
                        wire:navigate
                    >
                        <span class="adity-dock-icon" aria-hidden="true">
                            @include('filament.admin.partials.dock-icon', ['name' => $item['icon']])
                        </span>
                        <span class="adity-dock-label">{{ $item['label'] }}</span>
                        <span class="adity-dock-indicator" aria-hidden="true"></span>
                    </a>
                @endforeach

                <button
                    type="button"
                    class="adity-dock-item adity-dock-menu"
                    :class="{ 'is-active': sheetOpen }"
                    @click="toggleSheet()"
                    :aria-expanded="sheetOpen.toString()"
                    aria-controls="adity-nav-sheet"
                >
                    <span class="adity-dock-icon" aria-hidden="true">
                        <span class="adity-menu-bars" :class="{ 'is-open': sheetOpen }">
                            <span></span><span></span><span></span>
                        </span>
                    </span>
                    <span class="adity-dock-label" x-text="sheetOpen ? 'Close' : 'Menu'"></span>
                    <span class="adity-dock-indicator" aria-hidden="true"></span>
                </button>
            </div>
        </nav>

        {{-- Sheet overlay --}}
        <div
            class="adity-sheet-overlay"
            x-show="sheetOpen"
            x-transition:enter="adity-fade-enter"
            x-transition:enter-start="adity-fade-enter-start"
            x-transition:enter-end="adity-fade-enter-end"
            x-transition:leave="adity-fade-leave"
            x-transition:leave-start="adity-fade-leave-start"
            x-transition:leave-end="adity-fade-leave-end"
            @click="closeSheet()"
        ></div>

        {{-- Navigation sheet --}}
        <div
            id="adity-nav-sheet"
            class="adity-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            x-show="sheetOpen"
            x-transition:enter="adity-sheet-enter"
            x-transition:enter-start="adity-sheet-enter-start"
            x-transition:enter-end="adity-sheet-enter-end"
            x-transition:leave="adity-sheet-leave"
            x-transition:leave-start="adity-sheet-leave-start"
            x-transition:leave-end="adity-sheet-leave-end"
            @click.stop
        >
            <div class="adity-sheet-handle" aria-hidden="true"></div>

            <div class="adity-sheet-header">
                <div>
                    <p class="adity-sheet-kicker">Adity Dance</p>
                    <h2 class="adity-sheet-title">Navigate studio</h2>
                </div>
                <button type="button" class="adity-sheet-close" @click="closeSheet()" aria-label="Close menu">
                    <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </button>
            </div>

            <div class="adity-sheet-body">
                @foreach ($sheetLinks as $groupIndex => $group)
                    <section class="adity-sheet-group" style="--delay: {{ $groupIndex * 40 }}ms">
                        <h3 class="adity-sheet-group-label">{{ $group['group'] }}</h3>
                        <div class="adity-sheet-list">
                            @foreach ($group['items'] as $link)
                                <a
                                    href="{{ $link['url'] }}"
                                    class="adity-sheet-link"
                                    @if (! empty($link['external'])) target="_blank" rel="noopener noreferrer" @else wire:navigate @endif
                                    @click="closeSheet()"
                                >
                                    <span class="adity-sheet-link-text">
                                        <span class="adity-sheet-link-title">{{ $link['label'] }}</span>
                                        <span class="adity-sheet-link-desc">{{ $link['desc'] }}</span>
                                    </span>
                                    <span class="adity-sheet-link-arrow" aria-hidden="true">→</span>
                                </a>
                            @endforeach
                        </div>
                    </section>
                @endforeach
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('alpine:init', () => {
            Alpine.data('adityMobileNav', () => ({
                sheetOpen: false,
                openSheet() {
                    this.sheetOpen = true;
                    document.body.classList.add('adity-sheet-open');
                    if (navigator.vibrate) navigator.vibrate(8);
                },
                closeSheet() {
                    this.sheetOpen = false;
                    document.body.classList.remove('adity-sheet-open');
                },
                toggleSheet() {
                    this.sheetOpen ? this.closeSheet() : this.openSheet();
                },
                pulse(event) {
                    const item = event.currentTarget;
                    item.classList.add('is-pressed');
                    if (navigator.vibrate) navigator.vibrate(6);
                    setTimeout(() => item.classList.remove('is-pressed'), 180);
                },
            }));
        });
    </script>
@endunless
