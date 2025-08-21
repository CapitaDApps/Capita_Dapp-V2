"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import mockCampaigns from "@/lib/mockCampaigns";
import CampaignCard from "./CampaignCard";

export default function CampaignList() {
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
    <div className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <CampaignCard key={c.id} campaign={c} />
        ))}
      </div>
    </div>
  );
}
