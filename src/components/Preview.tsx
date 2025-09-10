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
  const [isCreating, setIsCreating] = useState(false);
  const { address } = usePrivyAccount();
  const { createChainFundMe } = useWriteCampaign();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { cachedData, gettingCache } = useCache();

  useEffect(() => {
    if (!gettingCache) {
      if (!cachedData) {
        router.push("/create-campaign");
      }
    }
  }, [gettingCache, cachedData]);

  // useWatchFactoryEvents({
  //   eventName: contractEvents.FundingFactory.ChainFundMeCreated,
  //   cb: async () => {
  //     await queryClient.invalidateQueries();
  //   },
  // });

  if (gettingCache) {
    return (
      <div className="flex items-center justify-center">
        <MoonLoader color="#fff" size={30} />
      </div>
    );
  }

  const campaignData = {
    profileImage: cachedData?.image,
    coverImage: cachedData?.coverImage,
    campaignName: cachedData?.title,
    bio: cachedData?.category,
    tokens: cachedData?.tokens,
    supportingImages: [],
    startDate: cachedData?.startDate,
    endDate: cachedData?.endDate,
    fundTarget: cachedData?.targetAmount,
    userType: cachedData?.creator,
    category: cachedData?.category,
    website: "",
  };

  const formLink = "/create-campaign";
  // const previewLink = `/chainfundme/preview`;

  const connected = address ? true : false;
  console.log({ cachedData });

  const handleWriteCampaign = async () => {
    const uri = localStorage.getItem("campaignId");
    if (!cachedData) return;
    if (uri) {
      setIsCreating(true);
      setErrorCreating("");
      const startTime = Math.ceil(
        new Date(cachedData.startDate).getTime() / 1000
      );
      const endTime = Math.ceil(new Date(cachedData.endDate).getTime() / 1000);
      const otherTokens = cachedData.tokens
        .map((token) => token.address)
        .filter((token) => token !== zeroAddress);
      console.log({ otherTokens });
      createChainFundMe(
        { uri: JSON.parse(uri), startTime, endTime, otherTokens },
        (err) => {
          if (err) {
            setErrorCreating(err);
          } else {
            setIsCreating(false);
          }
        }
      );
    }
  };

  return (
    <div className="space-y-5 w-full pb-24">
      <div className=" space-y-10 lg:space-y-4">
        <div className="space-y-4">
          <p className="text-xs text-white font-normal">Preview Campaign</p>
          <div className="relative aspect-square w-full h-[150px] lg:h-[200px] cursor-pointer">
            <Image
              src={campaignData?.coverImage || "/campaign/banner.png"}
              fill
              className="rounded-[16px] object-center object-cover"
              alt="banner"
            />

            <div className="absolute bottom-[-18%] flex items-center justify-center w-full">
              <div className="relative aspect-square w-[80px] h-[80px]">
                <Image
                  src={campaignData?.profileImage || "/campaign/c.png"}
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
        {campaignData.website && (
          <p className="text-sidebar-content">
            Website: {campaignData.website}
          </p>
        )}
        <p className="text-sidebar-content">
          Start: {new Date(campaignData.startDate || "").toDateString()}
        </p>
        <p className="text-sidebar-content">
          End: {new Date(campaignData.endDate || "").toDateString()}
        </p>
        <p className="text-sidebar-content">
          Category: {campaignData.category}
        </p>
        <p className="text-sidebar-content">
          User Type: {campaignData.userType}
        </p>
        <div className="text-sidebar-content flex items-center gap-x-5 gap-y-3 flex-wrap">
          {campaignData?.tokens?.map((token) => (
            <div key={token.name} className="flex gap-2 items-center">
              <Image
                src={`${token.imagePath}`}
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
        <CreatedModal
          type="personal"
          errorCreating={errorCreating}
          isCreating={isCreating}
        >
          <Button
            style={{
              background:
                "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
            }}
            className="hover:bg-transparent text-white w-full cursor-pointer"
            disabled={!connected}
            onClick={handleWriteCampaign}
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
