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
      <div className="relative h-44 sm:h-56 md:h-64 bg-[#08121a]">
        <Image
          src="/campaign/banner.png"
          alt="campaign banner"
          fill
          className="object-cover object-center"
        />
        <div
          className={`absolute w-full ${
            coverImg && "neon-wrapper"
          } h-full bg-[#2E2E2E]/70  rounded-[16px] flex items-center justify-center gap-2`}
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

        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 z-10">
          <Avatar
            src="/campaign/c.png"
            alt="avatar"
            size={80}
            className="border-2 border-[var(--form-blue-border)] bg-[#0f1720] w-13 h-13 md:w-20 md:h-20"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div />
        <div className="flex gap-2 mt-1.5 ">
          <Link href="/profile/edit-profile">
            <button className="rounded-[6px] bg-gray-700 border-none  text-primary-text hover:bg-gray-700/80 !py-1.5 px-2  text-[10px]">
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
