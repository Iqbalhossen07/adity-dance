"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { createVideo, updateVideo, deleteVideo } from "./actions";

type VideoType = {
  id: number;
  title: string;
  youtube_url: string;
  description: string | null;
  sort_order: number;
  is_published: boolean;
};

export default function VideosClient({ videos }: { videos: VideoType[] }) {
  const [isMutating, setIsMutating] = useState(false);

  const handleAdd = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add New Video",
      html: `
        <input id="swal-title" class="swal2-input" placeholder="Title" required>
        <input id="swal-url" class="swal2-input" placeholder="YouTube URL" required>
        <textarea id="swal-desc" class="swal2-textarea" placeholder="Description"></textarea>
        <input type="number" id="swal-sort" class="swal2-input" placeholder="Sort Order" value="0">
        <label class="swal2-checkbox" style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
          <input type="checkbox" id="swal-published" checked> 
          <span style="margin-left: 10px;">Published</span>
        </label>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const title = (document.getElementById("swal-title") as HTMLInputElement).value;
        const url = (document.getElementById("swal-url") as HTMLInputElement).value;
        if (!title || !url) {
          Swal.showValidationMessage("Title and YouTube URL are required");
          return false;
        }
        return {
          title,
          youtube_url: url,
          description: (document.getElementById("swal-desc") as HTMLTextAreaElement).value,
          sort_order: (document.getElementById("swal-sort") as HTMLInputElement).value,
          is_published: (document.getElementById("swal-published") as HTMLInputElement).checked,
        };
      },
    });

    if (formValues) {
      setIsMutating(true);
      const formData = new FormData();
      formData.append("title", formValues.title);
      formData.append("youtube_url", formValues.youtube_url);
      formData.append("description", formValues.description);
      formData.append("sort_order", formValues.sort_order);
      formData.append("is_published", formValues.is_published.toString());

      const res = await createVideo(formData);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Added!", "Video has been created.", "success");
      } else {
        Swal.fire("Error!", "Could not create video.", "error");
      }
    }
  };

  const handleEdit = async (video: VideoType) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Video",
      html: `
        <input id="swal-title" class="swal2-input" placeholder="Title" value="${video.title.replace(/"/g, '&quot;')}" required>
        <input id="swal-url" class="swal2-input" placeholder="YouTube URL" value="${video.youtube_url.replace(/"/g, '&quot;')}" required>
        <textarea id="swal-desc" class="swal2-textarea" placeholder="Description">${video.description || ""}</textarea>
        <input type="number" id="swal-sort" class="swal2-input" placeholder="Sort Order" value="${video.sort_order}">
        <label class="swal2-checkbox" style="display: flex; justify-content: center; align-items: center; margin-top: 15px;">
          <input type="checkbox" id="swal-published" ${video.is_published ? "checked" : ""}> 
          <span style="margin-left: 10px;">Published</span>
        </label>
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const title = (document.getElementById("swal-title") as HTMLInputElement).value;
        const url = (document.getElementById("swal-url") as HTMLInputElement).value;
        if (!title || !url) {
          Swal.showValidationMessage("Title and YouTube URL are required");
          return false;
        }
        return {
          title,
          youtube_url: url,
          description: (document.getElementById("swal-desc") as HTMLTextAreaElement).value,
          sort_order: (document.getElementById("swal-sort") as HTMLInputElement).value,
          is_published: (document.getElementById("swal-published") as HTMLInputElement).checked,
        };
      },
    });

    if (formValues) {
      setIsMutating(true);
      const formData = new FormData();
      formData.append("title", formValues.title);
      formData.append("youtube_url", formValues.youtube_url);
      formData.append("description", formValues.description);
      formData.append("sort_order", formValues.sort_order);
      formData.append("is_published", formValues.is_published.toString());

      const res = await updateVideo(video.id, formData);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Updated!", "Video has been updated.", "success");
      } else {
        Swal.fire("Error!", "Could not update video.", "error");
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
      const res = await deleteVideo(id);
      setIsMutating(false);

      if (res.success) {
        Swal.fire("Deleted!", "Video has been deleted.", "success");
      } else {
        Swal.fire("Error!", "Could not delete video.", "error");
      }
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl text-white">Videos</h1>
        <button
          onClick={handleAdd}
          disabled={isMutating}
          className="btn-cultural rounded-none px-6 py-2.5 text-sm font-semibold tracking-widest text-white uppercase disabled:opacity-50"
        >
          Add Video
        </button>
      </div>

      <div className="overflow-hidden border border-gold/25 bg-panel-soft">
        <table className="min-w-full divide-y divide-gold/20">
          <thead className="bg-ink">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Title</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">YouTube URL</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Sort Order</th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gold-soft uppercase">Status</th>
              <th className="px-6 py-4 text-right text-xs font-semibold tracking-wider text-gold-soft uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold/10 bg-panel-soft">
            {videos.map((video) => (
              <tr key={video.id} className="transition hover:bg-gold/5">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{video.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">{video.youtube_url}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-ink-soft">{video.sort_order}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {video.is_published ? (
                    <span className="inline-flex border border-gold/30 bg-gold/10 px-2 py-0.5 text-xs font-semibold tracking-wide text-gold-soft uppercase">Published</span>
                  ) : (
                    <span className="inline-flex border border-ink-soft/30 bg-ink-soft/10 px-2 py-0.5 text-xs font-semibold tracking-wide text-ink-soft uppercase">Draft</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(video)}
                    disabled={isMutating}
                    className="mr-4 text-gold-soft hover:text-white transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
                    disabled={isMutating}
                    className="text-vermillion hover:text-white transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {videos.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-sm text-ink-soft">No videos found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
