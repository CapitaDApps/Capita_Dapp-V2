"use client";

import CreateCampaign from "@/components/layout/CreateCampaign";
import Stepper from "@/components/campaigns/Stepper";
import TermsAndConditions from "@/components/Terms&Condition";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Page() {
  return (
    <div className="h-full  relative flex flex-col w-full ">
      <CreateCampaign />
      <div className="w-[95%] lg:w-[70%] pt-5 lg:pt-8 md:pb-20 pb-8 mx-auto">
        <div>
          <Stepper step={2} />
          <div className="font-normal text-sm text-primary-text flex justify-between mb-4 mt-8">
            <Link href={"/create-campaign"}>
              <div className="cursor-pointer flex gap-0.5 items-center">
                <MdOutlineKeyboardArrowLeft />
                <p>Back</p>
              </div>
            </Link>
            <p />
          </div>
          <TermsAndConditions />
        </div>
      </div>
    </div>
  );
}
