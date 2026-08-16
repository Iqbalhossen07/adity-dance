@switch($name)
    @case('home')
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-9.5Z"/>
        </svg>
        @break
    @case('events')
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
            <rect x="3.5" y="5" width="17" height="15" rx="2"/>
            <path stroke-linecap="round" d="M8 3.5V7M16 3.5V7M3.5 10h17"/>
        </svg>
        @break
    @case('gallery')
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
            <rect x="3.5" y="4.5" width="17" height="15" rx="2"/>
            <circle cx="9" cy="10" r="1.6"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="m7.5 17 3.2-3.4 2.3 2.2L16 12.5 20 17"/>
        </svg>
        @break
    @case('videos')
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
            <rect x="3.5" y="6" width="12.5" height="12" rx="2"/>
            <path stroke-linejoin="round" d="m16 10 4.5-2.5v9L16 14"/>
        </svg>
        @break
@endswitch
