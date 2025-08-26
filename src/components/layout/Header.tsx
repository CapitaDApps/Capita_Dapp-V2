import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();
  const slug = pathname.split("/")[1] || "";
  return (
    <div className="fixed lg:block hidden top-0 right- z-40 w-full lg:w-[calc(100%-14rem)] max-w-[130rem] mx-auto ">
      <div
        className={`${
          slug ? "bg-[#121212]" : "bg-[#121212]/40 backdrop-blur-sm"
        } top-0 left-0 w-full z-40`}
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

          <button className="bg-white text-black px-3 md:px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition-colors hover:bg-gray-200">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
