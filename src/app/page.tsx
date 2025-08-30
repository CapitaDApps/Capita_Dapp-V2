"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VideoHeader from "@/components/hero/VideoHeader";
import Faq from "@/components/hero/Faq";
import Verified from "@/components/hero/Verified";

const ChainFundMe = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved) {
      setIsDark(saved === "dark");
    } else {
      setIsDark(document.documentElement.classList.contains("dark"));
    }

    const mo = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    function onStorage(e: StorageEvent) {
      if (e.key === "theme") setIsDark(e.newValue === "dark");
    }
    window.addEventListener("storage", onStorage);

    return () => {
      mo.disconnect();
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <div className="relative text-white overflow-hidden w-full min-h-screen">
      {isDark ? (
        <VideoHeader />
      ) : (
        <div className="relative w-full h-[260px] md:h-[320px] lg:h-[380px] overflow-hidden">
          <Image
            src="/layout/lightmode.png"
            alt="Light header background"
            fill
            className="object-cover"
          />

          <div className="relative bg-custo h-full">
            <div className="flex flex-col lg:flex-row items-center z-20 absolute bottom-[15px] md:bottom-[10px] left-0 right-0 justify-center gap-2 md:gap-3">
              <h1 className="text-3xl md:text-[40px] lg:text-[56px] font-semibold  leading-tight">
                Welcome to{" "}
              </h1>
              <div className="relative aspect-auto w-[250px] h-[40px] md:h-[50px] md:w-[320px] lg:w-[380px] lg:h-[100px]">
                <Image src="/layout/wordmark.svg" alt="word" fill />
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/10 z-[1]" />
        </div>
      )}

      <div className="px-6 md:px-8 text-center">
        <p className="text-sm md:text-base my-5 leading-relaxed tracking-wide">
          Create and manage funding campaigns onchain without limits,
          <br className="hidden md:block" />
          restrictions and setbacks - bringing hope onchain.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center text-center md:justify-center gap-3 px-6 md:px-0">
        <Link
          href="/campaigns/create-campaigns"
          className="w-50 md:w-auto dark:text-white items-center text-center justify-center bg-gradient-custom px-6  py-3  rounded-lg font-semibold text-xs  md:text-sm transition-colors"
        >
          Start a Chainfundme
        </Link>

        <button className="w-50 md:w-auto inline-flex text-center items-center justify-center border border-gray-600 hover:border-gray-400 px-6  py-3  rounded-lg font-semibold text-xs md:text-sm  transition-colors">
          Explore Campaigns
        </button>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-6 pt-12 md:pt-12">
        <div className="flex flex-col md:flex-row items_center justify-center gap- mb-10">
          <div className="w-full relative aspect-auto size-[250px] md:size-[350px]  flex justify-center">
            <Image
              src={isDark ? "/layout/list1.svg" : "/layout/lightlist1.svg"}
              alt="List illustration"
              fill
              className="w-full object-center object-contain"
            />
          </div>

          <div className="w-full relative aspect-auto size-[250px] md:size-[350px]   flex justify-center">
            <Image
              src={isDark ? "/layout/list2.svg" : "/layout/lightlist2.svg"}
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
