"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";

import { menuItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPlus } from "react-icons/go";

export default function MobileSidebar() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(pathname.split("/").length >= 2 ? 1 : 1);

  return (
    <Sheet>
      <SheetTrigger asChild className="fixed top-6 left-5 cursor-pointer z-50">
        <FaBars className="text-xl text-sidebar-content" />
      </SheetTrigger>
      {/* <SheetOverlay className="lg:hidden z-40" /> */}
      <SheetContent
        side="left"
        className="w-[250px] border-none bg-sidebar p-0 block lg:hidden"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <SheetClose asChild>
              <Link href="/" className="flex items-center">
                <div className="w-[200px] flex items-center flex-shrink-0">
                  <Image
                    src={"/layout/logolight.png"}
                    alt="capita_logo"
                    width={180}
                    height={40}
                    className=" object-contain"
                  />
                </div>
              </Link>
            </SheetClose>
          </SheetTitle>

          <div className="flex flex-col gap-2 mt-4 w-full px-">
            {menuItems.map((item, index) => (
              <SheetClose key={item.route} asChild>
                <Link
                  key={index}
                  href={item.route}
                  className={`
            ${
              slug === item.slug
                ? "bg-primary/30 py-3 border-r-[4px] !text-primary rounded-none border-primary"
                : ""
            }
              flex items-center px-4 py-2 hover:text-primary text-sidebar-content text-[12px] gap-3 cursor-pointer rounded-md
              `}
                >
                  <span className="text-lg">{<item.icon />}</span>
                  <span className="truncate">{item.title}</span>
                </Link>
              </SheetClose>
            ))}

            <SheetClose asChild className="mx-auto mt-4">
              <Link
                href="/create-campaigns"
                className="w-full px-8 inline-flex  py-3 bg-primary text-white text-xs font-semibold rounded-full text-center cursor-pointer items-center justify-center"
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
