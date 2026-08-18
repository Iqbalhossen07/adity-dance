"use client";

import Swal from "sweetalert2";

export default function ViewVideoButton({ video }: { video: any }) {
  const handleView = () => {
    // Extract youtube ID for embed
    const match = video.youtube_url.match(/(?:youtu\\.be\\/|youtube\\.com\\/(?:embed\\/|v\\/|watch\\?v=|watch\\?.+&v=|shorts\\/))([^"&?\\/\\s]{11})/);
    const youtubeId = match ? match[1] : null;

    Swal.fire({
      title: video.title,
      html: `
        <div class="text-left mt-4 text-sm text-ink-soft">
          ${youtubeId ? `
            <div class="aspect-video w-full mb-6 rounded-lg overflow-hidden border border-gold/20">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${youtubeId}?autoplay=0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
          ` : ''}
          <div class="border-t border-gold/20 pt-6 prose prose-invert max-w-none text-white prose-p:text-white prose-headings:text-white">
            ${video.description || '<i>No description provided.</i>'}
          </div>
        </div>
      `,
      background: "#140b0e",
      color: "#fff",
      confirmButtonColor: "#cb5660",
      confirmButtonText: "Close",
      width: '800px',
      customClass: {
        title: 'text-left text-2xl font-display',
        htmlContainer: 'text-left'
      }
    });
  };

  return (
    <button
      onClick={handleView}
      className="flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-400 hover:bg-blue-500/20 hover:text-white transition-colors"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
      View
    </button>
  );
}
