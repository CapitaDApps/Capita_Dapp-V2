"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/layout/sidebar";
import MobileSidebar from "@/components/layout/MobileSidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import Header from "@/components/layout/Header";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Initialize from localStorage or current root class
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved) {
      setIsDark(saved === "dark");
    } else {
      setIsDark(document.documentElement.classList.contains("dark"));
    }

    // Observe class changes on <html> so we react when header toggles theme
    const mo = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Listen for cross-tab theme changes
    function onStorage(e: StorageEvent) {
      if (e.key === "theme") setIsDark(e.newValue === "dark");
    }
    window.addEventListener("storage", onStorage);

    return () => {
      mo.disconnect();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const background = isDark
    ? "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(/layout/bg.jpg)"
    : "linear-gradient(to bottom, rgba(255,255,255,0.0), rgba(255,255,255,0.0)), url(/layout/light-bp.svg)";

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
          background,
        }}
        className="min-h-screen flex flex-col "
      >
        <MobileHeader />
        <Header />

        <main>{children}</main>
      </div>
    </div>
  );
}
