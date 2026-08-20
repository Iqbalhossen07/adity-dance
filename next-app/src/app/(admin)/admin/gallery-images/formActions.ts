"use server";

import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function saveImage(formData: FormData) {
  const id = formData.get("id") as string | null;
  const title = formData.get("title") as string;
  const category_id = formData.get("category_id") as string;
  const sort_order = parseInt(formData.get("sort_order") as string || "0", 10);
  const is_published = formData.get("is_published") === "1";
  const image = formData.get("image") as File | null;

  const data: any = {
    title,
    gallery_category_id: category_id ? BigInt(category_id) : null,
    sort_order,
    is_published,
  };

  if (image && image.size > 0) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `gallery-${Date.now()}${path.extname(image.name)}`;
    const uploadDir = path.join(process.cwd(), "public/images/gallery");
    
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {}

    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);
    data.image_path = `/images/gallery/${filename}`;
  }

  if (id) {
    await prisma.gallery_images.update({
      where: { id: BigInt(id) },
      data,
    });
  } else {
    if (!data.image_path) {
      throw new Error("Image file is required.");
    }
    await prisma.gallery_images.create({
      data,
    });
  }
}
