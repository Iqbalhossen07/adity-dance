import { prisma } from "@/lib/prisma";
import Link from "next/link";

import DashboardHeader from "./DashboardHeader";

export default async function AdminDashboard() {
  const user = await prisma.users.findFirst({ orderBy: { id: 'asc' } });
  
  const eventsCount = await prisma.events.count();
  const pastEventsCount = await prisma.events.count({
    where: { event_date: { lt: new Date() } }
  });
  const imagesCount = await prisma.gallery_images.count({
    where: { is_published: true }
  });
  const videosCount = await prisma.videos.count();

  return (
    <div className="flex flex-col gap-8">
      {/* Page Title & Clock */}
      <DashboardHeader user={user} />

      {/* Account Security Card */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between rounded-2xl border border-gold/10 bg-[#140b0e] p-6 shadow-xl">
        <div>
          <h2 className="text-lg font-semibold text-white">Account security</h2>
          <p className="mt-1 text-sm text-ink-soft">
            Update the email and password used to sign in to the admin panel.
          </p>
        </div>
        <Link href="/admin/account-settings" className="flex items-center gap-2 rounded-lg bg-[#cb5660] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#ba4d55] transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Change email &amp; password
        </Link>
      </div>

      {/* Website Overview Section */}
      <div>
        <h2 className="text-xl font-semibold text-white">Website overview</h2>
        <p className="mt-1 text-sm text-ink-soft mb-4">
          Published content across the Adity Dance website
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Events Card */}
          <div className="relative overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 shadow-xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-soft to-vermillion"></div>
            <h3 className="text-sm font-medium text-ink-soft">Upcoming events</h3>
            <p className="mt-2 font-display text-4xl font-bold text-white">{eventsCount}</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gold-soft">
              {pastEventsCount} past event{pastEventsCount !== 1 ? 's' : ''}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Gallery Card */}
          <div className="relative overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 shadow-xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-soft to-vermillion"></div>
            <h3 className="text-sm font-medium text-ink-soft">Gallery images</h3>
            <p className="mt-2 font-display text-4xl font-bold text-white">{imagesCount}</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-vermillion">
              Published on the site
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Videos Card */}
          <div className="relative overflow-hidden rounded-2xl border border-gold/10 bg-[#140b0e] p-6 shadow-xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-soft to-vermillion"></div>
            <h3 className="text-sm font-medium text-ink-soft">Videos</h3>
            <p className="mt-2 font-display text-4xl font-bold text-white">{videosCount}</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-teal-400">
              YouTube performances
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
