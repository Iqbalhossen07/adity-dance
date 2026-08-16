<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\Video;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;

class SitemapController extends Controller
{
    public function __invoke(): Response
    {
        $fallback = Carbon::now();

        $contentUpdatedAt = collect([
            Event::query()->max('updated_at'),
            Video::query()->max('updated_at'),
            GalleryImage::query()->max('updated_at'),
        ])
            ->filter()
            ->map(fn ($value) => Carbon::parse($value))
            ->sortDesc()
            ->first() ?? $fallback;

        $pages = [
            ['loc' => route('home'), 'changefreq' => 'weekly', 'priority' => '1.0', 'lastmod' => $contentUpdatedAt],
            ['loc' => route('about'), 'changefreq' => 'monthly', 'priority' => '0.8', 'lastmod' => $fallback],
            ['loc' => route('gallery'), 'changefreq' => 'weekly', 'priority' => '0.8', 'lastmod' => GalleryImage::query()->max('updated_at') ?? $fallback],
            ['loc' => route('videos'), 'changefreq' => 'weekly', 'priority' => '0.8', 'lastmod' => Video::query()->max('updated_at') ?? $fallback],
            ['loc' => route('events'), 'changefreq' => 'daily', 'priority' => '0.9', 'lastmod' => Event::query()->max('updated_at') ?? $fallback],
            ['loc' => route('contact'), 'changefreq' => 'monthly', 'priority' => '0.7', 'lastmod' => $fallback],
        ];

        $urls = '';

        foreach ($pages as $page) {
            $loc = e($page['loc']);
            $lastmod = e(Carbon::parse($page['lastmod'])->toAtomString());
            $changefreq = e($page['changefreq']);
            $priority = e($page['priority']);

            $urls .= <<<XML
    <url>
        <loc>{$loc}</loc>
        <lastmod>{$lastmod}</lastmod>
        <changefreq>{$changefreq}</changefreq>
        <priority>{$priority}</priority>
    </url>

XML;
        }

        $xml = <<<XML
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{$urls}</urlset>
XML;

        return response($xml, 200)
            ->header('Content-Type', 'application/xml; charset=UTF-8');
    }
}
