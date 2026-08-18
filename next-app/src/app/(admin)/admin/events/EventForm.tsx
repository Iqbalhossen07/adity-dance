"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import RichTextEditor from "@/components/ui/RichTextEditor";
import { saveEvent } from "./formActions";

export default function EventForm({ event }: { event?: any }) {
  const router = useRouter();
  const [isMutating, setIsMutating] = useState(false);
  const [description, setDescription] = useState(event?.description || "");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMutating(true);

    const formData = new FormData(e.currentTarget);
    formData.append("description", description);
    if (event?.id) {
      formData.append("id", event.id.toString());
    }

    try {
      await saveEvent(formData);
      Swal.fire({
        icon: "success",
        title: "Saved",
        text: "Event saved successfully.",
        background: "#140b0e",
        color: "#fff",
        confirmButtonColor: "#cb5660",
      });
      router.push("/admin/events");
      router.refresh();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not save event.",
        background: "#140b0e",
        color: "#fff",
      });
    } finally {
      setIsMutating(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 sm:p-8 shadow-xl max-w-4xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Title</label>
          <input
            name="title"
            type="text"
            required
            defaultValue={event?.title || ""}
            className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Event Date</label>
            <input
              name="event_date"
              type="date"
              required
              defaultValue={event?.event_date ? new Date(event.event_date).toISOString().split('T')[0] : ""}
              className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Location</label>
            <input
              name="location"
              type="text"
              defaultValue={event?.location || ""}
              className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Ticket Link (Optional)</label>
          <input
            name="ticket_link"
            type="url"
            defaultValue={event?.ticket_link || ""}
            className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Description</label>
          <RichTextEditor value={description} onChange={setDescription} />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="is_published"
            id="is_published"
            value="1"
            defaultChecked={event ? event.is_published : true}
            className="h-4 w-4 rounded border-gold/20 bg-[#0d0a0b] text-[#cb5660] focus:ring-[#cb5660]"
          />
          <label htmlFor="is_published" className="text-sm font-semibold tracking-wide text-ink-soft">
            Publish Event
          </label>
        </div>

        <div className="mt-6 flex justify-end gap-4 border-t border-gold/10 pt-6">
          <button
            type="button"
            onClick={() => router.push("/admin/events")}
            className="rounded-lg border border-gold/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isMutating}
            className="rounded-lg bg-[#cb5660] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ba4d55] disabled:opacity-50"
          >
            Save Event
          </button>
        </div>
      </form>
    </div>
  );
}
