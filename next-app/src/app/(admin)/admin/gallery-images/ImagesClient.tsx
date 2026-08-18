"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { createImage, updateImage, deleteImage } from "./actions";

type ImageType = {
  id: number;
  title: string | null;
  image_path: string;
  alt_text: string | null;
  gallery_category_id: number | null;
  sort_order: number;
  is_published: boolean;
};

type CategoryType = {
  id: number;
  name: string;
};

export default function ImagesClient({ images, categories }: { images: ImageType[], categories: CategoryType[] }) {
  const [isMutating, setIsMutating] = useState(false);

  const categoryOptions = categories.map(c => `<option value="${c.id}">${c.name}</option>`).join("");

  const handleAdd = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add New Image",
      html: `
        <input id="swal-path" class="swal2-input" placeholder="Image Path (e.g. gallery/img.jpg)" required>
        <input id="swal-title" class="swal2-input" placeholder="Title">
        <input id="swal-alt" class="swal2-input" placeholder="Alt Text">
        <select id="swal-category" class="swal2-select">
          <option value="">No Category</option>
          ${categoryOptions}
        </select>
        <input type="number" id="swal-sort" class="swal2-input" placeholder="Sort Order" value="0">
        <label class="swal2-checkbox" style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
          <input type="checkbox" id="swal-published" checked> 
          <span style="margin-left: 10px;">Published</span>
        </label>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const path = (document.getElementById("swal-path") as HTMLInputElement).value;
        if (!path) {
          Swal.showValidationMessage("Image Path is required");
          return false;
        }
        return {
          image_path: path,
          title: (document.getElementById("swal-title") as HTMLInputElement).value,
          alt_text: (document.getElementById("swal-alt") as HTMLInputElement).value,
          gallery_category_id: (document.getElementById("swal-category") as HTMLSelectElement).value,
          sort_order: (document.getElementById("swal-sort") as HTMLInputElement).value,
          is_published: (document.getElementById("swal-published") as HTMLInputElement).checked,
        };
      },
    });

    if (formValues) {
      setIsMutating(true);
      const formData = new FormData();
      formData.append("image_path", formValues.image_path);
      formData.append("title", formValues.title);
      formData.append("alt_text", formValues.alt_text);
      if (formValues.gallery_category_id) {
        formData.append("gallery_category_id", formValues.gallery_category_id);
      }
      formData.append("sort_order", formValues.sort_order);
      formData.append("is_published", formValues.is_published.toString());

      const res = await createImage(formData);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Added!", "Image has been created.", "success");
      } else {
        Swal.fire("Error!", "Could not create image.", "error");
      }
    }
  };

  const handleEdit = async (image: ImageType) => {
    const editOptions = categories.map(c => 
      `<option value="${c.id}" ${c.id === image.gallery_category_id ? "selected" : ""}>${c.name}</option>`
    ).join("");

    const { value: formValues } = await Swal.fire({
      title: "Edit Image",
      html: `
        <input id="swal-path" class="swal2-input" placeholder="Image Path" value="${image.image_path.replace(/"/g, '&quot;')}" required>
        <input id="swal-title" class="swal2-input" placeholder="Title" value="${image.title || ""}">
        <input id="swal-alt" class="swal2-input" placeholder="Alt Text" value="${image.alt_text || ""}">
        <select id="swal-category" class="swal2-select">
          <option value="">No Category</option>
          ${editOptions}
        </select>
        <input type="number" id="swal-sort" class="swal2-input" placeholder="Sort Order" value="${image.sort_order}">
        <label class="swal2-checkbox" style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
          <input type="checkbox" id="swal-published" ${image.is_published ? "checked" : ""}> 
          <span style="margin-left: 10px;">Published</span>
        </label>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const path = (document.getElementById("swal-path") as HTMLInputElement).value;
        if (!path) {
          Swal.showValidationMessage("Image Path is required");
          return false;
        }
        return {
          image_path: path,
          title: (document.getElementById("swal-title") as HTMLInputElement).value,
          alt_text: (document.getElementById("swal-alt") as HTMLInputElement).value,
          gallery_category_id: (document.getElementById("swal-category") as HTMLSelectElement).value,
          sort_order: (document.getElementById("swal-sort") as HTMLInputElement).value,
          is_published: (document.getElementById("swal-published") as HTMLInputElement).checked,
        };
      },
    });

    if (formValues) {
      setIsMutating(true);
      const formData = new FormData();
      formData.append("image_path", formValues.image_path);
      formData.append("title", formValues.title);
      formData.append("alt_text", formValues.alt_text);
      if (formValues.gallery_category_id) {
        formData.append("gallery_category_id", formValues.gallery_category_id);
      }
      formData.append("sort_order", formValues.sort_order);
      formData.append("is_published", formValues.is_published.toString());

      const res = await updateImage(image.id, formData);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Updated!", "Image has been updated.", "success");
      } else {
        Swal.fire("Error!", "Could not update image.", "error");
      }
    }
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      setIsMutating(true);
      const res = await deleteImage(id);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Deleted!", "Image has been deleted.", "success");
      } else {
        Swal.fire("Error!", "Could not delete image.", "error");
      }
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl text-white">Gallery Images</h1>
        <button
          onClick={handleAdd}
          disabled={isMutating}
          className="btn-cultural rounded-none px-6 py-2.5 text-sm font-semibold tracking-widest text-white uppercase disabled:opacity-50"
        >
          Add Image
        </button>
      </div>

      <div className="overflow-hidden border border-gold/25 bg-panel-soft">
        <table className="min-w-full divide-y divide-gold/20">
          <thead className="bg-ink">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Image Path</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Title</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Sort Order</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold tracking-wider text-gold-soft uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold/10 bg-panel-soft">
            {images.map((image) => (
              <tr key={image.id} className="transition hover:bg-gold/5">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{image.image_path}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">{image.title || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">{image.sort_order}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {image.is_published ? (
                    <span className="inline-flex border border-gold/30 bg-gold/10 px-2 py-0.5 text-xs font-semibold tracking-wide text-gold-soft uppercase">Published</span>
                  ) : (
                    <span className="inline-flex border border-ink-soft/30 bg-ink-soft/10 px-2 py-0.5 text-xs font-semibold tracking-wide text-ink-soft uppercase">Draft</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(image)}
                    disabled={isMutating}
                    className="mr-4 text-gold-soft hover:text-white transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(image.id)}
                    disabled={isMutating}
                    className="text-vermillion hover:text-white transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {images.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-sm text-ink-soft">No images found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
