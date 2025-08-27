"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import VideoHeader from "@/components/hero/VideoHeader";
import Faq from "@/components/hero/Faq";
import Verified from "@/components/hero/Verified";

const ChainFundMe = () => {
  return (
    <div className="relative text-white overflow-hidden w-full min-h-screen">
      <VideoHeader />

      <div className="px-6 md:px-8 text-center">
        <p className="text-sm md:text-base text-gray-300 my-5 leading-relaxed tracking-wide">
          Create and manage funding campaigns onchain without limits,
          <br className="hidden md:block" />
          restrictions and setbacks - bringing hope onchain.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center text-center md:justify-center gap-3 px-6 md:px-0">
        <Link
          href="/campaigns/create-campaigns"
          className="w-50 md:w-auto  items-center justify-center bg-gradient-custom px-6  py-3  rounded-lg font-semibold text-xs  md:text-sm transition-colors"
        >
          Start a Chainfundme
        </Link>

        <button className="w-50 md:w-auto inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 px-6  py-3  rounded-lg font-semibold text-sm   transition-colors">
          Explore Campaigns
        </button>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-6 pt-12 md:pt-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap- mb-10">
          <div className="w-full relative aspect-auto size-[250px] md:size-[350px]  flex justify-center">
            <Image
              src={"/layout/list1.svg"}
              alt="List illustration"
              fill
              className="w-full object-center object-contain"
            />
          </div>

          <div className="w-full relative aspect-auto size-[250px] md:size-[350px]   flex justify-center">
            <Image
              src={"/layout/list2.svg"}
              alt="List illustration"
              fill
              className="w-full object-center object-contain"
            />
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={"/layout/list2.svg"}
              alt="List illustration"
              width={400}
              height={240}
              className="w-[369px] md:w-96 h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={"/layout/list2.svg"}
              alt="List illustration"
              width={400}
              height={240}
              className="w-[369px] md:w-96 h-auto"
            />
          </div>
        </div> */}

        <Faq />
        <Verified />
      </main>
    </div>
  );
};

export default ChainFundMe;
