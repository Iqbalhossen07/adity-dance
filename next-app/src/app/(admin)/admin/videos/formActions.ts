"use server";

import { prisma } from "@/lib/prisma";

export async function saveVideo(formData: FormData) {
  const id = formData.get("id") as string | null;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const youtube_url = formData.get("youtube_url") as string;
  const sort_order = parseInt(formData.get("sort_order") as string || "0", 10);
  const is_published = formData.get("is_published") === "1";

  const data = {
    title,
    description,
    youtube_url,
    sort_order,
    is_published,
  };

  if (id) {
    await prisma.videos.update({
      where: { id: BigInt(id) },
      data,
    });
  } else {
    await prisma.videos.create({
      data,
    });
  }
}
