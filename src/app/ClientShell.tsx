"use client";
import React, { useState } from "react";
import Sidebar from "@/components/layouts/sidebar";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex items-center  min-h-screen">
      {/* Desktop sidebar */}
      <Sidebar />

      <div className="md:hidden fixed  left-0 right-0 z-50">
        <div className="w-full  bg-[#121212] opacity-90 rounded-lg flex items-center justify-between py-1 shadow-sm">
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="p-2 text-white"
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

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                aria-label="Notifications"
                className="p-2 text-white rounded-md "
              >
                <IoIosNotificationsOutline className="w-5 h-5" />
              </button>

              <span className="absolute -top-1 -right-1 bg-[#F4B400] text-black text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>

            <button className="z-20 bg-white text-black px-3 md:px-4 py-2 rounded-lg font-medium  transition-colors text-sm md:text-base">
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

      <main className="flex-1 min-h-screen overflow-auto">{children}</main>
    </div>
  );
}
