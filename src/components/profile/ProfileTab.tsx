"use client";

import { TbMoneybag } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import CampaignList from "@/components/campaigns/CampaignList";
import React, { useState } from "react";
import Image from "next/image";

export default function ProfileTab() {
  const [active, setActive] = useState<string>("campaigns");

  const tabs = [
    { id: "campaigns", label: "Campaigns", icon: <TbMoneybag /> },
    { id: "trust", label: "Trust Locks", icon: <AiOutlineUser /> },
    { id: "stakes", label: "Stakes", icon: <FiLock /> },
    { id: "lends", label: "Lends", icon: <GiReceiveMoney /> },
  ];

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center my-4 pb-4 w-full">
          <div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 px-4"
            role="tablist"
            aria-label="Profile tabs"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                tabIndex={active === t.id ? 0 : -1}
                onClick={() => setActive(t.id)}
                className={`flex flex-col items-center justify-center text-sm focus:outline-none px-3 py-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20 ${
                  active === t.id
                    ? "text-white"
                    : "text-secondary-text hover:text-white/80"
                }`}
              >
                <div className="flex gap-3">
                  <span className={`text-sm`}>{t.icon}</span>
                  <span className="text-sm ">{t.label}</span>
                </div>

                <span
                  className={`block h-0.5 w-full mt-2 rounded-full transition-all ${
                    active === t.id ? "bg-white" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {active === "campaigns" ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[43px] mb-6 justify-center">
            <div className="bg-transparent border border-[#383838] rounded-[24px] w-full max-w-[324px] md:h-[225px] h-auto opacity-100 pt-12 pb-12 px-6 text-center mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/layout/heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />
                <div className="text-sm text-secondary-text">
                  Total Amount Raised
                </div>
              </div>
              <div className="mt-4 text-white text-3xl font-semibold">$500</div>
            </div>

            <div className="bg-transparent border border-[#383838] rounded-[24px] w-full max-w-[324px] md:h-[225px] h-auto opacity-100 pt-12 pb-12 px-6 text-center mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/layout/heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />
                <div className="text-sm text-secondary-text">
                  Total Campaigns Created
                </div>
              </div>
              <div className="mt-4 text-white text-3xl font-semibold">3</div>
            </div>

            <div className="bg-transparent border border-[#383838] rounded-[24px] w-full max-w-[324px] md:h-[225px] h-auto opacity-100 pt-12 pb-12 px-6 text-center mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/layout/heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />
                <div className="text-sm text-secondary-text">Total Likes</div>
              </div>
              <div className="mt-4 text-white text-3xl font-semibold">100k</div>
            </div>
          </div>

          <CampaignList />
        </>
      ) : (
        <div className="w-full py-20 flex items-center justify-center">
          <div className="text-center text-secondary-text">
            <div className="text-white font-semibold mb-2">
              {active === "trust"
                ? "Trust Locks"
                : active === "stakes"
                ? "Stakes"
                : "Lends"}
            </div>
            <div className="text-sm">This section is coming soon.</div>
          </div>
        </div>
      )}
    </>
  );
}
