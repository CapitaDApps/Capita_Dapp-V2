import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Explore",
      route: "/explore-campaigns",
    },
    {
      name: "Terms",
      route: "https://chainfundme-1.gitbook.io/chainfundme-1/terms",
    },
    {
      name: "Privacy",
      route: "https://chainfundme-1.gitbook.io/chainfundme-1/privacy",
    },
  ];
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
  const date = new Date();
  return (
    <div className="bg-sidebar shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 flex-col md:items-center justify-between border-b border-primary/30 py-4 px-2.5 ">
        <div className="flex items-center text-start">
          <Image
            width={100}
            height={50}
            alt="capita_logo"
            quality={100}
            src="/layout/logolight.png"
            className="w-[150px] md:w-[150px] h-auto"
          />
          {/* <h2 className="font-bold text-xs text-primary-text pl-1">
            ChainFundMe
          </h2> */}
        </div>

        <div className="flex gap-4 pt-3 md:pt-0 md:gap-6 justify-cente md:justify-center items-center py-1.5 px-2">
          {links.map((link) => (
            <Link
              href={link.route}
              className="font-normal text-[11px] lg:text-sm hover:text-primary text-sidebar-content"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-2 justify-end items-center">
          {socials.map((social, i) => (
            <Link
              className="text-sidebar-content hover:text-primary text-base cursor-pointer"
              href={social.route}
              target="_blank"
              key={i}
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center py-3 justify-center text-sidebar-content text-[11px] font-[400]">
        <p>Copyright © {date.getFullYear()}, ChainFundMe</p>
      </div>
    </div>
  );
}
