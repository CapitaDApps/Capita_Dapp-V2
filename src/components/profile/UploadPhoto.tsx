"use client";
import React from "react";
import { useMultiStep } from "@/context/MultiFormContext";

export default function UploadPhoto() {
  const { profileImg, profileCoverImg, setProfileImg, setProfileCoverImg } =
    useMultiStep();

  function handleAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfileImg(url);
  }

  function handleCover(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProfileCoverImg(url);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-2">
        <div className="w-full h-36 bg-[#0b0b0b] rounded-md flex items-center justify-center overflow-hidden">
          {profileCoverImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profileCoverImg}
              alt="cover preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-sm text-secondary-text">No cover selected</div>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleCover} />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-24 h-24 rounded-full bg-[#0b0b0b] overflow-hidden flex items-center justify-center">
          {profileImg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profileImg}
              alt="avatar preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-sm text-secondary-text">
              No avatar selected
            </div>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleAvatar} />
      </div>
    </div>
  );
}
