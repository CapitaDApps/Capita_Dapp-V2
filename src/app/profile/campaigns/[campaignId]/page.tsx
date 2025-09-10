"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comments from "@/components/campaigns/Comments";
import ReportFlow from "@/components/campaigns/ReportFlow";
import Avatar from "@/components/ui/Avatar";
import TokensList from "@/components/ui/TokensList";
// import PreviewImages from "@/components/campaigns/PreviewImages";
import { TbFlag3 } from "react-icons/tb";

const sampleComments = [
  {
    id: 1,
    name: "User Name",
    date: "June 22",
    text: "This Campaign will go a Long way in ending the famine in Gaza. Those Little kids deserve to be happy. No amount is too small",
    likes: 45,
    replies: [],
  },
  {
    id: 2,
    name: "Another User",
    date: "June 20",
    text: "Amazing project — happy to support.",
    likes: 12,
    replies: [],
  },
];

export default function Page() {
  const [reportOpen, setReportOpen] = useState(false);

  const coverImg = false;

  const progressPct = 12;

  return (
    <div className="min-h-screen  text-white py-8 px-4 md:px-8 lg:px-16 mt-12">
      <div className="w-full mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <a
            className="text-sm text-sidebar-content hover:underline cursor-pointer"
            onClick={() => window.history.back()}
          >
            &lt; Back
          </a>

          <button
            onClick={() => setReportOpen(true)}
            aria-label="Open actions"
            className="p-1 rounded-md hover:bg-white/5"
          >
            <TbFlag3 />
          </button>
        </div>

        <ReportFlow open={reportOpen} onClose={() => setReportOpen(false)} />

        <div className="relative rounded-[16px] overflow-hidden shadow-md">
          <div className="relative h-44 sm:h-56 md:h-64 bg-[#08121a]">
            <Image
              src="/campaign/banner.png"
              alt="campaign banner"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className={`absolute w-full ${
                coverImg && "neon-wrapper"
              } h-full bg-[#2E2E2E]/70  rounded-[16px] flex items-center justify-center gap-2`}
            >
              <label className="inline-flex items-center gap-2 cursor-pointer bg-black/20 px-3 py-2 rounded-md">
                <Image
                  src="/layout/camera.png"
                  alt="camera"
                  width={30}
                  height={18}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="text-sm text-disabled-text mt-3 flex items-center gap-2">
          <Image
            src="/layout/dot.svg"
            alt="Logo"
            width={20}
            height={20}
            className="w-4 h-4 object-contain"
          />
          Live campaign • 12:12:12:00
        </div>

        <div className="my-5 flex items-center gap-4">
          <Avatar
            src="/campaign/c.png"
            alt="avatar"
            size={80}
            className="border-2 border-[var(--form-blue-border)] bg-[#0f1720] z-10 w-13 h-13  md:w-20 md:h-20"
          />

          <div className="flex items-center gap-3">
            <div className="flex">
              <h1 className="text-sm md:text-2xl font-semibold text-sidebar-content">
                Campaign Name
              </h1>

              <div></div>
            </div>
            <Image
              src="/layout/checkmark.svg"
              alt="checkmark"
              width={35}
              height={35}
              className="w-5 h-5  md:w-8 md:h-8"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-disabled-text  text-sm leading-relaxed whitespace-pre-line">
            Our startup was born out of a passion for solving the specific pain
            point — for example, the challenges of renting affordable housing in
            Nigeria. Since launching, we&apos;ve reached important milestones,
            including developing a prototype and securing beta testers.
          </p>

          {/* Progress */}
          <div className="rounded-md  bg-transparent pt-2">
            <div className="flex items-center justify-between mb-2 text-sm text-sidebar-content">
              <span>Progress</span>
              <span>Target Amount: 20eth</span>
            </div>
            <div className="w-full bg-secondary-text rounded-full h-3 overflow-hidden">
              <div
                className="h-3 bg-primary rounded-full transition-all duration-500 ease-in-out"
                style={{
                  background:
                    "linear-gradient(270.05deg, #003def 68.33%, #001f7a 114.25%)",
                  width: `${progressPct}%`,
                }}
              />
            </div>
            <div className="mt-2 text-sm text-sidebar-content">
              Amount raised: 1.05eth
            </div>
          </div>

          <div>{/* <TokensList /> */}</div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center  gap-3">
            <button
              type="button"
              aria-label="Withdraw funds"
              style={{
                background:
                  "linear-gradient(270.05deg, #003def 68.33%, #001f7a 114.25%)",
              }}
              className="w-full sm:w-auto bg-primary hover:bg-[#003def]/80 cursor-pointer text-background rounded-md px-6 py-2 text-sm md:text-lg font-medium shadow-sm"
              onClick={() => {}}
            >
              Withdraw
            </button>

            <button
              type="button"
              aria-label="End campaign"
              className="w-full sm:w-auto border border-[#003def] text-[#003def] cursor-pointer hover:text-[#003def]/80 rounded-md px-6 py-2 text-sm md:text-lg font-medium hover:bg-white/5"
              onClick={() => {}}
            >
              End Campaign
            </button>
          </div>

          {/* <Comments initial={sampleComments} /> */}
        </div>
      </div>
    </div>
  );
}
