"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  const socials = [
    {
      name: <FaTelegramPlane />,
      route: "https://t.me/CapitatokenHQ",
    },
    {
      name: <FaXTwitter />,
      route: "https://x.com/chainfundme_?t=nD6xjLAo0lipAijH7rEzCw&s=09",
    },
    {
      name: <FaInstagram />,
      route: "https://www.instagram.com/chainfundme?igsh=MTlheTNxdjh4MHFkNA==",
    },
  ];

  return (
    <div className="h-screen bg-primary-bg w-full ">
      <div className="flex items-center relative pt-6 pl-2">
        <Link href={"/"}>
          <Image
            width={35}
            height={35}
            alt="capita_logo"
            src="/chain.png"
            className="pr-1"
          />
        </Link>
        <div className="absolut left-[32%] ">
          <h2 className="font-bold text-xs text-primary-text">ChainFundMe</h2>
          <div className="text-secondary-text text-xs flex items-center gap-1">
            {socials.map((social, i) => (
              <Link
                className="text-white text-xs cursor-pointer"
                href={social.route}
                target="_blank"
                key={i}
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-8 space-y-2">
        {/* Placeholder for links or menu items */}
        <div className="px-5 py-2 bg-[#000033] text-primary-text text-[11px] font-bold">
          Menu Item 1
        </div>
        <div className="px-5 py-2 bg-transparent hover:bg-[#0056CC] text-primary-text text-[11px] font-bold">
          Menu Item 2
        </div>
        <div className="px-5 py-2 bg-transparent hover:bg-[#0056CC] text-primary-text text-[11px] font-bold">
          Menu Item 3
        </div>
      </div>
    </div>
  );
}
