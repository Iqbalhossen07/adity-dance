import { prisma } from "@/lib/prisma";
import VideosClient from "./VideosClient";

export default async function VideosAdminPage() {
  const videos = await prisma.videos.findMany({
    orderBy: { sort_order: "asc" },
  });

  const formattedVideos = videos.map((v) => ({
    id: Number(v.id),
    title: v.title,
    youtube_url: v.youtube_url,
    description: v.description,
    sort_order: v.sort_order,
    is_published: v.is_published,
  }));

  return <VideosClient videos={formattedVideos} />;
}
