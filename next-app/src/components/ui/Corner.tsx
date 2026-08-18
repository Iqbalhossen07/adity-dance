export default function Corner({ className = "text-gold/70" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4 4h18M4 4v18" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 10h10M10 10v10" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      <path d="M22 8c6 2 10 6 12 12" stroke="currentColor" strokeWidth="1" opacity=".7" />
    </svg>
  );
}
