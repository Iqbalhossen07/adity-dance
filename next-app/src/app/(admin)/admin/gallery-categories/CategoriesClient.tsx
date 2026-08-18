"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { createCategory, updateCategory, deleteCategory } from "./actions";

type CategoryType = {
  id: number;
  name: string;
  slug: string;
  sort_order: number;
  is_published: boolean;
};

export default function CategoriesClient({ categories }: { categories: CategoryType[] }) {
  const [isMutating, setIsMutating] = useState(false);

  const handleAdd = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add New Category",
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Name" required>
        <input id="swal-slug" class="swal2-input" placeholder="Slug (e.g. performances)" required>
        <input type="number" id="swal-sort" class="swal2-input" placeholder="Sort Order" value="0">
        <label class="swal2-checkbox" style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
          <input type="checkbox" id="swal-published" checked> 
          <span style="margin-left: 10px;">Published</span>
        </label>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const name = (document.getElementById("swal-name") as HTMLInputElement).value;
        const slug = (document.getElementById("swal-slug") as HTMLInputElement).value;
        if (!name || !slug) {
          Swal.showValidationMessage("Name and Slug are required");
          return false;
        }
        return {
          name,
          slug,
          sort_order: (document.getElementById("swal-sort") as HTMLInputElement).value,
          is_published: (document.getElementById("swal-published") as HTMLInputElement).checked,
        };
      },
    });

    if (formValues) {
      setIsMutating(true);
      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("slug", formValues.slug);
      formData.append("sort_order", formValues.sort_order);
      formData.append("is_published", formValues.is_published.toString());

      const res = await createCategory(formData);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Added!", "Category has been created.", "success");
      } else {
        Swal.fire("Error!", "Could not create category.", "error");
      }
    }
  };

  const handleEdit = async (category: CategoryType) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Category",
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Name" value="${category.name.replace(/"/g, '&quot;')}" required>
        <input id="swal-slug" class="swal2-input" placeholder="Slug" value="${category.slug.replace(/"/g, '&quot;')}" required>
        <input type="number" id="swal-sort" class="swal2-input" placeholder="Sort Order" value="${category.sort_order}">
        <label class="swal2-checkbox" style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
          <input type="checkbox" id="swal-published" ${category.is_published ? "checked" : ""}> 
          <span style="margin-left: 10px;">Published</span>
        </label>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const name = (document.getElementById("swal-name") as HTMLInputElement).value;
        const slug = (document.getElementById("swal-slug") as HTMLInputElement).value;
        if (!name || !slug) {
          Swal.showValidationMessage("Name and Slug are required");
          return false;
        }
        return {
          name,
          slug,
          sort_order: (document.getElementById("swal-sort") as HTMLInputElement).value,
          is_published: (document.getElementById("swal-published") as HTMLInputElement).checked,
        };
      },
    });

    if (formValues) {
      setIsMutating(true);
      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("slug", formValues.slug);
      formData.append("sort_order", formValues.sort_order);
      formData.append("is_published", formValues.is_published.toString());

      const res = await updateCategory(category.id, formData);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Updated!", "Category has been updated.", "success");
      } else {
        Swal.fire("Error!", "Could not update category.", "error");
      }
    }
  };

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this! Ensure no images are assigned to this category.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      setIsMutating(true);
      const res = await deleteCategory(id);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Deleted!", "Category has been deleted.", "success");
      } else {
        Swal.fire("Error!", "Could not delete category.", "error");
      }
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl text-white">Gallery Categories</h1>
        <button
          onClick={handleAdd}
          disabled={isMutating}
          className="btn-cultural rounded-none px-6 py-2.5 text-sm font-semibold tracking-widest text-white uppercase disabled:opacity-50"
        >
          Add Category
        </button>
      </div>

      <div className="overflow-hidden border border-gold/25 bg-panel-soft">
        <table className="min-w-full divide-y divide-gold/20">
          <thead className="bg-ink">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Slug</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Sort Order</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold tracking-wider text-gold-soft uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold/10 bg-panel-soft">
            {categories.map((category) => (
              <tr key={category.id} className="transition hover:bg-gold/5">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">{category.slug}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">{category.sort_order}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {category.is_published ? (
                    <span className="inline-flex border border-gold/30 bg-gold/10 px-2 py-0.5 text-xs font-semibold tracking-wide text-gold-soft uppercase">Published</span>
                  ) : (
                    <span className="inline-flex border border-ink-soft/30 bg-ink-soft/10 px-2 py-0.5 text-xs font-semibold tracking-wide text-ink-soft uppercase">Draft</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(category)}
                    disabled={isMutating}
                    className="mr-4 text-gold-soft hover:text-white transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    disabled={isMutating}
                    className="text-vermillion hover:text-white transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-sm text-ink-soft">No categories found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
