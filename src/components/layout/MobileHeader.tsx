"use client";

import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { initialNotifications } from "@/lib/notifications";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const slug = pathname.split("/")[1] || "";
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (open) {
      const scrollBarComp =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarComp > 0) {
        document.body.style.paddingRight = `${scrollBarComp}px`;
      }
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: PointerEvent) {
      const node = ref.current;
      if (node && !node.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      className={` ${
        slug ? "bg-[#121212]" : "bg-[#121212]/40 backdrop-blur-sm"
      } top-0 left-0 w-full z-40 fixed  py-8 px-4 h-12 flex items-center justify-between lg:hidden`}
    >
      <div />
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3" ref={ref}>
          <div className="relative">
            <button
              aria-label="Notifications"
              aria-expanded={open}
              className="p-2 text-white rounded-md"
              onClick={() => setOpen((o) => !o)}
            >
              <IoIosNotificationsOutline className="w-5 h-5" />
            </button>
            <span className="absolute -top-1 -right-1 bg-[#F4B400] text-black text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {initialNotifications.filter((n) => !n.read).length}
            </span>

            {open && (
              <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-[320px] max-w-[90vw] bg-[#071018] border border-[#2d2f33] rounded-lg shadow-lg z-50">
                <div className="p-3">
                  <h4 className="text-sm font-semibold text-white">
                    Notifications
                  </h4>
                  <div className="mt-2 max-h-56 overflow-y-auto divide-y divide-[#2c2f33]">
                    {initialNotifications.slice(0, 5).map((n) => (
                      <div key={n.id} className="py-2 flex items-start gap-2">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center text-white ${n.iconBg}`}
                        >
                          {n.iconEmoji}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white font-medium truncate">
                            {n.title}
                          </div>
                          <div className="text-xs text-slate-400">{n.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-right">
                    <a
                      href="/notifications"
                      className="text-sm underline text-slate-300"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="bg-white text-black px-3 md:px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition-colors hover:bg-gray-200">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}
