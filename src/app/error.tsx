"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log("Error: ", error.message);
  }, [error.message]);

  return (
    <div className="pt-36 text-center text-white h-screen">
      <h2 className="text-2xl font-extrabold mt-16">Something went wrong!</h2>
      <div className="space-x-2 mt-3">
        <Button
          onClick={() => reset()}
          className="w-[72px] md:w-[81px] h-9 md:h-[36px] px-[12px] md:px-[20px] py-[6px] md:py-[8px] text-sm bg-[var(--Primary,#1038A2)] border border-[var(--Secondary-Text,#B3B3B3)] rounded-md"
        >
          Try again
        </Button>

        <Link href={"/"}>
          <Button className="w-[72px] md:w-[81px] h-9 md:h-[36px] px-[12px] md:px-[20px] py-[6px] md:py-[8px] text-sm bg-[var(--Primary,#1038A2)] border border-[var(--Secondary-Text,#B3B3B3)] rounded-md">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
