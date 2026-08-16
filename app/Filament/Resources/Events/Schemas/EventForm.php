<?php

namespace App\Filament\Resources\Events\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class EventForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                Textarea::make('description')
                    ->rows(4)
                    ->columnSpanFull(),
                DatePicker::make('event_date')
                    ->required()
                    ->native(false),
                TextInput::make('location')
                    ->maxLength(255),
                TextInput::make('ticket_link')
                    ->label('Ticket link')
                    ->url()
                    ->nullable()
                    ->helperText('Full booking URL. Shown as a “Book Now” button on the website.')
                    ->maxLength(500)
                    ->dehydrateStateUsing(fn (?string $state): ?string => filled($state) ? $state : null)
                    ->columnSpanFull(),
                FileUpload::make('image_path')
                    ->label('Cover image')
                    ->image()
                    ->disk('public')
                    ->directory('events')
                    ->visibility('public')
                    ->imageEditor()
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
