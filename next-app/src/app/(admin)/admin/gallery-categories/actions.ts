"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCategory(data: FormData) {
  try {
    const name = data.get("name") as string;
    const slug = data.get("slug") as string;
    const sort_order = parseInt((data.get("sort_order") as string) || "0", 10);
    const is_published = data.get("is_published") === "true";

    await prisma.gallery_categories.create({
      data: {
        name,
        slug,
        sort_order,
        is_published,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin/gallery-categories");
    revalidatePath("/");
    revalidatePath("/gallery");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to create category:", error);
    return { success: false, error: "Failed to create category." };
  }
}

export async function updateCategory(id: number, data: FormData) {
  try {
    const name = data.get("name") as string;
    const slug = data.get("slug") as string;
    const sort_order = parseInt((data.get("sort_order") as string) || "0", 10);
    const is_published = data.get("is_published") === "true";

    await prisma.gallery_categories.update({
      where: { id: BigInt(id) },
      data: {
        name,
        slug,
        sort_order,
        is_published,
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin/gallery-categories");
    revalidatePath("/");
    revalidatePath("/gallery");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update category:", error);
    return { success: false, error: "Failed to update category." };
  }
}

export async function deleteCategory(id: number) {
  try {
    await prisma.gallery_categories.delete({
      where: { id: BigInt(id) },
    });

    revalidatePath("/admin/gallery-categories");
    revalidatePath("/");
    revalidatePath("/gallery");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete category:", error);
    return { success: false, error: "Failed to delete category." };
  }
}
