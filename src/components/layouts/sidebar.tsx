"use client";
import Image from "next/image";
import Link from "next/link";
import { TbMoneybag } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaCrown, FaQuestionCircle, FaUser } from "react-icons/fa";
import { menuItems } from "@/lib/constants";

export default function Sidebar() {
  return (
    <div className="bg-[var(--sidebar-bg)] flex flex-col items-center w-[260px] h-full gap-[26px] relative left-[-0.17px]">
      <div className="flex items-center justify-center pt-6">
        <Link href={"/"} className="flex items-center">
          <Image
            width={273.18}
            height={25}
            alt="capita_logo"
            src={"/layout/logo.svg"}
            className="pr-1"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-3 w-full px-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className="flex items-center px-5 py-2 bg-transparent hover:bg-[#0056CC] text-primary-text text-[11px] font-bold gap-2 cursor-pointer rounded-md"
          >
            <span className="text-lg">{item.icon}</span>
            {item.title}
          </Link>
        ))}

        <div className="w-[200px]  px-2 py-3 bg-[var(--primary-blue)] text-white text-sm font-semibold rounded-full text-center cursor-pointer flex items-center justify-center">
          <GoPlus className="mr-2" />
          Create Campaign
        </div>
      </div>
    </div>
  );
}
