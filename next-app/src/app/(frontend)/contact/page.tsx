import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Ornament from "@/components/ui/Ornament";

export const metadata: Metadata = {
  title: "Contact Us | Adity Dance CIC",
  description: "Contact Adity Dance CIC in Dagenham, Essex. Email, phone, or WhatsApp for event information and bookings.",
};

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" current="Contact" />

      <section className="section-wash py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl safe-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-white sm:text-4xl">Get in Touch</h2>
            <Ornament tone="dark" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              We would love to hear from you — whether you have a question about our events, gallery, or upcoming performances.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
            <Reveal className="group border border-gold/25 bg-panel-soft/70 p-6 transition hover:border-gold/50 sm:p-8">
              <a href="mailto:adity48@yahoo.com">
                <p className="text-[0.7rem] tracking-[0.22em] text-gold-soft uppercase">Email Us</p>
                <p className="mt-3 break-all font-display text-2xl text-white transition group-hover:text-gold-soft">
                  adity48@yahoo.com
                </p>
              </a>
            </Reveal>

            <Reveal delay={1} className="group border border-gold/25 bg-panel-soft/70 p-6 transition hover:border-gold/50 sm:p-8">
              <a href="tel:+447894222114">
                <p className="text-[0.7rem] tracking-[0.22em] text-gold-soft uppercase">Call Us</p>
                <p className="mt-3 font-display text-2xl text-white transition group-hover:text-gold-soft">
                  +44 7894 222114
                </p>
              </a>
            </Reveal>

            <Reveal delay={2} className="border border-gold/25 bg-panel-soft/70 p-6 sm:p-8">
              <p className="text-[0.7rem] tracking-[0.22em] text-gold-soft uppercase">Our Address</p>
              <p className="mt-3 font-display text-2xl leading-snug text-white">
                175 Woodward Road, Dagenham, Essex, RM9 4SU
              </p>
            </Reveal>
          </div>

          <Reveal className="mx-auto mt-10 max-w-3xl border border-gold/25 bg-white/[0.03] px-5 py-8 text-center sm:mt-14 sm:px-8 sm:py-10">
            <p className="font-display text-2xl text-gold-soft sm:text-3xl">Prefer WhatsApp?</p>
            <p className="mt-3 text-sm text-ink-soft">
              Reach out quickly using the sticky WhatsApp button, or message us directly.
            </p>
            <a
              href="https://wa.me/447894222114"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cultural mt-6 inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white"
            >
              Chat on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
