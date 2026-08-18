import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getImageUrl } from "@/lib/utils";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Ornament from "@/components/ui/Ornament";

export const metadata: Metadata = {
  title: "Events | Adity Dance CIC",
  description: "Discover upcoming Adity Dance CIC events and performances. Book tickets and join celebrations of dance and culture in Essex and the UK.",
};

export default async function Events() {
  const today = new Date(new Date().setHours(0, 0, 0, 0));

  const upcomingEvents = await prisma.events.findMany({
    where: {
      is_published: true,
      event_date: {
        gte: today,
      },
    },
    orderBy: { event_date: "asc" },
  });

  const pastEvents = await prisma.events.findMany({
    where: {
      is_published: true,
      event_date: {
        lt: today,
      },
    },
    orderBy: { event_date: "desc" },
  });

  const eventSchema = upcomingEvents.map((event, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Event",
      name: event.title,
      description: event.description,
      startDate: event.event_date.toISOString().split("T")[0],
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      image: getImageUrl(event.image_path),
      location: event.location ? {
        "@type": "Place",
        name: event.location,
        address: event.location,
      } : undefined,
      organizer: {
        "@type": "Organization",
        name: "Adity Dance CIC",
        url: "/",
      },
      url: event.ticket_link || "/events",
      offers: event.ticket_link ? {
        "@type": "Offer",
        url: event.ticket_link,
        availability: "https://schema.org/InStock",
      } : undefined,
    }
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: eventSchema,
  };

  return (
    <>
      {upcomingEvents.length > 0 && (
        <Script id="events-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <PageHero title="Our Events" current="Events" />

      <section className="section-wash py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">Upcoming Events</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              Be part of our next celebration of dance and culture. Book your spot today!
            </p>
          </Reveal>

          {upcomingEvents.length > 0 ? (
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
          ) : (
            <Reveal className="mx-auto mt-10 max-w-3xl border border-gold/30 bg-panel-soft/80 px-5 py-12 text-center sm:mt-14 sm:px-8 sm:py-14">
              <p className="font-display text-2xl text-white sm:text-3xl">No upcoming events at the moment</p>
              <p className="mt-3 text-sm text-ink-soft">
                Please check back soon, or get in touch to find out about our next events.
              </p>
              <Link href="/contact" className="btn-cultural mt-7 inline-flex w-full items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white sm:mt-8 sm:w-auto">
                Contact Us
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      <section className="lotus-wash py-16 sm:py-24">
        <div className="mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">Past Events</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              A look back at some of our memorable moments.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {pastEvents.length > 0 ? (
              pastEvents.map((event, index) => {
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
                      <div className="flex aspect-[4/3] w-full items-center justify-center bg-ink/50 sm:aspect-[16/10]" aria-hidden="true">
                        <span className="font-display text-3xl text-gold/40 sm:text-4xl">
                          {event.event_date.getFullYear()}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
                      <p className="text-[0.65rem] tracking-[0.14em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.18em]">
                        {event.event_date.toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                      <h3 className="mt-1.5 font-display text-base leading-snug text-white sm:mt-2 sm:text-2xl">{event.title}</h3>
                      {event.description && (
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-ink-soft sm:mt-3 sm:line-clamp-3 sm:text-sm">{event.description}</p>
                      )}
                      <Link href="/gallery" className="mt-auto pt-3 text-xs font-semibold text-gold-soft transition hover:text-white sm:pt-5 sm:text-sm">
                        View Gallery →
                      </Link>
                    </div>
                  </Reveal>
                );
              })
            ) : (
              <p className="col-span-full py-12 text-center text-sm text-ink-soft">Past events will appear here.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
