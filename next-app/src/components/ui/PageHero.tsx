import Link from "next/link";
import Script from "next/script";

interface PageHeroProps {
  title: string;
  current: string;
}

export default function PageHero({ title, current }: PageHeroProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: current,
      },
    ],
  };

  return (
    <>
      <Script id={`breadcrumb-${current}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero relative overflow-hidden bg-ink text-center">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/jumbo.jpg"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-ink/75 to-stage/45"></div>
          <div className="jali-overlay absolute inset-0 opacity-30"></div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center safe-px pb-12 pt-[8.5rem] sm:pb-14 sm:pt-[9.5rem] lg:pb-16 lg:pt-[10.5rem]">
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <nav className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-base" aria-label="Breadcrumb">
            <ol className="inline-flex items-center justify-center">
              <li>
                <Link href="/" className="transition hover:text-gold-soft">Home</Link>
              </li>
              <li className="mx-2 text-gold/50" aria-hidden="true">/</li>
              <li>
                <span className="text-gold-soft" aria-current="page">{current}</span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-panel" aria-hidden="true"></div>
      </section>
    </>
  );
}
