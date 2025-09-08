"use client";
import CreateCampaign from "@/components/layout/CreateCampaign";
import Preview from "@/components/Preview";
import Stepper from "@/components/campaigns/Stepper";
// import ProfileModal from "@/components/profile/ProfileModal";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Page() {
  return (
    <div className="h-full  relative flex flex-col w-full ">
      <CreateCampaign />
      <div className="w-[95%] lg:w-[70%] pt-5 lg:pt-20 pb-8 mx-auto">
        <div>
          <Stepper step={3} />
          <div className="font-normal text-sm text-primary-text flex justify-between mb-4">
            <Link href={"/terms"}>
              <div className="cursor-pointer flex gap-0.5 items-center">
                <MdOutlineKeyboardArrowLeft />
                <p>Back</p>
              </div>
            </Link>
            <p />
          </div>
          {/* <ProfileModal /> */}
          <Preview />
        </div>
      </div>
    </div>
  );
}
