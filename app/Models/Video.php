<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'title',
        'youtube_url',
        'description',
        'sort_order',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    public function getYoutubeIdAttribute(): ?string
    {
        return static::extractYoutubeId($this->youtube_url);
    }

    public function getEmbedUrlAttribute(): ?string
    {
        $id = $this->youtube_id;

        return $id ? 'https://www.youtube.com/embed/'.$id : null;
    }

    public function getThumbnailUrlAttribute(): ?string
    {
        $id = $this->youtube_id;

        return $id ? 'https://img.youtube.com/vi/'.$id.'/hqdefault.jpg' : null;
    }

    public static function extractYoutubeId(?string $value): ?string
    {
        if (blank($value)) {
            return null;
        }

        $value = trim($value);

        if (preg_match('/^[a-zA-Z0-9_-]{11}$/', $value)) {
            return $value;
        }

        $patterns = [
            '/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/',
            '/youtube\.com\/watch\?.*(?:&|\?)v=([a-zA-Z0-9_-]{11})/',
        ];

        foreach ($patterns as $pattern) {
            if (preg_match($pattern, $value, $matches)) {
                return $matches[1];
            }
        }

        return null;
    }
}
