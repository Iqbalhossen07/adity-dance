import { prisma } from "@/lib/prisma";
import ImageForm from "../../ImageForm";
import { notFound } from "next/navigation";

export default async function EditImagePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const image = await prisma.gallery_images.findUnique({
    where: { id: BigInt(resolvedParams.id) }
  });

  if (!image) {
    notFound();
  }

  const categories = await prisma.gallery_categories.findMany();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Edit Image</h1>
      <ImageForm image={image} categories={categories} />
    </div>
  );
}
