@php
    $variant = $variant ?? 'sidebar';
@endphp

<form
    action="{{ filament()->getLogoutUrl() }}"
    method="post"
    @class([
        'adity-logout',
        'adity-logout--sidebar' => $variant === 'sidebar',
        'adity-logout--sheet' => $variant === 'sheet',
    ])
>
    @csrf

    <button type="submit" class="adity-logout-btn">
        <span class="adity-logout-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 12h9m0 0-3-3m3 3-3 3"/>
            </svg>
        </span>
        <span class="adity-logout-copy">
            <span class="adity-logout-title">Log out</span>
            @if ($variant === 'sheet')
                <span class="adity-logout-desc">Sign out of the admin panel</span>
            @endif
        </span>
    </button>
</form>
