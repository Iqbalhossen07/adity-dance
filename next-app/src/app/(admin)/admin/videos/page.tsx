import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";

async function deleteVideo(formData: FormData) {
  "use server";
  const id = formData.get("id");
  if (id) {
    await prisma.videos.delete({ where: { id: BigInt(id as string) } });
    revalidatePath("/admin/videos");
  }
}

export default async function VideosPage() {
  const videos = await prisma.videos.findMany({
    orderBy: { sort_order: "asc" },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Videos</h1>
        <Link
          href="/admin/videos/create"
          className="flex items-center gap-2 rounded-lg bg-[#cb5660] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ba4d55] transition-colors"
        >
          Add Video
        </Link>
      </div>

      {videos.length === 0 ? (
        <div className="rounded-2xl border border-gold/10 bg-[#140b0e] p-12 text-center text-ink-soft shadow-xl">
          No videos found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => {
            // Extract youtube ID for thumbnail
            let youtubeId = "";
            try {
              const url = new URL(video.youtube_url);
              if (url.hostname.includes("youtube.com")) {
                youtubeId = url.searchParams.get("v") || "";
              } else if (url.hostname.includes("youtu.be")) {
                youtubeId = url.pathname.slice(1);
              }
            } catch (e) {}

            return (
              <div key={video.id.toString()} className="relative overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] shadow-xl transition-all hover:border-gold/30 flex flex-col">
                {youtubeId ? (
                  <div className="relative aspect-video w-full bg-black">
                    <img src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`} alt="Video Thumbnail" className="w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white/20 p-3 backdrop-blur-md">
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video w-full bg-black/50 flex items-center justify-center">
                    <svg className="h-10 w-10 text-ink-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  </div>
                )}
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-xl font-bold text-white line-clamp-2">{video.title}</h3>
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    {video.is_published ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                        Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                        Draft
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/admin/videos/${video.id}/edit`}
                        className="text-sm font-medium text-gold-soft hover:text-white transition"
                      >
                        Edit
                      </Link>
                      <form action={deleteVideo}>
                        <input type="hidden" name="id" value={video.id.toString()} />
                        <button type="submit" className="text-sm font-medium text-[#cb5660] hover:text-[#ba4d55] transition">
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
