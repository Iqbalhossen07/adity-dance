"use server";

import { prisma } from "@/lib/prisma";

export async function saveCategory(formData: FormData) {
  const id = formData.get("id") as string | null;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const sort_order = parseInt(formData.get("sort_order") as string || "0", 10);

  const data = {
    name,
    slug,
    sort_order,
  };

  if (id) {
    await prisma.gallery_categories.update({
      where: { id: BigInt(id) },
      data,
    });
  } else {
    await prisma.gallery_categories.create({
      data,
    });
  }
}
