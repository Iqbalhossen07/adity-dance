import VideoForm from "../VideoForm";

export default function CreateVideoPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Add Video</h1>
      <VideoForm />
    </div>
  );
}
