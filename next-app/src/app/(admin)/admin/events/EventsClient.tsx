"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { createEvent, updateEvent, deleteEvent } from "./actions";

type EventType = {
  id: number;
  title: string;
  description: string | null;
  event_date: string;
  location: string | null;
  ticket_link: string | null;
  image_path: string | null;
  is_published: boolean;
};

export default function EventsClient({ events }: { events: EventType[] }) {
  const [isMutating, setIsMutating] = useState(false);

  const handleAdd = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add New Event",
      html: `
        <input id="swal-title" class="swal2-input" placeholder="Title" required>
        <textarea id="swal-desc" class="swal2-textarea" placeholder="Description"></textarea>
        <input type="date" id="swal-date" class="swal2-input" required>
        <input id="swal-location" class="swal2-input" placeholder="Location">
        <input id="swal-ticket" class="swal2-input" placeholder="Ticket Link">
        <input id="swal-image" class="swal2-input" placeholder="Image Path (e.g. events/img.jpg)">
        <label class="swal2-checkbox" style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
          <input type="checkbox" id="swal-published" checked> 
          <span style="margin-left: 10px;">Published</span>
        </label>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const title = (document.getElementById("swal-title") as HTMLInputElement).value;
        const date = (document.getElementById("swal-date") as HTMLInputElement).value;
        if (!title || !date) {
          Swal.showValidationMessage("Title and Date are required");
          return false;
        }
        return {
          title,
          description: (document.getElementById("swal-desc") as HTMLTextAreaElement).value,
          event_date: date,
          location: (document.getElementById("swal-location") as HTMLInputElement).value,
          ticket_link: (document.getElementById("swal-ticket") as HTMLInputElement).value,
          image_path: (document.getElementById("swal-image") as HTMLInputElement).value,
          is_published: (document.getElementById("swal-published") as HTMLInputElement).checked,
        };
      },
    });

    if (formValues) {
      setIsMutating(true);
      const formData = new FormData();
      formData.append("title", formValues.title);
      formData.append("description", formValues.description);
      formData.append("event_date", formValues.event_date);
      formData.append("location", formValues.location);
      formData.append("ticket_link", formValues.ticket_link);
      formData.append("image_path", formValues.image_path);
      formData.append("is_published", formValues.is_published.toString());

      const res = await createEvent(formData);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Added!", "Event has been created.", "success");
      } else {
        Swal.fire("Error!", "Could not create event.", "error");
      }
    }
  };

  const handleEdit = async (event: EventType) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Event",
      html: `
        <input id="swal-title" class="swal2-input" placeholder="Title" value="${event.title.replace(/"/g, '&quot;')}" required>
        <textarea id="swal-desc" class="swal2-textarea" placeholder="Description">${event.description || ""}</textarea>
        <input type="date" id="swal-date" class="swal2-input" value="${event.event_date.split('T')[0]}" required>
        <input id="swal-location" class="swal2-input" placeholder="Location" value="${event.location || ""}">
        <input id="swal-ticket" class="swal2-input" placeholder="Ticket Link" value="${event.ticket_link || ""}">
        <input id="swal-image" class="swal2-input" placeholder="Image Path" value="${event.image_path || ""}">
        <label class="swal2-checkbox" style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
          <input type="checkbox" id="swal-published" ${event.is_published ? "checked" : ""}> 
          <span style="margin-left: 10px;">Published</span>
        </label>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const title = (document.getElementById("swal-title") as HTMLInputElement).value;
        const date = (document.getElementById("swal-date") as HTMLInputElement).value;
        if (!title || !date) {
          Swal.showValidationMessage("Title and Date are required");
          return false;
        }
        return {
          title,
          description: (document.getElementById("swal-desc") as HTMLTextAreaElement).value,
          event_date: date,
          location: (document.getElementById("swal-location") as HTMLInputElement).value,
          ticket_link: (document.getElementById("swal-ticket") as HTMLInputElement).value,
          image_path: (document.getElementById("swal-image") as HTMLInputElement).value,
          is_published: (document.getElementById("swal-published") as HTMLInputElement).checked,
        };
      },
    });

    if (formValues) {
      setIsMutating(true);
      const formData = new FormData();
      formData.append("title", formValues.title);
      formData.append("description", formValues.description);
      formData.append("event_date", formValues.event_date);
      formData.append("location", formValues.location);
      formData.append("ticket_link", formValues.ticket_link);
      formData.append("image_path", formValues.image_path);
      formData.append("is_published", formValues.is_published.toString());

      const res = await updateEvent(event.id, formData);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Updated!", "Event has been updated.", "success");
      } else {
        Swal.fire("Error!", "Could not update event.", "error");
      }
    }
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      setIsMutating(true);
      const res = await deleteEvent(id);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Deleted!", "Event has been deleted.", "success");
      } else {
        Swal.fire("Error!", "Could not delete event.", "error");
      }
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Events</h1>
        <button
          onClick={handleAdd}
          disabled={isMutating}
          className="flex items-center gap-2 rounded-lg bg-[#cb5660] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ba4d55] transition-colors disabled:opacity-50"
        >
          Add Event
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] shadow-xl">
        <table className="min-w-full divide-y divide-gold/10">
          <thead className="bg-black/20">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-ink-soft uppercase">Title</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-ink-soft uppercase">Date</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-ink-soft uppercase">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold tracking-wider text-ink-soft uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold/5 bg-transparent">
            {events.map((event) => (
              <tr key={event.id} className="transition hover:bg-white/5">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{event.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">{new Date(event.event_date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {event.is_published ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                      Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      Draft
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(event)}
                    disabled={isMutating}
                    className="mr-4 text-gold-soft hover:text-white transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    disabled={isMutating}
                    className="text-[#cb5660] hover:text-[#ba4d55] transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-sm text-ink-soft">No events found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
