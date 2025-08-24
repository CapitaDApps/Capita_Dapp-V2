"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Comments from "@/components/campaigns/Comments";

const sampleComments = [
  {
    id: 1,
    name: "User Name",
    date: "June 22",
    text: "This Campaign will go a Long way in ending the famine in Gaza. Those Little kids deserve to be happy. No amount is too small",
    likes: 45,
    replies: 3,
  },
  {
    id: 2,
    name: "Another User",
    date: "June 20",
    text: "Amazing project — happy to support.",
    likes: 12,
    replies: 0,
  },
];

export default function Page() {
  const [selectedToken, setSelectedToken] = useState("CPT");
  const [amount, setAmount] = useState("");
  const [reportOpen, setReportOpen] = useState(false);
  const [reportText, setReportText] = useState("");

  const progressPct = 12; // example percent

  return (
    <div className="min-h-screen bg-[#071019] text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-[980px] mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <a className="text-sm text-slate-300 hover:underline">&lt; Back</a>

          <button
            onClick={() => setReportOpen(true)}
            aria-label="Open actions"
            className="p-1 rounded-md hover:bg-white/5"
          >
            <HiOutlineDotsHorizontal />
          </button>
        </div>

        {/* Report modal */}
        {reportOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setReportOpen(false)}
            />

            <div
              role="dialog"
              aria-modal="true"
              className="relative z-10 w-full max-w-md rounded-lg bg-[#071018] border border-[var(--form-blue-border)] p-4 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Report Campaign</h3>
                <button
                  onClick={() => setReportOpen(false)}
                  aria-label="Close report dialog"
                  className="text-slate-400"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 mb-2">
                Please tell us why you're reporting this campaign. Our team will
                review the report.
              </p>

              <textarea
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
                placeholder="Describe the issue (spam, fraud, inappropriate content, etc.)"
                className="w-full min-h-[120px] rounded-md bg-[#0b1116] border border-[#20303a] p-3 text-white resize-vertical"
              />

              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => {
                    setReportText("");
                    setReportOpen(false);
                  }}
                  className="px-3 py-2 rounded-md bg-[#22334d]"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    console.log("Report submitted:", reportText);
                    setReportText("");
                    setReportOpen(false);
                  }}
                  className="px-3 py-2 rounded-md bg-gradient-to-r from-[#003DEF] to-[#001F7A]"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cover */}
        <div className="relative rounded-[16px] overflow-hidden shadow-md">
          <div className="relative h-44 sm:h-56 md:h-64 bg-[#08121a]">
            <Image
              src="/campaign/banner.png"
              alt="campaign banner"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="text-sm text-slate-400 mt-1 flex items-center gap-2">
          <Image
            src="/layout/dot.svg"
            alt="Logo"
            width={20}
            height={20}
            className="w-4 h-4  object-contain"
          />
          Live campaign • 12:12:12:00
        </div>

        <div className="flex items-center gap-4 mt-5">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[var(--form-blue-border)] bg-[#0f1720]">
            <Image
              src="/campaign/c.png"
              alt="avatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold">Campaign Name</h1>
              <Image
                src={"/layout/checkmark.svg"}
                alt="checkmark"
                width={35}
                height={35}
              />
            </div>
          </div>
        </div>

        <div className="h-14" />

        <div className="space-y-6">
          {/* Description */}
          <div className="rounded-md p-4 bg-transparent">
            <p className="text-slate-300 leading-relaxed">
              Our startup was born out of a passion for solving [state the
              specific pain point, e.g., "the challenges of renting affordable
              housing in Nigeria"]. Since launching, we've [mention any
              milestones, e.g., "developed a prototype", "secured beta
              testers"].
            </p>
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

          {/* Network and tokens */}
          <div className="flex flex-col  gap-4">
            <div className="flex-1">
              <div className="text-sm text-slate-400 mb-2">Network</div>
              <div className="inline-flex items-center gap-2 text-sm text-yellow-400">
                <Image
                  src={"/tokens/binance.svg"}
                  alt="checkmark"
                  width={35}
                  height={35}
                />
                BNB
              </div>
            </div>

            <div>
              <div className="text-sm text-slate-400 mb-2">Tokens</div>
              <div className="flex gap-2 items-center">
                <div className="px-3 py-1 rounded-full bg-[#0f1720] text-sm">
                  CPT
                </div>
                <div className="px-3 py-1 rounded-full bg-[#0f1720] text-sm">
                  Eth(Base)
                </div>
                <div className="px-3 py-1 rounded-full bg-[#0f1720] text-sm">
                  USDC(Base)
                </div>
              </div>
            </div>
          </div>

          {/* Funding form */}
          <div className="rounded-md p-4 bg-transparent border-t border-[#142129]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="md:col-span-1">
                <label className="text-sm text-slate-400">Select Token</label>
                <div className="mt-2">
                  <select
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                    className="w-full rounded-md bg-[#0f1720] border border-[#20303a] px-3 py-2 text-white"
                  >
                    <option value="CPT">CPT</option>
                    <option value="ETH">ETH</option>
                    <option value="USDC">USDC</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-1">
                <label className="text-sm text-slate-400">Enter Amount</label>
                <div className="mt-2">
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="$0.00"
                    className="w-full rounded-md bg-[#0f1720] border border-[#20303a] px-3 py-2 text-white"
                  />
                </div>
                <div className="text-xs text-slate-500 mt-2">0.000ETH</div>
              </div>

              <div className="md:col-span-1 flex items-center">
                <button className="w-full bg-gradient-to-r from-[#003DEF] to-[#001F7A] px-4 py-3 rounded-md text-white">
                  Fund Campaign
                </button>
              </div>
            </div>
          </div>

          {/* Comments (component) */}
          <Comments initial={sampleComments} />
        </div>
      </div>
    </div>
  );
}
