"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { getImageUrl } from "@/lib/utils";

interface Category {
  slug: string;
  name: string;
}

interface ImageItem {
  id: number;
  url: string | null;
  alt: string;
  categorySlug: string;
}

interface GalleryGridProps {
  categories: Category[];
  images: ImageItem[];
}

export default function GalleryGrid({ categories, images }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.categorySlug === activeFilter);

  return (
    <>
      <div className="reveal mt-8 -mx-1 overflow-x-auto px-1 sm:mt-10 sm:overflow-visible is-visible">
        <div className="flex min-w-max justify-start gap-2 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-3">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-2 text-[0.65rem] font-semibold tracking-[0.14em] uppercase transition sm:px-5 sm:text-sm ${
              activeFilter === "all"
                ? "border border-vermillion bg-vermillion text-white"
                : "border border-gold/30 text-gold-soft hover:border-gold-soft"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveFilter(category.slug)}
              className={`px-3.5 py-2 text-[0.65rem] font-semibold tracking-[0.14em] uppercase transition sm:px-5 sm:text-sm ${
                activeFilter === category.slug
                  ? "border border-vermillion bg-vermillion text-white"
                  : "border border-gold/30 text-gold-soft hover:border-gold-soft"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4" data-lightbox-gallery>
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => {
            let delay: 0 | 1 | 2 | 3 = 0;
            if (index % 3 === 1) delay = 1;
            else if (index % 3 === 2) delay = 2;

            return (
              <button
                key={image.id}
                type="button"
                className={`gallery-item reveal aspect-square overflow-hidden ${
                  delay === 1 ? "reveal-delay-1" : ""
                } ${delay === 2 ? "reveal-delay-2" : ""} is-visible`}
                data-lightbox-trigger
                data-lightbox-src={getImageUrl(image.url) || ""}
                data-lightbox-alt={image.alt}
                aria-label={`View larger: ${image.alt}`}
              >
                <img
                  src={getImageUrl(image.url) || ""}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="gallery-zoom" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path strokeLinecap="round" d="M16.5 16.5L21 21M11 8.5v5M8.5 11h5" />
                  </svg>
                </span>
              </button>
            );
          })
        ) : (
          <p className="col-span-full py-16 text-center text-ink-soft">No gallery images match this filter.</p>
        )}
      </div>
    </>
  );
}
