"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createImage(data: FormData) {
  try {
    const title = data.get("title") as string;
    const image_path = data.get("image_path") as string;
    const alt_text = data.get("alt_text") as string;
    const gallery_category_id = data.get("gallery_category_id") ? parseInt(data.get("gallery_category_id") as string, 10) : null;
    const sort_order = parseInt((data.get("sort_order") as string) || "0", 10);
    const is_published = data.get("is_published") === "true";

    await prisma.gallery_images.create({
      data: {
        title,
        image_path,
        alt_text,
        gallery_category_id,
        sort_order,
        is_published,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin/gallery-images");
    revalidatePath("/");
    revalidatePath("/gallery");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to create image:", error);
    return { success: false, error: "Failed to create image." };
  }
}

export async function updateImage(id: number, data: FormData) {
  try {
    const title = data.get("title") as string;
    const image_path = data.get("image_path") as string;
    const alt_text = data.get("alt_text") as string;
    const gallery_category_id = data.get("gallery_category_id") ? parseInt(data.get("gallery_category_id") as string, 10) : null;
    const sort_order = parseInt((data.get("sort_order") as string) || "0", 10);
    const is_published = data.get("is_published") === "true";

    await prisma.gallery_images.update({
      where: { id: BigInt(id) },
      data: {
        title,
        image_path,
        alt_text,
        gallery_category_id,
        sort_order,
        is_published,
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin/gallery-images");
    revalidatePath("/");
    revalidatePath("/gallery");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update image:", error);
    return { success: false, error: "Failed to update image." };
  }
}

export async function deleteImage(id: number) {
  try {
    await prisma.gallery_images.delete({
      where: { id: BigInt(id) },
    });

    revalidatePath("/admin/gallery-images");
    revalidatePath("/");
    revalidatePath("/gallery");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete image:", error);
    return { success: false, error: "Failed to delete image." };
  }
}
