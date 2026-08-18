import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import DeleteConfirmButton from "@/components/ui/DeleteConfirmButton";

async function deleteCategory(formData: FormData) {
  "use server";
  const id = formData.get("id");
  if (id) {
    await prisma.gallery_categories.delete({ where: { id: BigInt(id as string) } });
    revalidatePath("/admin/gallery-categories");
  }
}

export default async function GalleryCategoriesPage() {
  const categories = await prisma.gallery_categories.findMany({
    orderBy: { sort_order: "asc" },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Gallery Categories</h1>
        <Link
          href="/admin/gallery-categories/create"
          className="flex items-center gap-2 rounded-lg bg-[#cb5660] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ba4d55] transition-colors"
        >
          Add Category
        </Link>
      </div>

      {categories.length === 0 ? (
        <div className="rounded-2xl border border-gold/10 bg-[#140b0e] p-12 text-center text-ink-soft shadow-xl">
          No categories found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id.toString()} className="relative overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 shadow-xl transition-all hover:border-gold/30">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-soft to-vermillion"></div>
              
              <h3 className="font-display text-xl font-bold text-white mb-2">{category.name}</h3>
              <p className="text-sm text-ink-soft mb-6">Slug: {category.slug}</p>

              <div className="mt-auto flex flex-wrap items-center justify-end gap-2 border-t border-gold/10 pt-4">
                <Link
                  href={`/admin/gallery-categories/${category.id}/edit`}
                  className="flex items-center gap-1.5 rounded-lg border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold-soft hover:bg-gold/20 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </Link>
                <DeleteConfirmButton id={category.id.toString()} action={deleteCategory} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
