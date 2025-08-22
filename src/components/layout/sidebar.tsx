"use client";
import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
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
    "hidden md:flex bg-[var(--sidebar-bg)] flex-col items-center w-[260px]  relative left-[-0.17px] ";

  const mobileClass = `fixed inset-y-0 left-0 z-50 w-72 bg-[var(--sidebar-bg)]  flex flex-col gap-4 transform transition-transform duration-300 md:hidden ${
    open ? "translate-x-0" : "-translate-x-full"
  }`;

  const containerClass = mobile ? mobileClass : desktopClass;

  return (
    <nav className={containerClass} aria-label="Sidebar">
      {mobile ? (
        // mobile header: smaller logo, padded, vertically centered close button
        <div className="flex items-center justify-between w-full px-4 py-3">
          <Link href="/" className="flex items-center">
            <div className="w-[200px] flex items-center flex-shrink-0">
              <Image
                src={"/layout/logo.svg"}
                alt="capita_logo"
                width={180}
                height={40}
                className=" object-contain"
              />
            </div>
          </Link>

          <button
            aria-label="Close menu"
            onClick={onClose}
            className=" rounded-md hover:bg-white/5"
          >
            <IoMdClose className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <Link href="/" className="flex items-center">
            <div className="w-[273.18px]  flex items-center">
              <Image
                src={"/layout/logo.svg"}
                alt="capita_logo"
                width={273}
                height={80}
                className="w-full object-contain pr-1"
              />
            </div>
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-3 w-full px-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className="flex items-center px-4 py-2 hover:bg-[var(--Shadow, #000033)] text-primary-text text-[13px] font-bold gap-3 cursor-pointer rounded-md"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="truncate">{item.title}</span>
          </Link>
        ))}

        <div className="mx-auto mt-4">
          <Link
            href="/campaigns/create-campaigns"
            onClick={() => onClose && onClose()}
            className="w-[200px] inline-flex px-2 py-3 bg-[var(--primary-blue)] text-white text-sm font-semibold rounded-full text-center cursor-pointer items-center justify-center"
          >
            <GoPlus className="mr-2" />
            <span>Create Campaign</span>
          </Link>
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
