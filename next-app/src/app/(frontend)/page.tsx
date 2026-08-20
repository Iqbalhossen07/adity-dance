import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getImageUrl, getEmbedUrl } from "@/lib/utils";
import HeroSlider from "@/features/events/components/HeroSlider";
import Reveal from "@/components/ui/Reveal";
import Ornament from "@/components/ui/Ornament";
import Corner from "@/components/ui/Corner";

export default async function Home() {
  const upcomingEvents = await prisma.events.findMany({
    where: {
      is_published: true,
      event_date: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
      },
    },
    orderBy: { event_date: "asc" },
    take: 3,
  });

  const galleryImages = await prisma.gallery_images.findMany({
    where: { is_published: true },
    orderBy: { sort_order: "asc" },
    take: 8,
  });

  const featuredVideo = await prisma.videos.findFirst({
    where: { is_published: true },
    orderBy: { sort_order: "asc" },
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-white">
        <HeroSlider />

        <div
          className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.12] lg:block"
          aria-hidden="true"
        >
          <svg
            className="mandala-mark h-[34rem] w-[34rem] text-gold-soft"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="0.6" />
            {Array.from({ length: 12 }).map((_, i) => (
              <path
                key={i}
                d="M100 12c4 18 4 34 0 52-4-18-4-34 0-52Z"
                stroke="currentColor"
                strokeWidth="0.5"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end safe-px pb-12 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
          <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold-soft uppercase sm:text-[0.7rem] sm:tracking-[0.42em]">
            Events · Performances · Gallery
          </p>
          <p className="mt-3 font-display text-[2.75rem] leading-[0.95] tracking-wide text-gold-soft sm:mt-4 sm:text-6xl lg:text-7xl xl:text-8xl">
            Adity Dance
          </p>
          <div className="brand-underline" aria-hidden="true"></div>
          <h1 className="mt-5 max-w-3xl font-display text-[1.65rem] leading-tight text-balance italic text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            Celebrating culture &amp; creativity through the joy of dance
          </h1>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
            Community events, stage performances, and gallery moments rooted in Bharatanatyam and Indian folk dance.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/events"
              className="btn-cultural inline-flex items-center justify-center px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-white sm:px-8"
            >
              View Events
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center border border-gold/50 px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-gold-soft transition hover:border-gold-soft hover:bg-white/5 sm:px-8"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural values ribbon */}
      <section
        className="border-y border-gold/25 bg-stage-deep py-4 text-gold-soft sm:py-5"
        aria-label="Cultural values"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 safe-px text-center text-[0.62rem] font-semibold tracking-[0.2em] uppercase sm:gap-x-12 sm:text-[0.7rem] sm:tracking-[0.32em]">
          <span>Natya</span>
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-gold/60 sm:inline-block" aria-hidden="true"></span>
          <span>Rasa</span>
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-gold/60 sm:inline-block" aria-hidden="true"></span>
          <span>Sangam</span>
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-gold/60 sm:inline-block" aria-hidden="true"></span>
          <span>Inclusion</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-wash relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute left-3 top-6 hidden opacity-30 sm:left-10 sm:top-10 sm:block" aria-hidden="true">
          <Corner className="h-14 w-14 text-gold" />
        </div>
        <div className="pointer-events-none absolute right-3 bottom-6 hidden rotate-180 opacity-30 sm:right-10 sm:bottom-10 sm:block" aria-hidden="true">
          <Corner className="h-14 w-14 text-gold" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 safe-px sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="temple-frame">
              <img
                src="/images/about.jpg"
                alt="Adity Dance CIC performance"
                className="relative z-10 aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={1}>
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Our story</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">About Adity Dance</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:mt-6 sm:text-base">
              Adity Dance CIC, founded in 2023, promotes community engagement through inclusive dance experiences. We introduce Bharatanatyam and Bangladeshi folk dance to diverse audiences through performances, events, and shared celebration.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              Our events welcome neurotypical and neurodiverse audiences of all ages and abilities. We create a compassionate platform for autistic individuals, challenge stigma within the South Asian community, and celebrate the joy of movement for everyone.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-2 border-t border-gold/30 pt-6 sm:mt-10 sm:gap-4 sm:pt-8">
              <div>
                <dt className="font-display text-2xl text-vermillion sm:text-3xl lg:text-4xl">2023</dt>
                <dd className="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Founded</dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-vermillion sm:text-3xl lg:text-4xl">All</dt>
                <dd className="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Ages &amp; abilities</dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-vermillion sm:text-3xl lg:text-4xl">UK</dt>
                <dd className="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Based in Essex</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* What we celebrate */}
      <section id="dance" className="stage-wash relative overflow-hidden py-16 text-white sm:py-24 lg:py-28">
        <div className="jali-overlay pointer-events-none absolute inset-0 opacity-40 sm:opacity-50" aria-hidden="true"></div>

        <div className="relative mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.32em]">On stage &amp; in community</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">Dance rooted in culture</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-white/75 sm:text-base">
              Classical storytelling, folk celebration, and inclusive performance — shared through our events and gallery.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-8 md:grid-cols-3">
            <Reveal className="relative border border-gold/25 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-gold/50 sm:p-7">
              <div className="pointer-events-none absolute left-3 top-3 hidden opacity-50 sm:block" aria-hidden="true">
                <Corner className="h-8 w-8 text-gold-soft" />
              </div>
              <p className="font-display text-4xl text-gold/40 sm:text-5xl">01</p>
              <h3 className="mt-2 font-display text-2xl text-gold-soft sm:mt-3 sm:text-3xl">Bharatanatyam</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4">
                Classical South Indian dance with storytelling, rhythm, and expressive abhinaya — brought to life in performance and celebration.
              </p>
            </Reveal>

            <Reveal delay={1} className="relative border border-gold/25 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-gold/50 sm:p-7">
              <div className="pointer-events-none absolute left-3 top-3 hidden opacity-50 sm:block" aria-hidden="true">
                <Corner className="h-8 w-8 text-gold-soft" />
              </div>
              <p className="font-display text-4xl text-gold/40 sm:text-5xl">02</p>
              <h3 className="mt-2 font-display text-2xl text-gold-soft sm:mt-3 sm:text-3xl">Indian Folk Dance</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4">
                Joyful Bangladeshi and Indian folk forms that celebrate community, colour, and shared movement across generations.
              </p>
            </Reveal>

            <Reveal delay={2} className="relative border border-gold/25 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-gold/50 sm:p-7">
              <div className="pointer-events-none absolute left-3 top-3 hidden opacity-50 sm:block" aria-hidden="true">
                <Corner className="h-8 w-8 text-gold-soft" />
              </div>
              <p className="font-display text-4xl text-gold/40 sm:text-5xl">03</p>
              <h3 className="mt-2 font-display text-2xl text-gold-soft sm:mt-3 sm:text-3xl">Inclusive Events</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4">
                Welcoming performances and gatherings for neurodiverse and disabled audiences, creating space for everyone to belong.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="lotus-wash relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 safe-px sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="temple-frame">
              <img
                src="/images/about-adity.jpg"
                alt="Adity Roy, founder of Adity Dance CIC"
                className="relative z-10 aspect-[3/4] max-h-[28rem] w-full object-cover sm:max-h-none"
              />
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Artist · Choreographer · Performer</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Adity Roy</h2>
            <Ornament tone="dark" />
            <p className="mt-5 font-display text-lg italic leading-relaxed text-ink-soft sm:mt-6 sm:text-xl lg:text-2xl">
              “Dance is devotion made visible — a language of story, spirit, and belonging.”
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:mt-6 sm:text-base">
              Adity Roy is a Bharatanatyam dancer and choreographer based in London. Deeply rooted in classical tradition, her work is known for dynamic storytelling and exceptional abhinaya — connecting seasoned audiences and newcomers alike.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              Performing since the age of eight, she has trained in the Kalakshetra style, studied at Trinity Laban, and performed across the UK, France, Switzerland, India, and Bangladesh. In 2023 she founded Adity Dance CIC to celebrate culture through events, performance, and community.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-gold/30 pt-6 sm:mt-10 sm:gap-6 sm:pt-8">
              <div>
                <p className="font-display text-3xl text-peacock sm:text-4xl">15+</p>
                <p className="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Years experience</p>
              </div>
              <div>
                <p className="font-display text-3xl text-peacock sm:text-4xl">5+</p>
                <p className="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">Countries</p>
              </div>
              <div>
                <p className="font-display text-3xl text-peacock sm:text-4xl">2023</p>
                <p className="mt-1 text-[0.65rem] leading-snug tracking-[0.08em] text-ink-soft uppercase sm:text-xs sm:tracking-[0.16em]">CIC founded</p>
              </div>
            </div>

            <Link href="/about" className="mt-8 inline-block text-sm font-semibold text-gold-soft transition hover:text-white">
              Learn More About Us →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section-wash relative py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Gather with us</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Upcoming events</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              Be part of our next celebration of dance and culture. Upcoming performances and community events will appear here.
            </p>
          </Reveal>

          {upcomingEvents.length > 0 ? (
            <>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                {upcomingEvents.map((event, index) => {
                  let delay: 0 | 1 | 2 | 3 = 0;
                  if (index % 3 === 1) delay = 1;
                  else if (index % 3 === 2) delay = 2;

                  return (
                    <Reveal
                      key={Number(event.id)}
                      delay={delay}
                      className="flex flex-col overflow-hidden border border-gold/25 bg-panel-soft/80"
                    >
                      {event.image_path ? (
                        <img
                          src={getImageUrl(event.image_path) || ""}
                          alt={event.title}
                          className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                        />
                      ) : (
                        <div className="aspect-[4/3] w-full bg-ink/60 sm:aspect-[16/10]" aria-hidden="true"></div>
                      )}
                      <div className="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
                        <p className="text-[0.65rem] tracking-[0.14em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.18em]">
                          {event.event_date.toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                        <h3 className="mt-1.5 font-display text-base leading-snug text-white sm:mt-2 sm:text-2xl">{event.title}</h3>
                        {event.location && (
                          <p className="mt-1.5 line-clamp-1 text-xs text-ink-soft sm:mt-2 sm:text-sm">{event.location}</p>
                        )}
                        {event.description && (
                          <p className="mt-2 line-clamp-3 hidden text-sm leading-relaxed text-ink-soft sm:mt-3 sm:block">{event.description}</p>
                        )}
                        {event.ticket_link && (
                          <a
                            href={event.ticket_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-cultural mt-auto inline-flex w-full items-center justify-center px-3 py-2 text-[0.7rem] font-semibold tracking-wide text-white sm:mt-5 sm:px-6 sm:py-2.5 sm:text-sm"
                          >
                            Book Now
                          </a>
                        )}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal className="mt-8 text-center">
                <Link href="/events" className="btn-cultural inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white">
                  View All Events
                </Link>
              </Reveal>
            </>
          ) : (
            <Reveal className="relative mx-auto mt-10 max-w-3xl border border-gold/35 bg-panel-soft/90 px-5 py-10 text-center sm:mt-14 sm:px-8 sm:py-14">
              <p className="font-display text-2xl text-white sm:text-3xl">No upcoming events just yet</p>
              <p className="mt-3 text-sm text-ink-soft">
                Please check back soon, or get in touch to find out about our next events.
              </p>
              <Link href="/events" className="btn-cultural mt-7 inline-flex w-full items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white sm:mt-8 sm:w-auto">
                View All Events
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-panel relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="jali-overlay pointer-events-none absolute inset-0 opacity-30" aria-hidden="true"></div>

        <div className="relative mx-auto max-w-7xl safe-px">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Moments</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Our gallery</h2>
              <Ornament tone="dark" />
            </div>
            <div className="max-w-md">
              <p className="text-sm leading-relaxed text-ink-soft">
                From stage to celebration — glimpses of performance, community, and the joy of dance.
              </p>
              <Link href="/gallery" className="mt-3 inline-block text-sm font-semibold text-gold-soft transition hover:text-white">
                View Full Gallery →
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3 md:grid-cols-4 md:gap-4" data-lightbox-gallery>
            {galleryImages.length > 0 ? (
              galleryImages.map((image, index) => {
                const alt = image.alt_text || image.title || "Adity Dance gallery image";
                let delay: 0 | 1 | 2 | 3 = 0;
                if (index % 4 === 1) delay = 1;
                else if (index % 4 === 2) delay = 2;

                return (
                  <Reveal key={Number(image.id)} delay={delay as 0|1|2|3}>
                    <button
                      type="button"
                      className="gallery-item block h-full w-full aspect-square overflow-hidden group relative"
                      data-lightbox-trigger
                      data-lightbox-src={getImageUrl(image.image_path) || ""}
                      data-lightbox-alt={alt}
                      aria-label={`View larger: ${alt}`}
                    >
                      <img
                        src={getImageUrl(image.image_path) || ""}
                        alt={alt}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" d="M16.5 16.5L21 21M11 8.5v5M8.5 11h5" />
                        </svg>
                      </span>
                    </button>
                  </Reveal>
                );
              })
            ) : (
              <p className="col-span-full text-center text-ink-soft">Gallery images coming soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="lotus-wash py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-peacock uppercase sm:text-xs sm:tracking-[0.32em]">Watch</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Video gallery</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              Experience the storytelling, rhythm, and spirit of Adity Dance on stage.
            </p>
            <Link href="/videos" className="mt-4 inline-block text-sm font-semibold text-gold-soft transition hover:text-white">
              Watch More Videos →
            </Link>
          </Reveal>

          {featuredVideo && (
            <Reveal className="relative mx-auto mt-10 max-w-4xl sm:mt-12">
              <div className="temple-frame temple-frame-dark">
                <div className="relative z-10 overflow-hidden bg-ink">
                  <div className="aspect-video">
                    {getEmbedUrl(featuredVideo.youtube_url) && (
                      <iframe
                        className="h-full w-full"
                        src={getEmbedUrl(featuredVideo.youtube_url) || ""}
                        title={featuredVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    )}
                  </div>
                  <div className="border-t border-gold/25 px-4 py-4 sm:px-6 sm:py-5">
                    <h3 className="font-display text-xl text-gold-soft sm:text-2xl">{featuredVideo.title}</h3>
                    {featuredVideo.description && (
                      <p className="mt-1 text-sm text-white/65">{featuredVideo.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="stage-wash relative overflow-hidden py-16 text-white sm:py-24 lg:py-28">
        <div className="jali-overlay pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"></div>

        <div className="relative mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.32em]">Connect</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">Get in touch</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-white/75 sm:text-base">
              Questions about events, performances, or collaborations? We would love to hear from you.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            <Reveal delay={0}>
              <a href="mailto:adity48@yahoo.com" className="block h-full border border-gold/30 bg-white/[0.04] p-6 transition hover:border-gold/50">
                <p className="text-[0.7rem] tracking-[0.18em] text-gold-soft uppercase">Email</p>
                <p className="mt-2 break-all text-lg text-white">adity48@yahoo.com</p>
              </a>
            </Reveal>
            <Reveal delay={1}>
              <a href="tel:+447894222114" className="block h-full border border-gold/30 bg-white/[0.04] p-6 transition hover:border-gold/50">
                <p className="text-[0.7rem] tracking-[0.18em] text-gold-soft uppercase">Phone</p>
                <p className="mt-2 text-lg text-white">+44 7894 222114</p>
              </a>
            </Reveal>
            <Reveal delay={2}>
              <div className="h-full border border-gold/30 bg-white/[0.04] p-6">
                <p className="text-[0.7rem] tracking-[0.18em] text-gold-soft uppercase">Address</p>
                <p className="mt-2 text-lg leading-snug text-white/90">175 Woodward Road, Dagenham, Essex, RM9 4SU</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-8 text-center">
            <Link href="/contact" className="btn-cultural inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white">
              Contact Page
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
