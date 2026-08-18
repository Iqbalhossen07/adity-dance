"use client";

import Swal from "sweetalert2";

export default function ViewEventButton({ event }: { event: any }) {
  const handleView = () => {
    Swal.fire({
      title: event.title,
      html: `
        <div class="text-left mt-4 text-sm text-ink-soft">
          <p class="mb-2"><strong>Date:</strong> ${new Date(event.event_date).toLocaleDateString()}</p>
          ${event.location ? `<p class="mb-2"><strong>Location:</strong> ${event.location}</p>` : ''}
          ${event.ticket_link ? `<p class="mb-2"><strong>Tickets:</strong> <a href="${event.ticket_link}" target="_blank" class="text-blue-400 hover:underline">Link</a></p>` : ''}
          <div class="mt-6 border-t border-gold/20 pt-6 prose prose-invert max-w-none text-white prose-p:text-white prose-headings:text-white">
            ${event.description || '<i>No description provided.</i>'}
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
