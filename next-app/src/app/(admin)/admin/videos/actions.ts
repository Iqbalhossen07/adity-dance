"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createVideo(data: FormData) {
  try {
    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const youtube_url = data.get("youtube_url") as string;
    const sort_order = parseInt((data.get("sort_order") as string) || "0", 10);
    const is_published = data.get("is_published") === "true";

    await prisma.videos.create({
      data: {
        title,
        description,
        youtube_url,
        sort_order,
        is_published,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/");
    revalidatePath("/videos");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to create video:", error);
    return { success: false, error: "Failed to create video." };
  }
}

export async function updateVideo(id: number, data: FormData) {
  try {
    const title = data.get("title") as string;
    const description = data.get("description") as string;
    const youtube_url = data.get("youtube_url") as string;
    const sort_order = parseInt((data.get("sort_order") as string) || "0", 10);
    const is_published = data.get("is_published") === "true";

    await prisma.videos.update({
      where: { id: BigInt(id) },
      data: {
        title,
        description,
        youtube_url,
        sort_order,
        is_published,
        updated_at: new Date(),
      },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/");
    revalidatePath("/videos");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to update video:", error);
    return { success: false, error: "Failed to update video." };
  }
}

export async function deleteVideo(id: number) {
  try {
    await prisma.videos.delete({
      where: { id: BigInt(id) },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/");
    revalidatePath("/videos");
    
    return { success: true };
  } catch (error) {
    console.error("Failed to delete video:", error);
    return { success: false, error: "Failed to delete video." };
  }
}
