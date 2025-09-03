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
        <p className="text-sm md:text-base text-contrast-borders my-5 leading-relaxed tracking-wide">
          Create and manage funding campaigns onchain without limits,
          <br className="hidden md:block" />
          restrictions and setbacks - bringing hope onchain.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center text-center md:justify-center gap-3 px-6 md:px-0">
        <Link
          href="/campaigns/create-campaigns"
          className="w-50 md:w-auto  items-center text-center justify-center bg-primary px-6  py-3  rounded-lg font-semibold text-xs  md:text-sm transition-colors"
        >
          Start a Chainfundme
        </Link>

        <button className="w-50 md:w-auto inline-flex text-primary text-center items-center justify-center border border-primary hover:border-primary/80 px-6  py-3  rounded-lg font-semibold text-xs md:text-sm  transition-colors">
          Explore Campaigns
        </button>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-6 pt-12 md:pt-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap- mb-10">
          <div className="w-full relative aspect-auto size-[250px] md:size-[350px]  flex justify-center">
            <Image
              src={"/layout/list3.svg"}
              alt="List illustration"
              fill
              className="w-full object-center object-contain"
            />
          </div>

          <div className="w-full relative aspect-auto size-[250px] md:size-[350px]   flex justify-center">
            <Image
              src={"/layout/list3.svg"}
              alt="List illustration"
              fill
              className="w-full object-center object-contain"
            />
          </div>
        </div>

        <Faq />
        <Verified />
      </main>
    </div>
  );
};

export default ChainFundMe;
