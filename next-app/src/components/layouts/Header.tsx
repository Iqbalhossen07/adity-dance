"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { route: "/", label: "Home" },
  { route: "/about", label: "About" },
  { route: "/gallery", label: "Gallery" },
  { route: "/videos", label: "Videos" },
  { route: "/events", label: "Events" },
  { route: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = pathname === "/";
  const leftLinks = links.slice(0, 3);
  const rightLinks = links.slice(3, 6);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16 || !isHome);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("is-nav-open");
    } else {
      document.body.classList.remove("is-nav-open");
    }
  }, [isOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b border-transparent pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        isScrolled ? "is-scrolled" : ""
      } ${isOpen ? "is-open" : ""}`}
    >
      {/* Mobile: logo left, menu right */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 safe-px py-2 sm:py-2.5 lg:hidden">
        <Link href="/" className="relative z-10 shrink-0" onClick={() => setIsOpen(false)}>
          <img src="/images/logo.png" alt="Adity Dance CIC" className="h-24 w-auto sm:h-[6.5rem]" />
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-gold-soft"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden max-w-7xl items-center safe-px py-2.5 lg:flex">
        <nav className="flex flex-1 items-center justify-end gap-8 text-sm font-medium tracking-wide text-white/90 xl:gap-10">
          {leftLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className={`transition hover:text-gold-soft ${
                pathname === link.route ? "text-gold-soft" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="mx-10 shrink-0 xl:mx-14">
          <img src="/images/logo.png" alt="Adity Dance CIC" className="h-28 w-auto xl:h-32" />
        </Link>

        <nav className="flex flex-1 items-center justify-start gap-8 text-sm font-medium tracking-wide text-white/90 xl:gap-10">
          {rightLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className={`transition hover:text-gold-soft ${
                pathname === link.route ? "text-gold-soft" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav border-t border-gold/20 bg-ink/98 lg:hidden ${isOpen ? "is-open" : ""}`}>
        <nav className="flex flex-col px-5 py-2 pb-[max(1rem,env(safe-area-inset-bottom))] text-base font-medium text-white">
          {links.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              onClick={() => setIsOpen(false)}
              className={`border-b border-white/5 py-3.5 ${
                pathname === link.route ? "text-gold-soft" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
