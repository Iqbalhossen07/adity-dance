"use client";

import { useState } from "react";
import { login } from "./actions";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
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
            <input
              type="password"
              name="password"
              required
              className="w-full rounded-lg border border-gold/20 bg-black/50 px-4 py-3 text-sm text-white placeholder-ink-soft focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
              placeholder="••••••••"
            />
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
