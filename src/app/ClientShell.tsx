"use client";
import React from "react";
import Sidebar from "@/components/layout/sidebar";
import MobileSidebar from "@/components/layout/MobileSidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import Header from "@/components/layout/Header";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[14rem_1fr] w-full max-w-full relative">
      <aside className="hidden lg:block lg:fixed lg:top-0  lg:h-full lg:w-[14rem] z-30">
        <Sidebar />
      </aside>

      <div className="block lg:hidden">
        <MobileSidebar />
      </div>
      <div />
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(/layout/bg.jpg)",
        }}
        className="min-h-screen flex flex-col "
      >
        <MobileHeader />
        <Header />

        <main>{children}</main>
      </div>
    </div>

    // <div className="w-full min-h-screen flex">
    //   <aside className="hidden lg:block fixed top-0 left-0 h-full w-[14rem] z-30">
    //     <Sidebar />
    //   </aside>

    //   <div className="block lg:hidden">
    //     <MobileSidebar />
    //   </div>
    //   <div className="flex-1 flex flex-col min-h-screen lg:ml-[14rem]">
    //     <Header />
    //     <MobileHeader />

    //     <main className="flex-1 pt-[60px]">{children}</main>
    //   </div>
    // </div>

    // <div className="flex min-h-screen">
    //   {/* Desktop sidebar */}
    //   <Sidebar />

    //   {/* Global top bar (fixed) - visible on mobile on all routes; hidden on desktop for homepage */}
    //   <div
    //     className={`fixed top-0 left-0 right-0 z-50 ${topbarResponsiveClass}`}
    //   >
    //     <div className="w-full bg-[#121212] bg-opacity-95 flex items-center justify-between py-2 px-4 shadow-sm">
    //       <div className="flex items-center gap-3">
    //         {/* Hamburger - visible on mobile only */}
    //         <button
    //           aria-label="Open menu"
    //           onClick={() => setMobileOpen(true)}
    //           className="p-2 text-white md:hidden"
    //         >
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         </button>

    //         {/* Logo (shows on md+) */}
    //         <div className="hidden md:flex items-center">
    //           <Image
    //             src="/layout/logo.svg"
    //             alt="Capita logo"
    //             width={180}
    //             height={40}
    //             className="object-contain"
    //           />
    //         </div>
    //       </div>

    //       <div className="flex items-center gap-3">
    //         <div className="relative">
    //           <button
    //             aria-label="Notifications"
    //             className="p-2 text-white rounded-md"
    //           >
    //             <IoIosNotificationsOutline className="w-5 h-5" />
    //           </button>
    //           <span className="absolute -top-1 -right-1 bg-[#F4B400] text-black text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
    //             2
    //           </span>
    //         </div>

    //         {/* Promo / differentiator placed between notifications and connect wallet */}

    //         <button className="z-20 bg-white text-black px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-sm md:text-base">
    //           Connect Wallet
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Mobile overlay & Sidebar (always available when mobileOpen) */}
    //   {mobileOpen && (
    //     <>
    //       <div
    //         className="fixed inset-0 z-40 bg-black/50 md:hidden"
    //         onClick={() => setMobileOpen(false)}
    //         aria-hidden="true"
    //       />
    //       <Sidebar
    //         mobile
    //         open={mobileOpen}
    //         onClose={() => setMobileOpen(false)}
    //       />
    //     </>
    //   )}

    //   {/* add top padding so main content isn't hidden behind the fixed topbar where applicable */}
    //   <main className={`flex-1 min-h-screen overflow-auto ${mainPaddingClass}`}>
    //     {children}
    //   </main>
    // </div>
  );
}
