"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: 0 | 1 | 2 | 3;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  let delayClass = "";
  if (delay === 1) delayClass = "reveal-delay-1";
  else if (delay === 2) delayClass = "reveal-delay-2";
  else if (delay === 3) delayClass = "reveal-delay-3";

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${delayClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
