<?php

namespace App\Filament\Resources\Videos\Schemas;

use App\Models\Video;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class VideoForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                TextInput::make('youtube_url')
                    ->label('YouTube video link')
                    ->url()
                    ->helperText('Paste the full YouTube link, e.g. https://www.youtube.com/watch?v=RiZ0YNi_AHQ')
                    ->required()
                    ->maxLength(500)
                    ->rule(function () {
                        return function (string $attribute, mixed $value, \Closure $fail): void {
                            if (! Video::extractYoutubeId(is_string($value) ? $value : null)) {
                                $fail('Please enter a valid YouTube video link.');
                            }
                        };
                    })
                    ->columnSpanFull(),
                Textarea::make('description')
                    ->rows(3)
                    ->columnSpanFull(),
                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0)
                    ->required(),
                Toggle::make('is_published')
                    ->label('Published')
                    ->default(true)
                    ->required(),
            ]);
    }
}
