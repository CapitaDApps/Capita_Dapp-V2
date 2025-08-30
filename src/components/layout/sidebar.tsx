"use client";
import { menuItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPlus } from "react-icons/go";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(pathname.split("/").length >= 2 ? 1 : 1);

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

  return (
    <div className="h-screen bg-[var(--sidebar-bg)] w-full ">
      <div className="flex items-center justify-center w-full">
        <Link href="/" className="flex items-center">
          <div className="w-full  flex items-center">
            <div className="relative w-[200px] h-[80px] flex-shrink-0">
              <Image
                src={isDark ? "/layout/logo.svg" : "/layout/lightlogo.svg"}
                alt="capita_logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-4 w-full ">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className={`
            ${
              slug === item.slug
                ? "bg-[#000033] border-r-[4px] rounded-none border-[#0056CC]"
                : ""
            }
              flex items-center px-4 py-2 hover:bg-[var(--Shadow, #000033)] text-primary-text text-[12px] font-bold gap-3 cursor-pointer rounded-md
              `}
          >
            <span className="text-lg">{<item.icon />}</span>
            <span className="truncate">{item.title}</span>
          </Link>
        ))}

        <div className="mx-auto mt-4">
          <Link
            href="/create-campaigns"
            // onClick={() => onClose && onClose()}
            className="w-full px-8 inline-flex  py-3 bg-[var(--primary-blue)] text-[383838] dark:text-white text-xs font-semibold rounded-full text-center cursor-pointer items-center justify-center"
          >
            <GoPlus className="mr-2" />
            <span>Create Campaign</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
