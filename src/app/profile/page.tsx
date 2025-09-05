"use client";

import React from "react";
import ProfileBio from "@/components/profile/ProfileBio";
import ProfileTab from "@/components/profile/ProfileTab";
import Link from "next/link";
import Image from "next/image";
import Avatar from "@/components/ui/Avatar";

export default function Page() {
  const coverImg = false;
  return (
    <div className="lg:w-[90%] w-[98%] mx-auto mt-20">
      <div className="relative h-44 sm:h-56 md:h-64 shadow-lg bg-[#fff] ">
        <Image
          src="/campaign/white.jpg"
          alt="campaign banner"
          fill
          className="object-cover object-center rounded-md"
        />
        <div
          className={`absolute w-full ${
            coverImg && "neon-wrapper"
          } h-full  rounded-[16px] flex items-center justify-center gap-2`}
        >
          <label className="inline-flex items-center gap-2 cursor-pointer bg-black/20 px-3 py-2 rounded-md">
            <Image
              src="/layout/camera.png"
              alt="camera"
              width={30}
              height={18}
            />
          </label>
        </div>

        <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 z-10">
          <Avatar
            src="/layout/Frame.png"
            alt="avatar"
            size={80}
            className="border-none bg-[#0f1720] w-16 h-16 md:w-40 md:h-40 shadow-lg"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div />
        <div className="flex gap-2 mt-1.5 pr-2">
          <Link href="/profile/edit">
            <button className="rounded-[6px] bg-primary border-none text-background hover:bg-[#00b875]/80 !py-1.5 px-2  text-[10px]">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-12">
        <ProfileBio />
        <React.Suspense
          fallback={
            <div className="w-full py-8 text-center text-secondary-text">
              Loading profile...
            </div>
          }
        >
          <ProfileTab />
        </React.Suspense>
      </div>
    </div>
  );
}
