<?php

namespace App\Filament\Widgets;

use App\Filament\Pages\AccountSettings;
use Filament\Widgets\Widget;

class AccountSecurityWidget extends Widget
{
    protected static ?int $sort = -2;

    protected static bool $isLazy = false;

    protected int | string | array $columnSpan = 'full';

    protected string $view = 'filament.admin.widgets.account-security';

    public function getAccountSettingsUrl(): string
    {
        return url('/admin/account-settings');
    }
}
