"use client";

import React from "react";
import Image from "next/image";

type Props = {
  tokens?: string[];
  className?: string;
  showIcons?: boolean;
};

const DEFAULT_TOKENS = ["BNB", "Eth(Base)", "USDC(Base)"];

function getTokenIconPath(token: string) {
  const s = token
    .toLowerCase()
    .replace(/\(.*\)/, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();

  const map: Record<string, string> = {
    eth: "/tokens/eth.svg",
    usdc: "/tokens/usdc.svg",
    bnb: "/tokens/binance.svg",
  };

  return map[s] ?? `/tokens/${s}.svg`;
}

export default function TokensList({
  tokens = DEFAULT_TOKENS,
  className = "",
  showIcons = true,
}: Props) {
  return (
    <div>
      <div className="text-sm mb-2">Accepted Tokens</div>
      <div
        className={`flex flex-wrap gap-2 items-center justify-start ${className}`}
      >
        {tokens.map((t) => {
          const icon = showIcons ? getTokenIconPath(t) : null;
          return (
            <div
              key={t}
              className="px-2 sm:px-3 py-1 rounded-full bg-[#0f1720] text-xs sm:text-sm flex items-center gap-2 min-w-[56px] justify-center"
            >
              {icon && (
                <Image
                  src={icon}
                  alt={`${t} icon`}
                  width={18}
                  height={18}
                  className="object-contain"
                />
              )}
              <span>{t}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
