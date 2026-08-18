import { prisma } from "@/lib/prisma";
import EventForm from "../../EventForm";
import { notFound } from "next/navigation";

export default async function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const event = await prisma.events.findUnique({
    where: { id: BigInt(resolvedParams.id) }
  });

  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Edit Event</h1>
      <EventForm event={event} />
    </div>
  );
}
