"use client";
import Image from "next/image";
import { Button } from "../ui/button";

export default function CampaignCard({ campaign }: { campaign: any }) {
  return (
    <article className="w-[324px] h-[400px] rounded-[16px] bg-[var(--Primary-Background,#121212)] border-2 border-transparent hover:border-[#6B4EFF] transition-colors duration-200 overflow-hidden flex flex-col">
      <div className="relative h-[220px] w-full">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-[3px] flex-1">
        <div className="flex items-center gap-3">
          <Image
            src={campaign.avatar}
            alt="avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold">{campaign.title}</h3>
              <Image
                src={"/layout/checkmark.svg"}
                alt="checkmark"
                width={35}
                height={35}
              />
            </div>
            <p className="text-xs text-secondary-text line-clamp-2">
              {campaign.excerpt}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-secondary-text">
            {campaign.tokenImage && (
              <Image
                src={campaign.tokenImage}
                alt={campaign.token}
                width={16}
                height={16}
                className="rounded-full"
              />
            )}
            <span className="text-[12px]">{campaign.token}</span>
          </div>
          <Button className="w-[81px] h-[36px] px-[20px] py-[8px] text-sm bg-[var(--Primary,#1038A2)] border border-[var(--Secondary-Text,#B3B3B3)] rounded-md flex items-center justify-center">
            Fund
          </Button>
        </div>
      </div>
    </article>
  );
}
