"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { saveCategory } from "./formActions";

export default function CategoryForm({ category }: { category?: any }) {
  const router = useRouter();
  const [isMutating, setIsMutating] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsMutating(true);

    const formData = new FormData(e.currentTarget);
    if (category?.id) {
      formData.append("id", category.id.toString());
    }

    try {
      await saveCategory(formData);
      Swal.fire({
        icon: "success",
        title: "Saved",
        text: "Category saved successfully.",
        background: "#140b0e",
        color: "#fff",
        confirmButtonColor: "#cb5660",
      });
      router.push("/admin/gallery-categories");
      router.refresh();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not save category.",
        background: "#140b0e",
        color: "#fff",
      });
    } finally {
      setIsMutating(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 sm:p-8 shadow-xl max-w-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Name</label>
          <input
            name="name"
            type="text"
            required
            defaultValue={category?.name || ""}
            className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Slug (e.g. cultural-dance)</label>
          <input
            name="slug"
            type="text"
            required
            defaultValue={category?.slug || ""}
            className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Sort Order</label>
          <input
            name="sort_order"
            type="number"
            defaultValue={category?.sort_order || 0}
            className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
          />
        </div>

        <div className="mt-6 flex justify-end gap-4 border-t border-gold/10 pt-6">
          <button
            type="button"
            onClick={() => router.push("/admin/gallery-categories")}
            className="rounded-lg border border-gold/20 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isMutating}
            className="rounded-lg bg-[#cb5660] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ba4d55] disabled:opacity-50"
          >
            Save Category
          </button>
        </div>
      </form>
    </div>
  );
}
