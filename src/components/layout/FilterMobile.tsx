"use client";
import React from "react";
import { filters } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { IoFilterOutline } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useOustsideClick } from "@/components/hooks/useOutsideClick";

export default function FilterMobile() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isOpen, setIsOpen, ref } = useOustsideClick();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input[name="q"]') as HTMLInputElement;
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", input.value);
    router.push(`${pathname}?${params.toString()}`);
  }

  function handleClick(par: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", par);
    router.push(`${pathname}?${params.toString()}`);
  }
  const active = searchParams.get("filter") || "all-campaigns";
  return (
    <div className="lg:hidden mt-4">
      <form onSubmit={handleSearch} className="flex items-center gap-3">
        <div className="flex-1">
          <label htmlFor="mobile-search" className="sr-only">
            Search campaigns
          </label>
          <div className="rounded-lg bg-[rgba(255,255,255,0.02)] border border-zinc-800 px-3 py-2 flex items-center gap-3 w-full">
            <Image
              height={16}
              width={16}
              src="/campaign/magnifying_glass.png"
              alt="Search"
              className="opacity-80"
            />
            <Input
              id="mobile-search"
              name="q"
              type="text"
              placeholder="Search campaigns"
              className="bg-transparent text-sm font-normal text-text-gray placeholder:text-zinc-500 pl-0 pr-2 py-0 focus-visible:outline-none focus-visible:ring-0 w-full"
            />
          </div>
        </div>

        <div className="relative">
          <DropdownMenu open={isOpen}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Open filters"
                onClick={() => setIsOpen(!isOpen)}
                className="h-10 w-10 rounded-md flex items-center justify-center text-primary-text"
                aria-expanded={isOpen}
                aria-haspopup="menu"
              >
                <IoFilterOutline className="text-lg" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
              <DropdownMenuContent
                ref={ref}
                className="absolute right-0 mt-2 w-56 bg-primary-bg border border-zinc-800 rounded-md p-3 shadow-lg z-50"
              >
                <div className="text-xs text-secondary-text mb-2 font-medium">
                  Filters
                </div>

                <div className="flex flex-col gap-2">
                  {filters.map((fil) => {
                    const isActive = active === fil.slug;
                    return (
                      <DropdownMenuItem
                        key={fil.id}
                        className={`flex items-center gap-2 text-sm rounded px-2 py-2 w-full text-left cursor-pointer ${
                          isActive
                            ? "bg-[rgba(105,78,255,0.12)] text-white"
                            : "hover:bg-[rgba(255,255,255,0.03)] text-primary-text"
                        }`}
                        onSelect={() => {
                          handleClick(fil.slug);
                          setIsOpen(false);
                        }}
                      >
                        <Checkbox
                          id={`mobile-${fil.slug}`}
                          checked={isActive}
                          onCheckedChange={() => {
                            handleClick(fil.slug);
                            setIsOpen(false);
                          }}
                        />
                        <Label
                          htmlFor={`mobile-${fil.slug}`}
                          className="text-sm ml-1"
                        >
                          {fil.title}
                        </Label>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </div>
      </form>

      <div className="mt-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-1 hide-scrollbar">
          {filters.map((fil) => {
            const isActive = active === fil.slug;
            return (
              <button
                key={fil.id}
                onClick={() => handleClick(fil.slug)}
                role="tab"
                aria-pressed={isActive}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 text-[13px] font-normal transition-colors duration-150 focus:outline-none `}
              >
                <Image src={fil.svg} width={14} height={14} alt={fil.title} />
                <span>{fil.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
