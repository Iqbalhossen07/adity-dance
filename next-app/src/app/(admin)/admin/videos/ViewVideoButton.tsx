"use client";

import Swal from "sweetalert2";

export default function ViewVideoButton({ video }: { video: any }) {
  const handleView = () => {
    // Extract youtube ID for embed
    let youtubeId = "";
    try {
      const url = new URL(video.youtube_url);
      if (url.hostname.includes("youtube.com")) {
        youtubeId = url.searchParams.get("v") || "";
      } else if (url.hostname.includes("youtu.be")) {
        youtubeId = url.pathname.slice(1);
      }
    } catch (e) {}

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
      className="text-sm font-medium text-blue-400 hover:text-blue-300 transition"
    >
      View
    </button>
  );
}
