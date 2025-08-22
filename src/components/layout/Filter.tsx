"use client";
import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import DropdownFilter from "@/components/campaigns/DropdownFilter";
import DropdownCategory from "@/components/campaigns/DropdownCategory";

import { filters } from "@/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleClick(par: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", par);
    router.push(`${pathname}?${params.toString()}`);
  }
  const active = searchParams.get("filter") || "all-campaigns";
  return (
    <div className="hidden lg:flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="rounded-lg border border-text-gray px-3 py-1 flex items-center gap-3">
          <Image
            height={16}
            width={16}
            src="/campaign/magnifying_glass.png"
            alt="magnifying glass"
          />
          <Input
            type="text"
            placeholder="Search"
            className="text-sm font-normal text-text-gray pl-3 pr-4 py-1.5 focus-visible:outline-none focus-visible:ring-0"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            {filters.map((fil) => (
              <button
                key={fil.id}
                onClick={() => handleClick(fil.slug)}
                className={`flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 text-[12px] font-normal text-primary-text ${
                  active === fil.slug
                    ? "border-b-2 pb-1 border-primary-text"
                    : ""
                }`}
              >
                <Image src={fil.svg} width={14} height={14} alt={fil.title} />
                <span>{fil.title}</span>
              </button>
            ))}
          </div>
        </div>

        <Link href={"/chainfundme/usertype"}>
          <Button className="rounded-lg p-2 flex gap-2 text-[11px] hover:bg-transparent duration-500 transition-all hover:scale-[1.06] bg-transparent text-secondary-text items-center border border-secondary-text">
            <p>Create Campaign</p>
            <MdEdit />
          </Button>
        </Link>
      </div>
      <div className="flex justify-between font-normal text-xs text-white">
        <div />
        <div className="space-x-4">
          <DropdownFilter />
          <DropdownCategory />
        </div>
      </div>
    </div>
  );
}
