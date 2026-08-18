import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import ViewEventButton from "./ViewEventButton";

async function deleteEvent(formData: FormData) {
  "use server";
  const id = formData.get("id");
  if (id) {
    await prisma.events.delete({ where: { id: BigInt(id as string) } });
    revalidatePath("/admin/events");
  }
}

export default async function EventsPage() {
  const events = await prisma.events.findMany({
    orderBy: { event_date: "desc" },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Events</h1>
        <Link
          href="/admin/events/create"
          className="flex items-center gap-2 rounded-lg bg-[#cb5660] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ba4d55] transition-colors"
        >
          Add Event
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="rounded-2xl border border-gold/10 bg-[#140b0e] p-12 text-center text-ink-soft shadow-xl">
          No events found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id.toString()} className="relative overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 shadow-xl transition-all hover:border-gold/30">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-soft to-vermillion"></div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display text-xl font-bold text-white">{event.title}</h3>
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
              </div>

              <div className="text-sm text-ink-soft mb-2">
                <strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}
              </div>
              {event.location && (
                <div className="text-sm text-ink-soft mb-4">
                  <strong>Location:</strong> {event.location}
                </div>
              )}

              <div className="mt-6 flex items-center justify-end gap-3 border-t border-gold/10 pt-4">
                <ViewEventButton event={event} />
                <Link
                  href={`/admin/events/${event.id}/edit`}
                  className="text-sm font-medium text-gold-soft hover:text-white transition"
                >
                  Edit
                </Link>
                <form action={deleteEvent}>
                  <input type="hidden" name="id" value={event.id.toString()} />
                  <button type="submit" className="text-sm font-medium text-[#cb5660] hover:text-[#ba4d55] transition">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
