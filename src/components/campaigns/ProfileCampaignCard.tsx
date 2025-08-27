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

export default function ProfileCampaignCard({
  campaign,
}: {
  campaign: Campaign;
}) {
  const router = useRouter();
  return (
    <article className="w-full h-auto md:h-[380px] lg:h-[400px] rounded-[16px] bg-[var(--Primary-Background,#121212)] border-2 border-transparent hover:border-[#6B4EFF] transition-colors duration-200 overflow-hidden flex flex-col">
      <div className="relative w-full h-44 md:h-[180px] lg:h-[220px]">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-3 md:p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start gap-3">
          {campaign.avatar ? (
            <Image
              src={campaign.avatar}
              alt={campaign.title + " avatar"}
              width={36}
              height={36}
              className="rounded-full w-8 h-8 md:w-9 md:h-9"
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
                className="hidden md:block"
              />
            </div>
            <p className="text-xs md:text-sm text-secondary-text leading-tight line-clamp-2 lg:line-clamp-3">
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
            className="w-auto md:w-[81px] h-9 md:h-[36px] px-3 md:px-[20px] py-[6px] md:py-[8px] text-sm bg-[var(--Primary,#1038A2)] rounded-md flex items-center justify-center"
            onClick={() => router.push(`/profile/campaigns/${campaign.id}`)}
          >
            View
          </Button>
        </div>
      </div>
    </article>
  );
}
