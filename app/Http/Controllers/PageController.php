<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\GalleryCategory;
use App\Models\GalleryImage;
use App\Models\Video;
use Illuminate\View\View;

class PageController extends Controller
{
    public function about(): View
    {
        return view('about');
    }

    public function gallery(): View
    {
        return view('gallery', [
            'categories' => GalleryCategory::query()
                ->published()
                ->orderBy('sort_order')
                ->orderBy('name')
                ->get(),
            'images' => GalleryImage::query()
                ->published()
                ->where(function ($query) {
                    $query->whereNull('gallery_category_id')
                        ->orWhereHas('category', fn ($category) => $category->published());
                })
                ->with('category')
                ->orderBy('sort_order')
                ->orderBy('id')
                ->get(),
        ]);
    }

    public function videos(): View
    {
        return view('videos', [
            'videos' => Video::query()
                ->published()
                ->orderBy('sort_order')
                ->orderBy('id')
                ->get(),
        ]);
    }

    public function events(): View
    {
        return view('events', [
            'upcomingEvents' => Event::query()->published()->upcoming()->get(),
            'pastEvents' => Event::query()->published()->past()->get(),
        ]);
    }

    public function contact(): View
    {
        return view('contact');
    }
}
