<?php

namespace App\Filament\Pages;

use App\Filament\Pages\Auth\EditProfile;
use BackedEnum;
use Filament\Facades\Filament;
use Filament\Pages\PageConfiguration;
use Filament\Panel;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Route;
use UnitEnum;

class AccountSettings extends EditProfile
{
    protected static bool $isDiscovered = true;

    protected static bool $shouldRegisterNavigation = true;

    protected static string | UnitEnum | null $navigationGroup = 'Settings';

    protected static ?string $navigationLabel = 'Account settings';

    protected static string | BackedEnum | null $navigationIcon = Heroicon::OutlinedLockClosed;

    protected static ?int $navigationSort = 100;

    public static function getLabel(): string
    {
        return 'Account settings';
    }

    public function getTitle(): string
    {
        return 'Change email & password';
    }

    public static function getNavigationLabel(): string
    {
        return 'Account settings';
    }

    public static function getSlug(?Panel $panel = null): string
    {
        return 'account-settings';
    }

    public static function getRelativeRouteName(Panel $panel): string
    {
        return 'account-settings';
    }

    public static function getRouteName(?Panel $panel = null): string
    {
        $panel ??= Filament::getCurrentOrDefaultPanel();

        return $panel->generateRouteName('pages.'.static::getRelativeRouteName($panel));
    }

    public static function registerRoutes(Panel $panel, ?PageConfiguration $configuration = null): void
    {
        Route::name('pages.')->group(fn () => static::routes($panel, $configuration));
    }
}
