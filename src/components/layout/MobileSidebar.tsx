"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars, FaTimes } from "react-icons/fa";

import { menuItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { GoPlus } from "react-icons/go";

export default function MobileSidebar() {
  // const pathname = usePathname();
  // const slug = pathname.split("/").at(pathname.split("/").length >= 2 ? 1 : 1);

  return (
    <Sheet>
      <SheetTrigger asChild className="fixed top-6 left-5 cursor-pointer z-50">
        <FaBars className="text-xl text-white" />
      </SheetTrigger>
      {/* <SheetOverlay className="lg:hidden z-40" /> */}
      <SheetContent
        side="left"
        className="w-[250px] border-none bg-[var(--sidebar-bg)] p-0 block lg:hidden"
      >
        <SheetHeader className="px-4 pt-4">
          <div className="flex items-center justify-between w-full">
            <SheetTitle className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-[180px] flex items-center flex-shrink-0">
                  <Image
                    src={"/layout/logo.svg"}
                    alt="capita_logo"
                    width={180}
                    height={40}
                    className=" object-contain"
                  />
                </div>
              </Link>
            </SheetTitle>

            <SheetClose asChild>
              <button
                aria-label="Close menu"
                className="p-2 rounded-md text-foreground hover:bg-[rgba(255,255,255,0.04)] w-8 h-8 flex items-center justify-center ml-2"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </SheetClose>
          </div>

          <div className="flex flex-col gap-2 mt-4 w-full px-2">
            {menuItems.map((item, index) => (
              <SheetClose key={item.route} asChild>
                <Link
                  key={index}
                  href={item.route}
                  className="flex items-center  py-2 hover:bg-[var(--Shadow, #000033)] text-primary-text text-[12px] font-bold gap-3 cursor-pointer rounded-md"
                >
                  <span className="text-lg">{<item.icon />}</span>
                  <span className="truncate">{item.title}</span>
                </Link>
              </SheetClose>
            ))}

            <SheetClose asChild className="mx-auto mt-4">
              <Link
                href="/campaigns/create-campaigns"
                className="w-full px-8 inline-flex  py-3 bg-[var(--primary-blue)] text-white text-xs font-semibold rounded-full text-center cursor-pointer items-center justify-center"
              >
                <GoPlus className="mr-2" />
                <span>Create Campaign</span>
              </Link>
            </SheetClose>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
