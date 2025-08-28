"use client";

import React from "react";
import Image from "next/image";

export default function UploadBanner() {
  return (
    <div className="w-full bg-[#071018] rounded-md overflow-hidden">
      <div className="relative h-40 sm:h-48 bg-gradient-to-r from-[#04101a] to-[#08121a]">
        <Image
          src="/campaign/banner.png"
          alt="banner"
          fill
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
      </div>
      <div className="px-4 pb-4 flex items-center justify-between -mt-10">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-[#0f1720] border border-[var(--form-blue-border)] overflow-hidden">
            <Image
              src="/campaign/c.png"
              alt="avatar"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-white font-semibold">Anon</div>
            <div className="text-sm text-slate-400">0x...1234</div>
          </div>
        </div>

        <div>
          <button className="rounded-[6px] bg-gray-700 border-none text-primary-text hover:bg-gray-700/80 py-1.5 px-3 text-[12px]">
            Upload banner
          </button>
        </div>
      </div>
    </div>
  );
}
