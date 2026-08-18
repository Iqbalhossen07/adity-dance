"use client";

import { useState } from "react";
import { login } from "./actions";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    setIsLoading(false);

    if (result.error) {
      Swal.fire({
        title: "Login Failed",
        text: result.error,
        icon: "error",
        background: "#140b0e",
        color: "#fff",
        confirmButtonColor: "#cb5660",
      });
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0a0b] p-4 sm:p-8">
      <div className="w-full max-w-md rounded-2xl border border-gold/10 bg-[#140b0e] p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center">
          <img src="/images/logo.png" alt="Adity Dance" className="h-16 w-16 object-contain mb-4" />
          <h1 className="font-display text-3xl font-bold text-white tracking-wide">Welcome Back</h1>
          <p className="mt-2 text-sm text-ink-soft">Sign in to your admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gold-soft mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-gold/20 bg-black/50 px-4 py-3 text-sm text-white placeholder-ink-soft focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gold-soft mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="w-full rounded-lg border border-gold/20 bg-black/50 px-4 py-3 text-sm text-white placeholder-ink-soft focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors pr-10"
                placeholder="••••••••"
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

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-gold-soft to-vermillion px-4 py-3.5 text-sm font-bold tracking-wide text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#140b0e] disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
