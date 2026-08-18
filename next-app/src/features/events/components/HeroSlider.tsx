"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { src: "/images/hero-1.png", alt: "Adity Dance CIC Bharatanatyam performance" },
    { src: "/images/hero-2.png", alt: "Adity Dance CIC Indian folk dance celebration" },
    { src: "/images/hero-3.png", alt: "Adity Dance CIC community dance performance" },
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotion && slides.length > 1) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5500);
      return () => clearInterval(interval);
    }
  }, [slides.length]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.alt}
          className={`hero-slide absolute inset-0 h-full w-full object-cover object-[center_20%] sm:object-center ${
            index === activeSlide ? "is-active" : ""
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-stage-deep via-ink/65 to-stage/35"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-stage/80 via-stage/20 to-transparent sm:via-transparent"></div>
      <div className="jali-overlay absolute inset-0 opacity-30 mix-blend-soft-light sm:opacity-40"></div>
    </div>
  );
}
