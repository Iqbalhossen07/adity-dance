import { prisma } from "@/lib/prisma";
import ImageForm from "../ImageForm";

export default async function CreateImagePage() {
  const categories = await prisma.gallery_categories.findMany();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Add Image</h1>
      <ImageForm categories={categories} />
    </div>
  );
}
