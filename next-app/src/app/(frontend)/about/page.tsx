import { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Ornament from "@/components/ui/Ornament";

export const metadata: Metadata = {
  title: "About Adity Roy | Adity Dance CIC",
  description: "Meet Adity Roy — Bharatanatyam dancer and choreographer based in London. Founder of Adity Dance CIC, celebrating culture through events, performance, and community across the UK.",
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adity Roy",
    jobTitle: "Bharatanatyam dancer and choreographer",
    url: "/about",
    image: "/images/adity.jpg",
    worksFor: [
      {
        "@type": "Organization",
        name: "Adity Dance CIC",
        url: "/",
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=100051044897638",
    ],
  };

  const journey = [
    {
      title: "Foundational Training",
      body: "Began Bharatanatyam training in the Kalakshetra style under legendary gurus like Prof. C.V. Chandrasekhar.",
      side: "left",
    },
    {
      title: "Formal Education",
      body: "Honed her skills with English Ballet at the prestigious Trinity Laban Conservatoire of Music and Dance.",
      side: "right",
    },
    {
      title: "International Recognition",
      body: "Graced stages across Europe and Asia, winning several awards in international dance competitions.",
      side: "left",
    },
    {
      title: "Founding Adity Dance CIC",
      body: "Established in 2023 to celebrate culture and creativity through inclusive dance events, performances, and community gatherings.",
      side: "right",
    },
  ];

  return (
    <>
      <Script id="about-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title="About Adity Roy" current="About" />

      <section className="section-wash relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 safe-px sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="mx-auto w-full max-w-md lg:col-span-4 lg:max-w-none">
            <div className="temple-frame">
              <img
                src="/images/adity.jpg"
                alt="Adity Roy, founder of Adity Dance CIC"
                className="relative z-10 aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-8">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold-soft uppercase sm:text-xs sm:tracking-[0.32em]">
              Artist · Choreographer · Performer
            </p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">Adity Roy</h2>
            <Ornament tone="dark" />

            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              <p>
                Adity Roy is a renowned Bharatanatyam dancer and choreographer based in London. While deeply rooted in classical tradition, her dance is praised for its dynamic and evolving language. She possesses a unique ability to connect with all audiences, from seasoned connoisseurs to newcomers, through her powerful storytelling and exceptional <em className="text-gold-soft">abhinaya</em> (facial expression).
              </p>
              <p>
                From a young age, Adity has harbored a deep passion for both dance and acting. This journey began with performances at the age of eight and has since taken her to prestigious academies, theatres, and festivals across the UK, France, Switzerland, India, and Bangladesh.
              </p>
              <p>
                Celebrated for her strong, clean dance lines and dedication, Adity’s performances exude a rare devotion that often leaves audiences with a sense of spiritual fulfillment. Through Adity Dance CIC she shares the beauty of her art through events, performances, and community celebration.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="lotus-wash py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 safe-px text-center sm:grid-cols-3 sm:gap-10">
          <Reveal className="border border-gold/20 bg-white/[0.03] px-5 py-8">
            <p className="font-display text-5xl text-vermillion">15+</p>
            <p className="mt-2 font-medium text-white">Years of Experience</p>
            <p className="mt-1 text-sm text-ink-soft">Performing since the age of eight.</p>
          </Reveal>
          <Reveal delay={1} className="border border-gold/20 bg-white/[0.03] px-5 py-8">
            <p className="font-display text-5xl text-vermillion">5+</p>
            <p className="mt-2 font-medium text-white">Countries Performed In</p>
            <p className="mt-1 text-sm text-ink-soft">Including the UK, India, and France.</p>
          </Reveal>
          <Reveal delay={2} className="border border-gold/20 bg-white/[0.03] px-5 py-8">
            <p className="font-display text-5xl text-vermillion">2023</p>
            <p className="mt-2 font-medium text-white">Founded Adity Dance CIC</p>
            <p className="mt-1 text-sm text-ink-soft">To celebrate culture through events and performance.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-wash py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">Her Journey in Dance</h2>
            <Ornament tone="dark" />
          </Reveal>

          <div className="relative mx-auto mt-12 max-w-2xl sm:mt-16">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-gold/25 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true"></div>

            <div className="space-y-8 sm:space-y-10">
              {journey.map((item, index) => {
                const isRight = item.side === "right";
                const delay = index % 2 === 1 ? 1 : 0;
                
                return (
                  <Reveal
                    key={index}
                    delay={delay as 0 | 1 | 2 | 3}
                    className={`relative pl-10 sm:pl-0 ${isRight ? "sm:flex sm:justify-end" : ""}`}
                  >
                    <span className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-vermillion bg-ink sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true"></span>
                    <div className={`border border-gold/20 bg-panel-soft/80 p-5 sm:w-[calc(50%-1.5rem)] sm:p-6 ${isRight ? "sm:text-left" : "sm:text-right"}`}>
                      <h3 className="font-display text-2xl text-gold-soft">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
