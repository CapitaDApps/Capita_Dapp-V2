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
    <article
      style={{
        boxShadow:
          "0px 110px 44px rgba(179, 201, 255, 0.02), 0px 62px 37px rgba(179, 201, 255, 0.08), 0px 28px 28px rgba(179, 201, 255, 0.13), 0px 7px 15px rgba(179, 201, 255, 0.15)",
      }}
      className="w-full mx-auto max-w-[320px] h-[300px] rounded-[16px] bg-sidebar border-2 border-primary/20 hover:border-primary transition-colors duration-500 overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-[40%]">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-3 md:p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-center gap-3">
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
            <div className="flex items-center gap-2.5">
              <h3 className="text-sm text-surface font-semibold truncate">
                {campaign.title}
              </h3>
              <Image
                src={"/layout/checkmarklight.png"}
                alt="verified"
                width={16}
                height={16}
                className="block"
              />
            </div>
          </div>
        </div>
        <p className="text-xs text-disabled-text">
          {campaign.excerpt.split(" ").length > 20
            ? campaign.excerpt.split(" ").slice(0, 20).join(" ") + "..."
            : campaign.excerpt}
        </p>

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
            <span className="text-[12px] text-surface md:text-sm truncate">
              {campaign.token ?? ""}
            </span>
          </div>
          <Button
            className="w-[72px] md:w-[81px] h-9 md:h-[36px] px-[12px] md:px-[20px] py-[6px] md:py-[8px] text-sm bg-primary text-white rounded-md flex items-center justify-center"
            onClick={() => router.push(`/campaigns/${campaign.id}`)}
          >
            Fund
          </Button>
        </div>
      </div>
    </article>
  );
}
