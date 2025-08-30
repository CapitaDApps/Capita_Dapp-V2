"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
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

  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved) setIsDark(saved === "dark");
    else setIsDark(document.documentElement.classList.contains("dark"));

    const mo = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    function onStorage(e: StorageEvent) {
      if (e.key === "theme") setIsDark(e.newValue === "dark");
    }
    window.addEventListener("storage", onStorage);

    return () => {
      mo.disconnect();
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  const date = new Date();
  return (
    <div className="bg-[var(--sidebar-bg)]">
      <div className="flex md:flex-row gap-1 flex-col md:items-center justify-between border-b border-silver py-4 px-2.5 ">
        <div className="flex items-center text-start">
          <Image
            width={100}
            height={50}
            alt="capita_logo"
            src={isDark ? "/layout/logo.svg" : "/layout/lightlogo.svg"}
            className="w-[150px] md:w-[150px] h-auto"
          />
          {/* <h2 className="font-bold text-xs text-primary-text pl-1">
            ChainFundMe
          </h2> */}
        </div>

        <div className="flex gap-4 md:gap-6 justify-cente md:justify-start items-center py-1.5 px-2">
          {links.map((link) => (
            <Link
              href={link.route}
              className="font-normal text-[11px] text-white"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-2 justify-end items-center">
          {socials.map((social, i) => (
            <Link
              className="text-white text-base cursor-pointer"
              href={social.route}
              target="_blank"
              key={i}
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center py-3 justify-center text-white text-[11px] font-[400]">
        <p>Copyright © {date.getFullYear()}, ChainFundMe</p>
      </div>
    </div>
  );
}
