import { prisma } from "@/lib/prisma";
import ImagesClient from "./ImagesClient";

export default async function ImagesAdminPage() {
  const images = await prisma.gallery_images.findMany({
    orderBy: { sort_order: "asc" },
  });

  const categories = await prisma.gallery_categories.findMany({
    orderBy: { sort_order: "asc" },
  });

  const formattedImages = images.map((img) => ({
    id: Number(img.id),
    title: img.title,
    image_path: img.image_path,
    alt_text: img.alt_text,
    gallery_category_id: img.gallery_category_id ? Number(img.gallery_category_id) : null,
    sort_order: img.sort_order,
    is_published: img.is_published,
  }));

  const formattedCategories = categories.map((c) => ({
    id: Number(c.id),
    name: c.name,
  }));

  return <ImagesClient images={formattedImages} categories={formattedCategories} />;
}
