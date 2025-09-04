"use client";
import { menuItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPlus } from "react-icons/go";

export default function Sidebar() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(pathname.split("/").length >= 2 ? 1 : 1);

  return (
    <div className="h-screen bg-sidebar w-full ">
      <div className="flex items-center justify-center w-full">
        <Link href="/" className="flex items-center">
          <div className="w-full  flex items-center">
            <Image
              src={"/layout/logolight.png"}
              alt="capita_logo"
              width={260}
              height={80}
              className="w-full object-contain pt-5 px-4 pb-6"
            />
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
                ? "bg-primary/10 py-3 border-r-[4px] !text-primary rounded-none border-primary"
                : ""
            }
              flex items-center px-4 py-2 hover:text-primary text-sidebar-content text-[12px] gap-3 cursor-pointer rounded-md
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
            className="w-full px-8 inline-flex  py-3 bg-primary text-white text-xs font-semibold rounded-full text-center cursor-pointer items-center justify-center"
          >
            <GoPlus className="mr-2" />
            <span>Create Campaign</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
