"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/layout/sidebar";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Global top bar (fixed) - shows hamburger on mobile and Connect Wallet/notifications globally */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full bg-[#121212] bg-opacity-95 flex items-center justify-between py-2 px-4 shadow-sm">
          <div className="flex items-center gap-3">
            {/* Hamburger - visible on mobile only */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="p-2 text-white md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo (shows on md+) */}
            <div className="hidden md:flex items-center">
              <Image
                src="/layout/logo.svg"
                alt="Capita logo"
                width={180}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                aria-label="Notifications"
                className="p-2 text-white rounded-md"
              >
                <IoIosNotificationsOutline className="w-5 h-5" />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#F4B400] text-black text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>

            {/* Promo / differentiator placed between notifications and connect wallet */}

            <button className="z-20 bg-white text-black px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm md:text-base">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay & Sidebar */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <Sidebar
            mobile
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />
        </>
      )}

      {/* add top padding so main content isn't hidden behind the fixed topbar */}
      <main className="flex-1 min-h-screen overflow-auto pt-14">
        {children}
      </main>
    </div>
  );
}
