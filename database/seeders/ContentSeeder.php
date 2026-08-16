<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\GalleryCategory;
use App\Models\GalleryImage;
use App\Models\Video;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $rising = GalleryCategory::query()->updateOrCreate(
            ['slug' => 'rising-lioness'],
            [
                'name' => 'A Rising Lioness 2024',
                'sort_order' => 1,
                'is_published' => true,
            ],
        );

        $whoAmI = GalleryCategory::query()->updateOrCreate(
            ['slug' => 'who-am-i'],
            [
                'name' => 'Who Am I?',
                'sort_order' => 2,
                'is_published' => true,
            ],
        );

        $galleryItems = [
            ['path' => 'gallery/1.jpg', 'category' => $rising->id, 'alt' => 'A Rising Lioness performance', 'order' => 1],
            ['path' => 'gallery/2.jpg', 'category' => $rising->id, 'alt' => 'A Rising Lioness performance', 'order' => 2],
            ['path' => 'gallery/3.jpg', 'category' => $rising->id, 'alt' => 'A Rising Lioness performance', 'order' => 3],
            ['path' => 'gallery/4.jpg', 'category' => $rising->id, 'alt' => 'A Rising Lioness performance', 'order' => 4],
            ['path' => 'gallery/5.jpg', 'category' => $rising->id, 'alt' => 'A Rising Lioness performance', 'order' => 5],
            ['path' => 'gallery/6.jpg', 'category' => $rising->id, 'alt' => 'A Rising Lioness performance', 'order' => 6],
            ['path' => 'gallery/7.jpg', 'category' => $whoAmI->id, 'alt' => 'Who Am I performance', 'order' => 7],
            ['path' => 'gallery/8.jpg', 'category' => $whoAmI->id, 'alt' => 'Who Am I performance', 'order' => 8],
            ['path' => 'gallery/about-adity.jpg', 'category' => $whoAmI->id, 'alt' => 'Adity Dance portrait', 'order' => 9],
            ['path' => 'gallery/about.jpg', 'category' => $rising->id, 'alt' => 'Adity Dance CIC performance', 'order' => 10],
            ['path' => 'gallery/adity.jpg', 'category' => $whoAmI->id, 'alt' => 'Adity Roy', 'order' => 11],
            ['path' => 'gallery/hero-1.png', 'category' => $rising->id, 'alt' => 'Bharatanatyam performance', 'order' => 12],
        ];

        GalleryImage::query()->delete();

        foreach ($galleryItems as $item) {
            GalleryImage::query()->create([
                'image_path' => $item['path'],
                'gallery_category_id' => $item['category'],
                'alt_text' => $item['alt'],
                'title' => $item['alt'],
                'sort_order' => $item['order'],
                'is_published' => true,
            ]);
        }

        Video::query()->updateOrCreate(
            ['youtube_url' => 'https://www.youtube.com/watch?v=RiZ0YNi_AHQ'],
            [
                'title' => 'Who Am I? – From UK to USA at the International Lalon and Folk Festival',
                'description' => 'Highlights from the International Lalon and Folk Festival.',
                'sort_order' => 1,
                'is_published' => true,
            ],
        );

        Event::query()->where('title', 'Event 1')->whereDate('event_date', '2025-07-02')->delete();

        Event::query()->create([
            'title' => 'Event 1',
            'event_date' => '2025-07-02',
            'description' => 'A memorable celebration of dance and culture.',
            'location' => 'Dagenham, Essex',
            'sort_order' => 1,
            'is_published' => true,
        ]);
    }
}
