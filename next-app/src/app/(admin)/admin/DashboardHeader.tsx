"use client";

import { useEffect, useState } from "react";

export default function DashboardHeader({ user }: { user: any }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const greetings = () => {
    const hour = time.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const name = user?.name ? user.name.split(" ")[0] : "Admin";

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end justify-between bg-gradient-to-r from-[#210911] to-[#0d0a0b] p-8 rounded-2xl border border-gold/10 shadow-xl mb-8">
      <div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide text-white mb-2">
          {greetings()}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-soft to-vermillion">{name}</span>!
        </h1>
        <p className="text-sm text-ink-soft max-w-lg leading-relaxed">
          Welcome back to your Adity Dance control panel. Here is what's happening with your website today. Manage your events, gallery, and videos seamlessly.
        </p>
      </div>

      <div className="flex flex-col items-end justify-center">
        <p className="text-3xl font-display font-bold text-white tracking-wider">
          {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </p>
        <p className="text-sm font-medium text-gold-soft">
          {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
