import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";

async function deleteImage(formData: FormData) {
  "use server";
  const id = formData.get("id");
  if (id) {
    await prisma.gallery_images.delete({ where: { id: BigInt(id as string) } });
    revalidatePath("/admin/gallery-images");
  }
}

export default async function GalleryImagesPage() {
  const images = await prisma.gallery_images.findMany({
    include: {
      gallery_categories: true,
    },
    orderBy: { sort_order: "asc" },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Gallery Images</h1>
        <Link
          href="/admin/gallery-images/create"
          className="flex items-center gap-2 rounded-lg bg-[#cb5660] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ba4d55] transition-colors"
        >
          Add Image
        </Link>
      </div>

      {images.length === 0 ? (
        <div className="rounded-2xl border border-gold/10 bg-[#140b0e] p-12 text-center text-ink-soft shadow-xl">
          No images found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {images.map((img) => (
            <div key={img.id.toString()} className="relative overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] shadow-xl transition-all hover:border-gold/30 flex flex-col">
              <div className="relative aspect-square w-full bg-black">
                <img src={img.image_path} alt={img.title || "Gallery image"} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-bold text-white mb-1 line-clamp-1">{img.title || "Untitled"}</h3>
                <p className="text-xs text-gold-soft mb-4">{img.gallery_categories?.name || "No Category"}</p>

                <div className="mt-auto flex items-center justify-between">
                  {img.is_published ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-400">
                      <span className="h-1 w-1 rounded-full bg-green-400"></span>
                      Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] font-medium text-yellow-400">
                      <span className="h-1 w-1 rounded-full bg-yellow-400"></span>
                      Draft
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/gallery-images/${img.id}/edit`}
                      className="text-sm font-medium text-gold-soft hover:text-white transition"
                    >
                      Edit
                    </Link>
                    <form action={deleteImage}>
                      <input type="hidden" name="id" value={img.id.toString()} />
                      <button type="submit" className="text-sm font-medium text-[#cb5660] hover:text-[#ba4d55] transition">
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
