"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { updateUserAccount } from "./actions";

export default function AccountSettingsClient({ user }: { user: { name: string; email: string; image_path: string | null } | null }) {
  const [isMutating, setIsMutating] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(user?.image_path || null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password && password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Passwords do not match!",
        background: "#140b0e",
        color: "#fff",
      });
      return;
    }

    setIsMutating(true);
    try {
      await updateUserAccount(formData);
      Swal.fire({
        icon: "success",
        title: "Updated",
        text: "Account settings have been updated.",
        background: "#140b0e",
        color: "#fff",
        confirmButtonColor: "#cb5660",
      });
      if (password) {
        (document.getElementById("password") as HTMLInputElement).value = "";
        (document.getElementById("confirmPassword") as HTMLInputElement).value = "";
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong.",
        background: "#140b0e",
        color: "#fff",
      });
    } finally {
      setIsMutating(false);
    }
  };

  if (!user) {
    return <div className="text-white">No admin user found.</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Account Settings</h1>

      <div className="overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 sm:p-8 shadow-xl max-w-2xl">
        <form onSubmit={handleUpdate} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-gold/20 bg-[#0d0a0b] flex-shrink-0">
              {previewImage ? (
                <img src={previewImage} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-ink-soft">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1">
              <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Profile Image</label>
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-ink-soft file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-gold/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gold-soft hover:file:bg-gold/20 transition-colors"
              />
              <p className="mt-2 text-xs text-ink-soft/70">JPG, PNG or GIF. Max size of 5MB.</p>
            </div>
          </div>

          <div className="mt-4 border-t border-gold/10 pt-6">
            <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Full Name</label>
            <input
              name="name"
              type="text"
              defaultValue={user.name}
              className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Email Address</label>
            <input
              name="email"
              type="email"
              defaultValue={user.email}
              className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660]"
            />
          </div>

          <div className="mt-4 border-t border-gold/10 pt-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Change Password</h3>
            <p className="mb-6 text-sm text-ink-soft">Leave blank if you do not wish to change your password.</p>
            
            <div className="flex flex-col gap-6">
              <div>
                <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">New Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold tracking-wide text-ink-soft">Confirm New Password</label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full rounded-lg border border-gold/20 bg-[#0d0a0b] px-4 py-3 text-white focus:border-[#cb5660] focus:outline-none focus:ring-1 focus:ring-[#cb5660] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-soft hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t border-gold/10 pt-6">
            <button
              type="submit"
              disabled={isMutating}
              className="rounded-lg bg-[#cb5660] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ba4d55] disabled:opacity-50"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
