<x-filament-widgets::widget>
    <x-filament::section>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 class="text-base font-semibold text-white">
                    Account security
                </h2>
                <p class="mt-1 text-sm text-gray-400">
                    Update the email and password used to sign in to the admin panel.
                </p>
            </div>

            <x-filament::button
                tag="a"
                :href="$this->getAccountSettingsUrl()"
                icon="heroicon-m-lock-closed"
                wire:navigate
            >
                Change email &amp; password
            </x-filament::button>
        </div>
    </x-filament::section>
</x-filament-widgets::widget>
