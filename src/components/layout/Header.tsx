import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { IoIosNotifications } from "react-icons/io";
import { initialNotifications } from "@/lib/notifications";

export default function Header() {
  const pathname = usePathname();
  const slug = pathname.split("/")[1] || "";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!(e.target as Node) || ref.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="fixed lg:block hidden top-0 right- z-40 w-full lg:w-[calc(100%-14rem)] max-w-[130rem] mx-auto ">
      <div
        className={`${
          slug ? "bg-background" : "bg-background/40 backdrop-blur-sm "
        } top-0 left-0 w-full z-40 shadow-lg`}
      >
        <div className="w-full  px-5 flex items-center justify-between py-[14px]">
          <div className="hidden md:flex items-center space-x-2">
            <div className="bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/layout/dot.svg"
                alt="Logo"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </div>
            <span className="text-sm font-medium bg-clip-text">
              Create your funding campaigns now!
            </span>
          </div>

          <div className="flex items-center gap-3" ref={ref}>
            <div className="relative">
              <button
                aria-label="Notifications"
                className="p-2 text-sidebar-content cursor-pointer  rounded-md"
                onClick={() => setOpen((o) => !o)}
              >
                <IoIosNotifications className="w-5 h-5" />
              </button>
              <span className="absolute -top-0.5 right-1 bg-[#F4B400] text-black text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                {initialNotifications.filter((n) => !n.read).length}
              </span>

              {open && (
                <div className="absolute right-0 mt-2 w-[320px] bg-[#071018] border border-[#2d2f33] rounded-lg shadow-lg z-50">
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
                            <div className="text-xs text-slate-400">
                              {n.time}
                            </div>
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

            <button className="bg-primary text-background px-3 md:px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition-colors hover:bg-gray-200">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
