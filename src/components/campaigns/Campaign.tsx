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
import { useCampaign } from "@/services/api/hooks/campaign/useCampaign";
import { Comment, Reply } from "@/types/api";
import { truncateAddr } from "@/lib/utils";
import { compareAsc } from "date-fns";
import { TokenObjectType } from "@/services/contracts/tokensConfig";
import Load from "../ui/Load";
import SelectToken from "./SelectToken";

export default function Campaign({ campaignId }: { campaignId: string }) {
  const [reportOpen, setReportOpen] = useState(false);
  const router = useRouter();

  const { campaign, retrievingCampaign } = useCampaign(campaignId);
  console.log({ campaign });

  if (retrievingCampaign) return <Load />;

  const coverImg = !!campaign?.coverImage;

  const progressPct = 12;

  const sampleComments: Comment[] | undefined = campaign?.comments
    .sort((a, b) => compareAsc(b.createdAt, a.createdAt))
    .map((comment, commentIndex) => {
      const replies: Reply[] = comment.replies.map((reply, replyIndex) => ({
        text: reply.reply,
        _id: reply._id,
        name: reply.user.name || truncateAddr(reply.user.walletAddress),
        date: new Date(reply.createdAt).toLocaleDateString(),
        likes: reply.likes,
        id: replyIndex,
      }));
      const c: Comment = {
        id: commentIndex,
        _id: comment._id,
        name: comment.user.name || truncateAddr(comment.user.walletAddress),
        likes: comment.likes,
        text: comment.comment,
        date: new Date(comment.createdAt).toLocaleDateString(),
        replies,
      };

      return c;
    });

  const tokens: TokenObjectType[] =
    campaign?.tokens.map(
      (token) =>
        ({
          name: token.name,
          src: token.imagePath,
          decimals: token.decimals,
          address: token.address,
        } as TokenObjectType)
    ) || [];

  return (
    <div className="min-h-screen  text-white py-8 px-6 md:px-8 lg:px-16 mt-12">
      <div className="w-full mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="text-sm text-sidebar-content hover:underline"
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
          <div className="relative h-44 sm:h-56 md:h-64 bg-[#08121a]">
            <Image
              src={campaign?.coverImage || "/campaign/banner.png"}
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
            src={campaign?.image || "/campaign/c.png"}
            alt="avatar"
            size={80}
            className="border-2 border-[var(--form-blue-border)] bg-[#0f1720] z-10 w-13 h-13  md:w-20 md:h-20"
          />

          <div className="flex items-center gap-3">
            <h1 className="text-sm md:text-2xl text-sidebar-content font-semibold">
              {campaign?.title}
            </h1>
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
          <p className="text-sidebar-content  text-sm leading-relaxed whitespace-pre-line">
            {campaign?.description}
          </p>

          <div>
            <PreviewImages supportImages={campaign?.otherImages} />
          </div>

          {/* Progress */}
          <div className="rounded-md  bg-transparent">
            <div className="flex items-center justify-between mb-2 text-sm text-sidebar-content">
              <span>Progress</span>
              <span>
                Target Amount: {campaign?.targetAmount.toLocaleString()} usd
              </span>
            </div>
            <div className="w-full bg-disabled-text/30 rounded-full h-3 overflow-hidden">
              <div
                className="h-3 bg-primary transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(270.05deg, #003def 68.33%, #001f7a 114.25%)",
                  width: `${
                    (Number(campaign?.currentAmount) * 100) /
                    Number(campaign?.targetAmount)
                  }%`,
                }}
              />
            </div>
            <div className="mt-2 text-sm text-sidebar-content">
              Amount raised: {campaign?.currentAmount.toString().slice(0, 5)}{" "}
              usd
            </div>
          </div>

          <div>
            <TokensList tokens={tokens} />
          </div>

          {campaign && (
            <SelectToken
              tokens={tokens}
              campaignAddress={campaign.campaignAddress}
              campaignNetworkId={campaign.chain.networkId}
              campaignId={campaignId}
            />
          )}

          <Comments initial={sampleComments} campaignId={campaignId} />
        </div>
      </div>
    </div>
  );
}
