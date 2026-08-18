import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Ornament from "@/components/ui/Ornament";
import GalleryGrid from "@/features/gallery/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Adity Dance CIC",
  description: "Browse the Adity Dance CIC photo gallery — performances and community celebrations of Bharatanatyam and Indian folk dance.",
};

export default async function Gallery() {
  const categories = await prisma.gallery_categories.findMany({
    where: { is_published: true },
    orderBy: { sort_order: "asc" },
  });

  const images = await prisma.gallery_images.findMany({
    where: { is_published: true },
    orderBy: { sort_order: "asc" },
    include: { gallery_categories: true },
  });

  const formattedCategories = categories.map((c) => ({
    slug: c.slug,
    name: c.name,
  }));

  const formattedImages = images.map((img) => ({
    id: Number(img.id),
    url: img.image_path,
    alt: img.alt_text || img.title || "Adity Dance gallery image",
    categorySlug: img.gallery_categories?.slug || "uncategorized",
  }));

  return (
    <>
      <PageHero title="Our Gallery" current="Gallery" />

      <section className="section-wash py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">Moments of Dance &amp; Celebration</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              From stage to celebration — glimpses of performance, community, and the joy of dance.
            </p>
          </Reveal>

          <GalleryGrid categories={formattedCategories} images={formattedImages} />
        </div>
      </section>
    </>
  );
}
