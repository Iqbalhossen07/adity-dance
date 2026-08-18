"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { saveImage } from "./formActions";

export default function ImageForm({ image, categories }: { image?: any, categories: any[] }) {
  const router = useRouter();
  const [isMutating, setIsMutating] = useState(false);
  const defaultPreviewUrl = image?.image_path 
    ? (image.image_path.startsWith('/') ? image.image_path : `/images/${image.image_path}`)
    : null;
  const [previewUrl, setPreviewUrl] = useState<string | null>(defaultPreviewUrl);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMutating(true);

    const formData = new FormData(e.currentTarget);
    if (image?.id) {
      formData.append("id", image.id.toString());
    }

    try {
      await saveImage(formData);
      Swal.fire({
        icon: "success",
        title: "Saved",
        text: "Image saved successfully.",
        background: "#140b0e",
        color: "#fff",
        confirmButtonColor: "#cb5660",
      });
      router.push("/admin/gallery-images");
      router.refresh();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not save image.",
        background: "#140b0e",
        color: "#fff",
      });
    } finally {
      setIsMutating(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 sm:p-8 shadow-xl max-w-4xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-full sm:w-1/3">
            <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Image File</label>
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-gold/20 bg-[#0d0a0b] mb-4">
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-ink-soft text-xs text-center p-4">
                  No image selected
                </div>
              )}
            </div>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required={!image}
              className="w-full text-xs text-ink-soft file:mr-2 file:cursor-pointer file:rounded file:border-0 file:bg-gold/10 file:px-2 file:py-1 file:font-semibold file:text-gold-soft"
            />
          </div>

          <div className="w-full sm:w-2/3 flex flex-col gap-6">
            <div>
              <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Title</label>
              <input
                name="title"
                type="text"
                defaultValue={image?.title || ""}
                className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Category</label>
              <select
                name="category_id"
                required
                defaultValue={image?.category_id?.toString() || ""}
                className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
              >
                <option value="" disabled>Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id.toString()} value={cat.id.toString()}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Sort Order</label>
              <input
                name="sort_order"
                type="number"
                defaultValue={image?.sort_order || 0}
                className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="is_published"
                id="is_published"
                value="1"
                defaultChecked={image ? image.is_published : true}
                className="h-4 w-4 rounded border-gold/20 bg-[#0d0a0b] text-[#cb5660] focus:ring-[#cb5660]"
              />
              <label htmlFor="is_published" className="text-sm font-semibold tracking-wide text-ink-soft">
                Publish Image
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4 border-t border-gold/10 pt-6">
          <button
            type="button"
            onClick={() => router.push("/admin/gallery-images")}
            className="rounded-lg border border-gold/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isMutating}
            className="rounded-lg bg-[#cb5660] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ba4d55] disabled:opacity-50"
          >
            Save Image
          </button>
        </div>
      </form>
    </div>
  );
}
