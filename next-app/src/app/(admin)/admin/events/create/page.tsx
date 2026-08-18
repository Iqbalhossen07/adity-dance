import EventForm from "../EventForm";

export default function CreateEventPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Add Event</h1>
      <EventForm />
    </div>
  );
}
