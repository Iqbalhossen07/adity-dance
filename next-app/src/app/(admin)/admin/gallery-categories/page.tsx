import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";

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

              <div className="mt-auto flex items-center justify-end gap-3 border-t border-gold/10 pt-4">
                <Link
                  href={`/admin/gallery-categories/${category.id}/edit`}
                  className="text-sm font-medium text-gold-soft hover:text-white transition"
                >
                  Edit
                </Link>
                <form action={deleteCategory}>
                  <input type="hidden" name="id" value={category.id.toString()} />
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
