import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import ViewVideoButton from "./ViewVideoButton";

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
            const match = video.youtube_url.match(/(?:youtu\\.be\\/|youtube\\.com\\/(?:embed\\/|v\\/|watch\\?v=|watch\\?.+&v=|shorts\\/))([^"&?\\/\\s]{11})/);
            const youtubeId = match ? match[1] : null;

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
                      <ViewVideoButton video={video} />
                      <Link
                        href={`/admin/videos/${video.id}/edit`}
                        className="flex items-center gap-1.5 rounded-lg border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold-soft hover:bg-gold/20 hover:text-white transition-colors"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </Link>
                      <form action={deleteVideo}>
                        <input type="hidden" name="id" value={video.id.toString()} />
                        <button type="submit" className="flex items-center gap-1.5 rounded-lg border border-[#cb5660]/30 bg-[#cb5660]/10 px-3 py-1.5 text-xs font-semibold text-[#cb5660] hover:bg-[#cb5660]/20 hover:text-white transition-colors">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
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
