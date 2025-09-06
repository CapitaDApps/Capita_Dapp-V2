"use client";

import { TbMoneybag } from "react-icons/tb";
import ProfileCampaignCard from "../campaigns/ProfileCampaignCard";
import mockCampaigns from "@/lib/mockCampaigns";
import React, { useState } from "react";
import Image from "next/image";
import Supporters from "../campaigns/Supporters";
import Socials from "../campaigns/Socials";

export default function ProfileTab() {
  const [active, setActive] = useState<string>("campaigns");

  const tabs = [{ id: "campaigns", label: "Campaigns", icon: <TbMoneybag /> }];

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
                    ? "text-[#111]"
                    : "text-[#111] hover:text-[#111]/80"
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
            <div className="bg-transparent border border-disabled-text/30 shadow-lg rounded-[24px] w-full max-w-[324px] md:h-[225px] h-auto opacity-100 pt-12 pb-12 px-6 text-center mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/layout/heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />
                <div className="text-sm text-sidebar-content">
                  Total Amount Raised
                </div>
              </div>
              <div className="mt-10 text-disabled-text text-3xl font-semibold">
                $500
              </div>
            </div>

            <div className="bg-transparent border border-disabled-text/30 shadow-lg rounded-[24px] w-full max-w-[324px] md:h-[225px] h-auto opacity-100 pt-12 pb-12 px-6 text-center mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/layout/heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />
                <div className="text-sm text-sidebar-content">
                  Total Campaigns Created
                </div>
              </div>
              <div className="mt-10 text-disabled-text text-3xl font-semibold">
                3
              </div>
            </div>

            <div className="bg-transparent border border-disabled-text/30 shadow-lg rounded-[24px] w-full max-w-[324px] md:h-[225px] h-auto opacity-100 pt-12 pb-12 px-6 text-center mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/layout/heart.svg"
                  alt="heart"
                  width={20}
                  height={20}
                />
                <div className="text-sm text-sidebar-content">Total Likes</div>
              </div>
              <div className="mt-10 text-disabled-text text-3xl font-semibold">
                100k
              </div>
            </div>
          </div>

          <div className="mt-6 w-full mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch justify-items-center sm:justify-items-stretch">
              {mockCampaigns.map((c) => (
                <div key={c.id} className="w-full max-w-[340px] mx-auto">
                  <ProfileCampaignCard campaign={c} />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center justify-between px-8 mt-12 mb-6">
            <div className="border border-disabled-text/20 w-[400px] rounded-xl text-sm shadow-md text-sidebar-content p-6">
              <Supporters />
            </div>
            <div>
              <Socials />
            </div>
          </div>
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
