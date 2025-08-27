"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comments from "@/components/campaigns/Comments";
import ReportFlow from "@/components/campaigns/ReportFlow";
import Avatar from "@/components/ui/Avatar";
import TokensList from "@/components/ui/TokensList";
import PreviewImages from "@/components/campaigns/PreviewImages";
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
  const [selectedToken, setSelectedToken] = useState("CPT");
  const [amount, setAmount] = useState("");
  const [reportOpen, setReportOpen] = useState(false);

  const coverImg = false;

  const progressPct = 12;

  //dummy supporting images for PreviewImages comp
  const supportImages = [
    "/campaign/c.png",
    "/campaign/banner.png",
    "/campaign/c.png",
    "/campaign/banner.png",
  ];

  return (
    <div className="min-h-screen  text-white py-8 px-4 md:px-8 lg:px-16 mt-12">
      <div className="w-full mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <a className="text-sm text-slate-300 hover:underline">&lt; Back</a>

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

        <div className="text-sm text-slate-400 mt-3 flex items-center gap-2">
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
            <h1 className="text-sm md:text-2xl font-semibold">Campaign Name</h1>
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
          <p className="text-slate-300  text-sm leading-relaxed whitespace-pre-line">
            Our startup was born out of a passion for solving the specific pain
            point — for example, the challenges of renting affordable housing in
            Nigeria. Since launching, we've reached important milestones,
            including developing a prototype and securing beta testers.
          </p>

          <div>
            <PreviewImages supportImages={supportImages} />
          </div>

          {/* Progress */}
          <div className="rounded-md p-4 bg-transparent">
            <div className="flex items-center justify-between mb-2 text-sm text-slate-400">
              <span>Progress</span>
              <span>Target Amount: 20eth</span>
            </div>
            <div className="w-full bg-[#0c1720] rounded-full h-3 overflow-hidden">
              <div
                className="h-3 bg-gradient-to-r from-[#0048ff] to-[#0026b3]"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Amount raised: 1.05eth
            </div>
          </div>

          <div>
            <TokensList />
          </div>

          <div className="rounded-md p-4 bg-transparent border-t border-[#142129]">
            <div className="flex  flex-wrap place-items-end gap-3 md:gap-6 mb-4">
              <div className="w-[100%] py-2">
                <label className="text-sm text-slate-400 block mb-2">
                  Select Token
                </label>
                <div className="relative">
                  <select
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                    className="w-full rounded-md bg-[#0f1720] border border-[#20303a] px-3 py-2 h-12 text-white text-sm appearance-none pr-8"
                  >
                    <option value="CPT">CPT</option>
                    <option value="ETH">ETH</option>
                    <option value="USDC">USDC</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="w-[100%] py-2">
                <label className="text-sm text-slate-400 block mb-2">
                  Enter Amount
                </label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="$0.00"
                  className="w-full rounded-md bg-[#0f1720] border border-[#20303a] px-3 py-2 h-12 text-white text-sm"
                />
                <div className="text-xs text-slate-500 mt-2">0.000ETH</div>
              </div>

              <div className="w-[100%] py-2">
                <button className="w-[100%] bg-gradient-to-r from-[#003DEF] to-[#001F7A] px-4 py-3 rounded-md text-white last:col-span-2 md:last:col-span-1">
                  Fund Campaign
                </button>
              </div>
            </div>
          </div>

          <Comments initial={sampleComments} />
        </div>
      </div>
    </div>
  );
}
