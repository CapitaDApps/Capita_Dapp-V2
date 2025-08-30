"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comments from "@/components/campaigns/Comments";
import ReportFlow from "@/components/campaigns/ReportFlow";
import Avatar from "@/components/ui/Avatar";
import TokensList from "@/components/ui/TokensList";
import PreviewImages from "@/components/campaigns/PreviewImages";
import { TbFlag3 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import CampaignFooter from "@/components/create-campaign/CampaignFooter";

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
  const router = useRouter();

  const coverImg = false;

  const isEditable = false;

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
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="text-sm text-slate-300 hover:underline"
          >
            &lt; Back
          </button>

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
          <div className="relative h-44 sm:h-56 md:h-64 bg-[#08121a] rounded-[16px] overflow-hidden">
            <Image
              src="/campaign/banner.png"
              alt="campaign banner"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />

            <div
              className={`absolute inset-0 ${
                coverImg ? "neon-wrapper" : ""
              } h-full bg-[#2E2E2E]/70 rounded-[16px]`}
            />
            {isEditable && (
              <div className="absolute inset-0 flex items-center justify-center"></div>
            )}
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
            Nigeria. Since launching, we&apos;ve reached important milestones,
            including developing a prototype and securing beta testers.
          </p>

          <div>
            <PreviewImages supportImages={supportImages} />
          </div>

          <div className="rounded-md  bg-transparent">
            <div className="flex items-center justify-between mb-2 text-sm ">
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

          <CampaignFooter
            campaignAddress={undefined}
            campaignName={"Campaign Name"}
            status={"ongoing"}
            ended={false}
            options={[
              { name: "CPT", src: "/tokens/cpt.svg" },
              { name: "ETH", src: "/tokens/eth.svg" },
              { name: "USDC", src: "/tokens/usdc.svg" },
            ]}
          />

          <Comments initial={sampleComments} />
        </div>
      </div>
    </div>
  );
}
