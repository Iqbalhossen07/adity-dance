export default function Ornament({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isLight = tone === "light";
  const textColorClass = isLight ? "text-gold" : "text-gold-soft";
  const lineClass = isLight ? "" : "ornament-line-light";

  return (
    <div className={`ornament-line ${lineClass} ${textColorClass}`} aria-hidden="true">
      <svg
        className="h-5 w-5 lotus-pulse shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6c1.5 4.5 1.5 8.5 0 13-1.5-4.5-1.5-8.5 0-13Z"
          fill="currentColor"
          opacity=".9"
        />
        <path
          d="M20 6c1.5 4.5 1.5 8.5 0 13-1.5-4.5-1.5-8.5 0-13Z"
          fill="currentColor"
          opacity=".75"
          transform="rotate(45 20 20)"
        />
        <path
          d="M20 6c1.5 4.5 1.5 8.5 0 13-1.5-4.5-1.5-8.5 0-13Z"
          fill="currentColor"
          opacity=".75"
          transform="rotate(90 20 20)"
        />
        <path
          d="M20 6c1.5 4.5 1.5 8.5 0 13-1.5-4.5-1.5-8.5 0-13Z"
          fill="currentColor"
          opacity=".65"
          transform="rotate(135 20 20)"
        />
        <circle cx="20" cy="20" r="3.2" fill="currentColor" />
      </svg>
    </div>
  );
}
