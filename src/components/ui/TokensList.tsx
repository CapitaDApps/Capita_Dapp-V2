"use client";

import React from "react";
import Image from "next/image";
import { TokenObjectType } from "@/services/contracts/tokensConfig";

export default function TokensList({
  tokens,
  className = "",
}: {
  tokens: TokenObjectType[];
  className?: string;
}) {
  return (
    <div className="w-full pt-2">
      <div className="text-sm mb-2 text-sidebar-content">Accepted Tokens</div>
      <div
        className={`flex flex-wrap gap-2 items-center justify-start ${className}`}
      >
        {tokens.map((t) => {
          return (
            <div
              key={t.address}
              className="px-2 sm:px-3 py-1 rounded-full bg-secondary-text/50 font-medium text-sidebar-content text-xs sm:text-sm flex items-center gap-2 min-w-[56px] justify-center"
            >
              {t.src && (
                <Image
                  src={t.src}
                  alt={`${t} icon`}
                  width={18}
                  height={18}
                  className="object-contain"
                />
              )}
              <span>{t.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
