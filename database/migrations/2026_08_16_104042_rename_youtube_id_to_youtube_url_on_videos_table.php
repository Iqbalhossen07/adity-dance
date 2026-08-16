<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasColumn('videos', 'youtube_id')) {
            return;
        }

        if (! Schema::hasColumn('videos', 'youtube_url')) {
            Schema::table('videos', function (Blueprint $table) {
                $table->string('youtube_url')->nullable()->after('title');
            });
        }

        DB::table('videos')->orderBy('id')->get()->each(function ($video): void {
            $value = trim((string) $video->youtube_id);

            $url = preg_match('/^[a-zA-Z0-9_-]{11}$/', $value)
                ? 'https://www.youtube.com/watch?v='.$value
                : $value;

            DB::table('videos')->where('id', $video->id)->update([
                'youtube_url' => $url,
            ]);
        });

        Schema::table('videos', function (Blueprint $table) {
            $table->dropColumn('youtube_id');
        });
    }

    public function down(): void
    {
        if (! Schema::hasColumn('videos', 'youtube_url') || Schema::hasColumn('videos', 'youtube_id')) {
            return;
        }

        Schema::table('videos', function (Blueprint $table) {
            $table->string('youtube_id')->nullable()->after('title');
        });

        DB::table('videos')->orderBy('id')->get()->each(function ($video): void {
            $url = (string) $video->youtube_url;
            $id = $url;

            if (preg_match('/(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/', $url, $matches)) {
                $id = $matches[1];
            }

            DB::table('videos')->where('id', $video->id)->update([
                'youtube_id' => $id,
            ]);
        });

        Schema::table('videos', function (Blueprint $table) {
            $table->dropColumn('youtube_url');
        });
    }
};
