"use client";
import Image from "next/image";
import Link from "next/link";
import { TbMoneybag } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaCrown, FaQuestionCircle, FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { menuItems } from "@/lib/constants";

export default function Sidebar({
  mobile = false,
  open = false,
  onClose,
}: {
  mobile?: boolean;
  open?: boolean;
  onClose?: () => void;
}) {
  const desktopClass =
    "hidden md:flex bg-[var(--sidebar-bg)] flex-col items-center w-[260px]  gap-[26px] relative left-[-0.17px] p-4";

  const mobileClass = `fixed inset-y-0 left-0 z-50 w-72 bg-[var(--sidebar-bg)] p-4 flex flex-col gap-4 transform transition-transform duration-300 md:hidden ${
    open ? "translate-x-0" : "-translate-x-full"
  }`;

  const containerClass = mobile ? mobileClass : desktopClass;

  return (
    <nav className={containerClass} aria-label="Sidebar">
      {mobile ? (
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={"/layout/logo.svg"}
              alt="capita_logo"
              width={120}
              height={36}
            />
          </Link>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="p-2 rounded-md hover:bg-white/5"
          >
            <IoMdClose className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center pt-6 w-full">
          <Link href="/" className="flex items-center">
            <Image
              width={273.18}
              height={10}
              alt="capita_logo"
              src={"/layout/logo.svg"}
              className="pr-1"
            />
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-3 w-full px-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className="flex items-center px-4 py-2 hover:bg-[#0056CC] text-primary-text text-[13px] font-bold gap-3 cursor-pointer rounded-md"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="truncate">{item.title}</span>
          </Link>
        ))}

        <div className="mx-auto mt-4">
          <button className="w-[200px] px-2 py-3 bg-[var(--primary-blue)] text-white text-sm font-semibold rounded-full text-center cursor-pointer flex items-center justify-center">
            <GoPlus className="mr-2" />
            Create Campaign
          </button>
        </div>
      </div>

      {/* <div className="mt-auto w-full px-2 pb-6">
        <div className="flex items-center justify-center space-x-4 text-gray-400">
          <a href="#" className="p-1" aria-label="telegram">
            <Image
              src={"/layout/telegram.svg"}
              alt="tg"
              width={18}
              height={18}
            />
          </a>
        </div>
      </div> */}
    </nav>
  );
}
