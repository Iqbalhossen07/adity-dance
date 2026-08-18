import { prisma } from "@/lib/prisma";
import EventsClient from "./EventsClient";

export default async function EventsAdminPage() {
  const events = await prisma.events.findMany({
    orderBy: { event_date: "desc" },
  });

  const formattedEvents = events.map((e) => ({
    id: Number(e.id),
    title: e.title,
    description: e.description,
    event_date: e.event_date.toISOString(),
    location: e.location,
    ticket_link: e.ticket_link,
    image_path: e.image_path,
    is_published: e.is_published,
  }));

  return <EventsClient events={formattedEvents} />;
}
