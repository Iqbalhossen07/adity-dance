import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import ViewImageButton from "./ViewImageButton";
import DeleteConfirmButton from "@/components/ui/DeleteConfirmButton";

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
              <div className="relative h-56 w-full bg-black">
                <img src={img.image_path ? (img.image_path.startsWith('/') ? img.image_path : `/images/${img.image_path}`) : ''} alt={img.title || "Gallery image"} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-bold text-white mb-1 line-clamp-1">{img.title || "Untitled"}</h3>
                <p className="text-xs text-gold-soft mb-4">{img.gallery_categories?.name || "No Category"}</p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
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

                  <div className="flex flex-wrap items-center gap-2">
                    <ViewImageButton image={img} />
                    <Link
                      href={`/admin/gallery-images/${img.id}/edit`}
                      className="flex items-center gap-1.5 rounded-lg border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold-soft hover:bg-gold/20 hover:text-white transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </Link>
                    <DeleteConfirmButton id={img.id.toString()} action={deleteImage} />
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
