"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterMobile() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input[name="q"]') as HTMLInputElement;
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", input.value);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="lg:hidden mt-4">
      <form onSubmit={handleSearch} className="flex items-center gap-3">
        <div className="flex-1 rounded-lg border border-text-gray p-2 flex items-center gap-2">
          <Image
            src="/magnifying_glass.png"
            width={16}
            height={16}
            alt="search"
          />
          <Input
            name="q"
            placeholder="Search"
            className="text-sm bg-transparent border-none focus:ring-0"
          />
        </div>
        <Button type="submit" className="px-3 py-2">
          Search
        </Button>
      </form>
    </div>
  );
}
