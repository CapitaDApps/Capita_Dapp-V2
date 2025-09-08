"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import CreatedModal from "./CreatedModal";

import { useMultiStep } from "@/context/MultiFormContext";
import { contractEvents } from "@/services/contracts/constants";
import { useWriteCampaign } from "@/services/contracts/hooks/useWriteCampaign";
// import { useWatchFactoryEvents } from "@/lib/contracts/hooks/useWatchFactoryEvents";

// import {
//   CampaignDataTokenType,
//   ICampaignUploadData,
// } from "@/lib/types/campaign.type";

import { useQueryClient } from "@tanstack/react-query";

import { zeroAddress } from "viem";
// import { tokenNames } from "@/lib/constants";

import { MoonLoader } from "react-spinners";

import { useRouter } from "next/navigation";
import { usePrivyAccount } from "./hooks/usePrivyAccount";
import { useCache } from "@/services/api/hooks/useCache";

export default function Preview() {
  const [errorCreating, setErrorCreating] = useState("");

  const { address } = usePrivyAccount();
  const { createChainFundMe } = useWriteCampaign();
  const queryClient = useQueryClient();
  const router = useRouter();

  // const { cachedData, gettingCache } = useCache();

  // useEffect(() => {
  //   if (!gettingCache) {
  //     if (!cachedData) {
  //       router.push("/chainfundme/create");
  //     }
  //   }
  // }, [gettingCache, cachedData]);

  // useWatchFactoryEvents({
  //   eventName: contractEvents.FundingFactory.ChainFundMeCreated,
  //   cb: async () => {
  //     await queryClient.invalidateQueries();
  //   },
  // });

  // if (gettingCache) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <MoonLoader color="#fff" size={30} />
  //     </div>
  //   );
  // }

  const campaignData = {
    profileImage: "",
    coverImage: "",
    campaignName: "Random campaign",
    bio: "Random",
    tokens: [],
    supportingImages: [],
    startDate: "",
    endDate: "",
    fundTarget: 10000,
    userType: "",
    category: "",
    website: "",
  };

  const img = campaignData.profileImage
    ? { imgUrl: campaignData.profileImage }
    : null;
  const coverImg = campaignData.coverImage
    ? { imgUrl: campaignData.coverImage }
    : null;

  const formLink = "/create-campaign";
  // const previewLink = `/chainfundme/preview`;

  const connected = address ? true : false;

  return (
    <div className="space-y-5 w-full pb-24">
      <div className=" space-y-10 lg:space-y-4">
        <div className="space-y-4">
          <p className="text-xs text-white font-normal">Preview Campaign</p>
          <div className="relative aspect-square w-full h-[150px] lg:h-[200px] cursor-pointer">
            <Image
              src={"/campaign/banner.png"}
              fill
              className="rounded-[16px] object-center object-cover"
              alt="banner"
            />

            <div className="absolute bottom-[-18%] flex items-center justify-center w-full">
              <div className="relative aspect-square w-[80px] h-[80px]">
                <Image
                  src={"/campaign/c.png"}
                  fill
                  className="border-4 border-black w-[70px] lg:w-[80px] rounded-full"
                  alt="profile"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 ">
          <div />
          <div className="flex gap-2 ">
            {/* <Button className="bg-transparent border border-primary-text text-primary-text hover:bg-transparent rounded-sm text-xs">
              <Link href={previewLink}>Preview</Link>
            </Button> */}
            <Button
              className="bg-green-600/60 hover:bg-green-600 border-none  text-primary-text  text-xs text-white"
              style={{
                background:
                  "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
              }}
            >
              <Link href={formLink}>Edit Campaign</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-sidebar-content font-semibold text-base">
          {campaignData.campaignName}
        </h2>
        <p className="text-sidebar-content">Bio: {campaignData.bio}</p>
        <p className="text-sidebar-content">
          Target: {campaignData.fundTarget}
        </p>
        <p className="text-sidebar-content">Website: {campaignData.website}</p>
        <p className="text-sidebar-content">
          Start: {new Date(campaignData.startDate).toDateString()}
        </p>
        <p className="text-sidebar-content">
          End: {new Date(campaignData.endDate).toDateString()}
        </p>
        <p className="text-sidebar-content">
          Category: {campaignData.category}
        </p>
        <p className="text-sidebar-content">
          User Type: {campaignData.userType}
        </p>
        <div className="text-sidebar-content flex items-center gap-x-5 gap-y-3 flex-wrap">
          {campaignData.tokens.map((token: { name: string; src: string }) => (
            <div key={token.name} className="flex gap-2 items-center">
              <Image
                src={`${token.src}`}
                width={20}
                height={20}
                alt={`${token.name}`}
                className="rounded-full flex-1"
              />
              <p className="flex-1">{token.name}</p>
            </div>
          ))}
        </div>
        {campaignData.supportingImages.length > 0 && (
          <div>
            <p className="text-white">Supporting Images:</p>
            <div className="flex gap-2 flex-wrap">
              {campaignData.supportingImages.map(
                (imgUrl: string, idx: number) => (
                  <Image
                    key={idx}
                    src={imgUrl}
                    width={60}
                    height={60}
                    alt={`supporting-${idx}`}
                    className="rounded"
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
      <div className="space-y-2 ">
        <CreatedModal type="personal" errorCreating={errorCreating}>
          <Button
            style={{
              background:
                "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
            }}
            className="hover:bg-transparent text-white w-full"
            disabled={!connected}
          >
            {connected
              ? "Create Campaign"
              : "Connect wallet to Create Campaign"}
          </Button>
        </CreatedModal>
      </div>
    </div>
  );
}
