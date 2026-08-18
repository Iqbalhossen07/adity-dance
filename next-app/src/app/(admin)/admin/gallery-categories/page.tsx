import { prisma } from "@/lib/prisma";
import CategoriesClient from "./CategoriesClient";

export default async function CategoriesAdminPage() {
  const categories = await prisma.gallery_categories.findMany({
    orderBy: { sort_order: "asc" },
  });

  const formattedCategories = categories.map((c) => ({
    id: Number(c.id),
    name: c.name,
    slug: c.slug,
    sort_order: c.sort_order,
    is_published: c.is_published,
  }));

  return <CategoriesClient categories={formattedCategories} />;
}
