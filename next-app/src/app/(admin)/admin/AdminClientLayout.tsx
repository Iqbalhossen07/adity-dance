"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavItem = ({ href, icon, label, isActive, onClick }: { href: string; icon: React.ReactNode; label: string; isActive: boolean; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-white/10 text-white"
        : "text-ink-soft hover:bg-white/5 hover:text-white"
    }`}
  >
    {icon}
    {label}
  </Link>
);

const MobileNavItem = ({ href, icon, label, isActive }: { href: string; icon: React.ReactNode; label: string; isActive: boolean }) => (
  <Link
    href={href}
    className={`relative flex flex-1 flex-col items-center justify-center rounded-3xl py-2 transition-colors ${
      isActive ? "bg-gradient-to-b from-[#6a112a] to-[#3a0a16] text-white" : "text-ink-soft hover:text-white"
    }`}
  >
    {icon}
    <span className="text-[10px] font-bold tracking-widest mt-0.5">{label}</span>
    {isActive && (
      <div className="absolute bottom-1.5 h-0.5 w-4 rounded-full bg-gradient-to-r from-gold to-vermillion"></div>
    )}
  </Link>
);

export default function AdminClientLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user: any;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0d0a0b] font-sans text-white">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-gold/10 bg-gradient-to-b from-[#3a0c16] to-[#0d0a0b] lg:flex">
        <div className="flex h-16 items-center gap-3 border-b border-gold/10 px-6">
          <img src="/images/logo.png" alt="Adity Dance" className="h-8 w-8 object-contain" />
          <div>
            <h1 className="font-display text-lg font-bold leading-tight text-white">Adity Dance</h1>
            <p className="text-[10px] font-semibold tracking-widest text-gold-soft uppercase">Admin Studio</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <NavItem
            href="/admin"
            label="Dashboard"
            isActive={pathname === "/admin"}
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />

          <div className="mt-8 mb-2 px-2 text-[10px] font-bold tracking-widest text-ink-soft uppercase">Website Content</div>
          <div className="flex flex-col gap-1">
            <NavItem
              href="/admin/events"
              label="Events"
              isActive={pathname.startsWith("/admin/events")}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
            <NavItem
              href="/admin/videos"
              label="Videos"
              isActive={pathname.startsWith("/admin/videos")}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>

          <div className="mt-8 mb-2 px-2 text-[10px] font-bold tracking-widest text-ink-soft uppercase">Gallery</div>
          <div className="flex flex-col gap-1">
            <NavItem
              href="/admin/gallery-categories"
              label="Categories"
              isActive={pathname.startsWith("/admin/gallery-categories")}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              }
            />
            <NavItem
              href="/admin/gallery-images"
              label="Images"
              isActive={pathname.startsWith("/admin/gallery-images")}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>

          <div className="mt-8 mb-2 px-2 text-[10px] font-bold tracking-widest text-ink-soft uppercase">Settings</div>
          <div className="flex flex-col gap-1">
            <NavItem
              href="/admin/account-settings"
              label="Account settings"
              isActive={pathname.startsWith("/admin/account-settings")}
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 lg:pb-0">
        {/* Header on Desktop */}
        <header className="hidden h-16 items-center justify-end border-b border-gold/10 px-8 lg:flex relative">
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-gold/20 bg-[#140b0e] transition-colors hover:border-gold-soft">
              {user?.image_path ? (
                <img src={user.image_path.startsWith('/') ? user.image_path : `/images/${user.image_path}`} alt={user?.name || "Admin"} className="h-full w-full object-cover" />
              ) : (
                <span className="text-xs font-bold text-gold-soft">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
                </span>
              )}
            </button>

            {/* Dropdown Menu */}
            <div 
              className={`absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-gold/20 bg-[#140b0e] shadow-2xl transition-all duration-200 ${
                isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="border-b border-gold/10 px-4 py-3">
                <p className="text-sm font-semibold text-white truncate">{user?.name || "Admin"}</p>
                <p className="text-xs text-ink-soft truncate">{user?.email || "admin@example.com"}</p>
              </div>
              <div className="p-2">
                <Link
                  href="/admin/account-settings"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-gold/10 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Account Settings
                </Link>
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#cb5660] hover:bg-[#cb5660]/10 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-5 sm:p-8 lg:p-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <div className="flex w-full items-center justify-between overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-b from-[#2a0812] to-[#0f0a0d] p-1.5 shadow-2xl backdrop-blur-md">
          <MobileNavItem
            href="/admin"
            label="Home"
            isActive={pathname === "/admin"}
            icon={
              <svg className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
          />
          <MobileNavItem
            href="/admin/events"
            label="Events"
            isActive={pathname.startsWith("/admin/events")}
            icon={
              <svg className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <MobileNavItem
            href="/admin/gallery-images"
            label="Gallery"
            isActive={pathname.startsWith("/admin/gallery")}
            icon={
              <svg className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />
          <MobileNavItem
            href="/admin/videos"
            label="Videos"
            isActive={pathname.startsWith("/admin/videos")}
            icon={
              <svg className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            }
          />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex flex-1 flex-col items-center justify-center p-2 text-[10px] font-semibold uppercase tracking-wider transition-colors ${isMobileMenuOpen ? 'text-white' : 'text-ink-soft hover:text-white'}`}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-[#0d0a0b]/95 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col pt-16 px-6 pb-24 overflow-y-auto ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gold/10">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-gold/20 bg-[#140b0e]">
            {user?.image_path ? (
              <img src={user.image_path.startsWith('/') ? user.image_path : `/images/${user.image_path}`} alt={user?.name || "Admin"} className="h-full w-full object-cover" />
            ) : (
              <span className="text-sm font-bold text-gold-soft">
                {user?.name ? user.name.charAt(0).toUpperCase() : "A"}
              </span>
            )}
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white leading-tight">{user?.name || "Admin"}</h3>
            <p className="text-xs text-gold-soft">{user?.email || "admin@example.com"}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="mb-3 text-[10px] font-bold tracking-widest text-ink-soft uppercase">Website Content</div>
            <div className="flex flex-col gap-2">
              <NavItem onClick={() => setIsMobileMenuOpen(false)} href="/admin/events" label="Events" isActive={pathname.startsWith("/admin/events")} icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} />
              <NavItem onClick={() => setIsMobileMenuOpen(false)} href="/admin/videos" label="Videos" isActive={pathname.startsWith("/admin/videos")} icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>} />
            </div>
          </div>

          <div>
            <div className="mb-3 text-[10px] font-bold tracking-widest text-ink-soft uppercase">Gallery</div>
            <div className="flex flex-col gap-2">
              <NavItem onClick={() => setIsMobileMenuOpen(false)} href="/admin/gallery-categories" label="Categories" isActive={pathname.startsWith("/admin/gallery-categories")} icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>} />
              <NavItem onClick={() => setIsMobileMenuOpen(false)} href="/admin/gallery-images" label="Images" isActive={pathname.startsWith("/admin/gallery-images")} icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} />
            </div>
          </div>

          <div>
            <div className="mb-3 text-[10px] font-bold tracking-widest text-ink-soft uppercase">Settings</div>
            <div className="flex flex-col gap-2">
              <NavItem onClick={() => setIsMobileMenuOpen(false)} href="/admin/account-settings" label="Account settings" isActive={pathname.startsWith("/admin/account-settings")} icon={<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>} />
              <button onClick={() => window.location.href = '/'} className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[#cb5660] hover:bg-[#cb5660]/10 transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
