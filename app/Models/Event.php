<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;

class Event extends Model
{
    protected $fillable = [
        'title',
        'description',
        'event_date',
        'location',
        'ticket_link',
        'image_path',
        'sort_order',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'event_date' => 'date',
            'is_published' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    public function scopeUpcoming(Builder $query): Builder
    {
        return $query->whereDate('event_date', '>=', Carbon::today())->orderBy('event_date');
    }

    public function scopePast(Builder $query): Builder
    {
        return $query->whereDate('event_date', '<', Carbon::today())->orderByDesc('event_date');
    }

    public function getIsUpcomingAttribute(): bool
    {
        return $this->event_date->greaterThanOrEqualTo(Carbon::today());
    }

    public function getImageUrlAttribute(): ?string
    {
        if (blank($this->image_path)) {
            return null;
        }

        $path = ltrim((string) $this->image_path, '/');

        if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
            return $path;
        }

        if (Storage::disk('public')->exists($path)) {
            return Storage::disk('public')->url($path);
        }

        if (str_starts_with($path, 'storage/')) {
            return asset($path);
        }

        return asset($path);
    }
}
