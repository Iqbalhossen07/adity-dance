import { prisma } from "@/lib/prisma";
import CategoryForm from "../../CategoryForm";
import { notFound } from "next/navigation";

export default async function EditCategoryPage({ params }: { params: { id: string } }) {
  const category = await prisma.gallery_categories.findUnique({
    where: { id: BigInt(params.id) }
  });

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Edit Category</h1>
      <CategoryForm category={category} />
    </div>
  );
}
