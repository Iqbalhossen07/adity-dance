"use client";

import { useEffect, useState, useRef } from "react";

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [triggers, setTriggers] = useState<HTMLElement[]>([]);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trigger = target.closest("[data-lightbox-trigger]") as HTMLElement;

      if (trigger) {
        e.preventDefault();
        
        // Find the closest gallery root or default to document body
        const groupRoot = trigger.closest("[data-lightbox-gallery]") || document.body;
        
        // Get all visible triggers in the same group
        const allTriggers = Array.from(
          groupRoot.querySelectorAll("[data-lightbox-trigger]")
        ) as HTMLElement[];
        
        const visibleTriggers = allTriggers.filter(
          (t) => !t.classList.contains("hidden") && t.offsetParent !== null
        );

        setTriggers(visibleTriggers);
        setCurrentIndex(Math.max(0, visibleTriggers.indexOf(trigger)));
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => Math.min(triggers.length - 1, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, triggers.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("is-lightbox-open");
      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    } else {
      document.body.classList.remove("is-lightbox-open");
      if (dialogRef.current && dialogRef.current.open) {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  const closeLightbox = () => setIsOpen(false);

  const activeTrigger = triggers[currentIndex];
  const src = activeTrigger?.getAttribute("data-lightbox-src") || "";
  const alt = activeTrigger?.getAttribute("data-lightbox-alt") || "";
  const atStart = currentIndex <= 0;
  const atEnd = currentIndex >= triggers.length - 1;

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Image preview"
      onCancel={(e) => {
        e.preventDefault();
        closeLightbox();
      }}
    >
      <div className="lightbox-backdrop" onClick={closeLightbox}></div>

      <div className="lightbox-panel" role="document">
        <button
          type="button"
          className="lightbox-close"
          onClick={closeLightbox}
          aria-label="Close image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <button
          type="button"
          className="lightbox-nav lightbox-prev"
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={atStart}
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <figure className="lightbox-figure">
          {src && <img src={src} alt={alt} />}
          {alt && <figcaption className="lightbox-caption">{alt}</figcaption>}
        </figure>

        <button
          type="button"
          className="lightbox-nav lightbox-next"
          onClick={() => setCurrentIndex((prev) => Math.min(triggers.length - 1, prev + 1))}
          disabled={atEnd}
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </dialog>
  );
}
