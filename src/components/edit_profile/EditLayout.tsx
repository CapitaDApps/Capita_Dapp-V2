"use client";
import { usePathname, useRouter } from "next/navigation";
import EditProfileFormField from "@/components/edit_profile/EditProfileFormField";
import CreateCampaign from "@/components/layout/CreateCampaign";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import UploadPhoto from "@/components/profile/UploadPhoto";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function EditLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const linkTo = pathname
    .split("/")
    .filter((x) => x !== "edit-profile")
    .join("/");
  const qcRef = React.useRef<QueryClient | null>(null);
  if (!qcRef.current) qcRef.current = new QueryClient();
  return (
    <div className="h-full  relative flex flex-col w-full pb-20 lg:pb-12 mt-12">
      <CreateCampaign />
      <div className="w-[95%] lg:w-[70%] pt-5 lg:pt-8 pb-5 mx-auto">
        <div className="font-normal text-sm text-primary-text flex justify-between mb-4">
          <div
            onClick={() => router.back()}
            className="cursor-pointer flex gap-0.5 items-center"
          >
            <MdOutlineKeyboardArrowLeft />
            <p>Back</p>
          </div>
          <Link
            href={linkTo === "" ? "/" : linkTo}
            className="underline cursor-pointer"
          >
            Skip
          </Link>
        </div>
        <QueryClientProvider client={qcRef.current}>
          <UploadPhoto />
          <EditProfileFormField />
        </QueryClientProvider>
      </div>
    </div>
  );
}
