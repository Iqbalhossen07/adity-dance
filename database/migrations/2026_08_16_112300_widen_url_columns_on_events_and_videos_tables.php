<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('videos', function (Blueprint $table) {
            $table->string('youtube_url', 500)->change();
        });

        Schema::table('events', function (Blueprint $table) {
            $table->string('ticket_link', 500)->nullable()->change();
            $table->string('image_path', 500)->nullable()->change();
        });

        Schema::table('gallery_images', function (Blueprint $table) {
            $table->string('image_path', 500)->change();
        });
    }

    public function down(): void
    {
        Schema::table('videos', function (Blueprint $table) {
            $table->string('youtube_url', 255)->change();
        });

        Schema::table('events', function (Blueprint $table) {
            $table->string('ticket_link', 255)->nullable()->change();
            $table->string('image_path', 255)->nullable()->change();
        });

        Schema::table('gallery_images', function (Blueprint $table) {
            $table->string('image_path', 255)->change();
        });
    }
};
