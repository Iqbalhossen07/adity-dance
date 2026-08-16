<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\Video;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function __invoke(): View
    {
        return view('home', [
            'upcomingEvents' => Event::query()->published()->upcoming()->limit(3)->get(),
            'galleryImages' => GalleryImage::query()
                ->published()
                ->where(function ($query) {
                    $query->whereNull('gallery_category_id')
                        ->orWhereHas('category', fn ($category) => $category->published());
                })
                ->orderBy('sort_order')
                ->orderBy('id')
                ->limit(8)
                ->get(),
            'featuredVideo' => Video::query()->published()->orderBy('sort_order')->orderBy('id')->first(),
        ]);
    }
}
