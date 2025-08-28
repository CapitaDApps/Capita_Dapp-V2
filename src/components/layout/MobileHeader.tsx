import { usePathname } from "next/navigation";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function MobileHeader() {
  const pathname = usePathname();
  const slug = pathname.split("/")[1] || "";
  return (
    <header
      className={` ${
        slug ? "bg-[#121212]" : "bg-[#121212]/40 backdrop-blur-sm"
      } top-0 left-0 w-full z-40 fixed  py-8 px-4 h-12 flex items-center justify-between lg:hidden`}
    >
      <div />
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

        <button className="z-20 bg-white text-black px-3 md:px-4 py-2 rounded-lg font-medium transition-colors text-xs md:text-sm">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
