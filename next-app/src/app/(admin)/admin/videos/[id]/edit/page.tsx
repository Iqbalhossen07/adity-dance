import { prisma } from "@/lib/prisma";
import VideoForm from "../../VideoForm";
import { notFound } from "next/navigation";

export default async function EditVideoPage({ params }: { params: { id: string } }) {
  const video = await prisma.videos.findUnique({
    where: { id: BigInt(params.id) }
  });

  if (!video) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Edit Video</h1>
      <VideoForm video={video} />
    </div>
  );
}
