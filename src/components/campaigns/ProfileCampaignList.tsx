"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import mockCampaigns from "@/lib/mockCampaigns";
import ProfileCampaignCard from "./ProfileCampaignCard";

export default function ProfileCampaignList() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all-campaigns";
  const q = searchParams.get("q") || "";

  const filtered = mockCampaigns
    .filter((c) => {
      if (filter === "all-campaigns") return true;
      if (filter === "my-contributions")
        return (
          c.title.toLowerCase().includes("contribution") ||
          c.title.toLowerCase().includes("contributions")
        );
      if (filter === "ongoing") return c.status === "ongoing";
      if (filter === "ended") return c.status === "ended";
      return true;
    })
    .filter((c) => {
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q.toLowerCase()) ||
        c.excerpt.toLowerCase().includes(q.toLowerCase())
      );
    });

  return (
    <div className="mt-6 w-full mx-auto px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch justify-items-center sm:justify-items-stretch">
        {filtered.map((c) => (
          <div key={c.id} className="w-full max-w-[340px] mx-auto">
            <ProfileCampaignCard campaign={c} />
          </div>
        ))}
      </div>
    </div>
  );
}
