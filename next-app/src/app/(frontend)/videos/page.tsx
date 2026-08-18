import { Metadata } from "next";
import Script from "next/script";
import { prisma } from "@/lib/prisma";
import { getEmbedUrl } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Ornament from "@/components/ui/Ornament";

export const metadata: Metadata = {
  title: "Videos | Adity Dance CIC",
  description: "Watch Adity Dance CIC performance videos and stage recordings of Bharatanatyam and Indian folk dance.",
};

export default async function Videos() {
  const videos = await prisma.videos.findMany({
    where: { is_published: true },
    orderBy: { sort_order: "asc" },
  });

  const videoSchema = videos
    .map((video) => ({
      name: video.title,
      description: video.description || video.title,
      embedUrl: getEmbedUrl(video.youtube_url),
      contentUrl: video.youtube_url,
      uploadDate: video.created_at?.toISOString(),
      thumbnailUrl: getEmbedUrl(video.youtube_url)?.replace("https://www.youtube.com/embed/", "https://img.youtube.com/vi/") + "/hqdefault.jpg",
    }))
    .filter((v) => v.embedUrl);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videoSchema.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: item.name,
        description: item.description,
        thumbnailUrl: item.thumbnailUrl,
        embedUrl: item.embedUrl,
        contentUrl: item.contentUrl,
        uploadDate: item.uploadDate,
        publisher: {
          "@type": "Organization",
          name: "Adity Dance CIC",
          logo: {
            "@type": "ImageObject",
            url: "/images/logo.png",
          },
        },
      },
    })),
  };

  return (
    <>
      {videoSchema.length > 0 && (
        <Script id="videos-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <PageHero title="Video Gallery" current="Videos" />

      <section className="section-wash py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">Performances &amp; Events</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              Watch highlights from our stage performances and community celebrations.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {videos.length > 0 ? (
              videos.map((video, index) => {
                let delay: 0 | 1 | 2 | 3 = 0;
                if (index % 3 === 1) delay = 1;
                else if (index % 3 === 2) delay = 2;

                const embedUrl = getEmbedUrl(video.youtube_url);

                return (
                  <Reveal
                    key={Number(video.id)}
                    delay={delay}
                    className="flex flex-col overflow-hidden border border-gold/25 bg-panel-soft/80"
                  >
                    <div className="aspect-video bg-ink">
                      {embedUrl && (
                        <iframe
                          className="h-full w-full"
                          src={embedUrl}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col border-t border-gold/20 px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5">
                      <h3 className="font-display text-sm leading-snug text-gold-soft sm:text-xl lg:text-2xl" title={video.title}>
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="mt-1.5 line-clamp-2 text-xs text-ink-soft sm:mt-2 sm:text-sm">{video.description}</p>
                      )}
                    </div>
                  </Reveal>
                );
              })
            ) : (
              <p className="col-span-full py-16 text-center text-ink-soft">No videos published yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
