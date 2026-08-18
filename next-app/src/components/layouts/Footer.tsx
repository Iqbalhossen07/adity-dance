import Link from "next/link";
import Ornament from "@/components/ui/Ornament";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-stage-deep pb-[env(safe-area-inset-bottom)] text-white">
      <div className="jali-overlay pointer-events-none absolute inset-0 opacity-30" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-7xl safe-px pb-6 pt-6 sm:pb-8">
        <Ornament tone="dark" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 safe-px pb-12 pt-2 sm:gap-12 sm:pb-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="mb-5 flex items-center gap-3">
            <img src="/images/logo.png" alt="Adity Dance CIC" className="h-12 w-auto sm:h-14" />
            <span className="font-display text-2xl tracking-wide text-gold-soft sm:text-3xl">
              Adity Dance
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            Adity Dance CIC, founded in 2023, celebrates culture and creativity through the joy of dance — events, performances, and community moments for all ages and abilities.
          </p>
          <div className="mt-6 flex flex-wrap gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=100051044897638"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-gold-soft transition hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/447894222114"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-gold-soft transition hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl text-gold-soft">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-gold-soft">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold-soft">About</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold-soft">Gallery</Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-gold-soft">Videos</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-gold-soft">Events</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-2xl text-gold-soft">Visit</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a href="mailto:adity48@yahoo.com" className="break-all hover:text-gold-soft">
                adity48@yahoo.com
              </a>
            </li>
            <li>
              <a href="tel:+447894222114" className="hover:text-gold-soft">
                +44 7894 222114
              </a>
            </li>
            <li className="leading-relaxed">175 Woodward Road, Dagenham, Essex, RM9 4SU</li>
            <li>
              <Link href="/contact" className="hover:text-gold-soft">Contact page →</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-gold/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 safe-px py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Adity Dance CIC. All rights reserved.</p>
          <p className="tracking-[0.12em] text-gold/60 uppercase sm:tracking-[0.18em]">
            Celebrating culture through the joy of dance
          </p>
        </div>
      </div>
    </footer>
  );
}
