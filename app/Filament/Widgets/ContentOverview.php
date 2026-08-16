<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\Video;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ContentOverview extends StatsOverviewWidget
{
    protected ?string $heading = 'Website overview';

    protected ?string $description = 'Published content across the Adity Dance website';

    protected function getStats(): array
    {
        $upcoming = Event::query()->published()->upcoming()->count();
        $past = Event::query()->published()->past()->count();
        $images = GalleryImage::query()->published()->count();
        $videos = Video::query()->published()->count();

        return [
            Stat::make('Upcoming events', (string) $upcoming)
                ->description($past.' past event'.($past === 1 ? '' : 's'))
                ->descriptionIcon('heroicon-m-calendar-days')
                ->color('warning'),
            Stat::make('Gallery images', (string) $images)
                ->description('Published on the site')
                ->descriptionIcon('heroicon-m-photo')
                ->color('primary'),
            Stat::make('Videos', (string) $videos)
                ->description('YouTube performances')
                ->descriptionIcon('heroicon-m-film')
                ->color('info'),
        ];
    }
}
