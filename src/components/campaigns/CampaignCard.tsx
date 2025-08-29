"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Campaign = {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  avatar?: string;
  token?: string;
  tokenImage?: string;
  status?: string;
};

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  const router = useRouter();
  return (
    <article className="w-full h-auto md:h-[380px] lg:h-[400px] rounded-[16px] bg-[var(--Primary-Background,#121212)] border-2 border-transparent hover:border-[#6B4EFF] transition-colors duration-200 overflow-hidden flex flex-col">
      <div className="relative w-full h-40 md:h-[180px] lg:h-[220px]">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3 md:p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start gap-3">
          {campaign.avatar ? (
            <Image
              src={campaign.avatar}
              alt={campaign.title + " avatar"}
              width={32}
              height={32}
              className="rounded-full md:w-9 md:h-9"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-zinc-700 md:w-9 md:h-9" />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold truncate">
                {campaign.title}
              </h3>
              <Image
                src={"/layout/checkmark.svg"}
                alt="verified"
                width={20}
                height={20}
                className="block"
              />
            </div>
            <p className="text-xs md:text-sm text-secondary-text leading-relaxed tracking-wide">
              {campaign.excerpt}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-secondary-text">
            {campaign.tokenImage && (
              <Image
                src={campaign.tokenImage}
                alt={(campaign.token ?? "token") as string}
                width={14}
                height={14}
                className="rounded-full"
              />
            )}
            <span className="text-[12px] md:text-sm truncate">
              {campaign.token ?? ""}
            </span>
          </div>
          <Button
            className="w-[72px] md:w-[81px] h-9 md:h-[36px] px-[12px] md:px-[20px] py-[6px] md:py-[8px] text-sm bg-gradient-to-r from-[#003DEF] to-[#001F7A] rounded-md flex items-center justify-center"
            onClick={() => router.push(`/campaigns/${campaign.id}`)}
          >
            Fund
          </Button>
        </div>
      </div>
    </article>
  );
}
