"use client";
import { useCampaigns } from "@/services/api/hooks/campaign/useCampaigns";
import { useSearchParams } from "next/navigation";
import Load from "../ui/Load";
import CampaignCard from "./CampaignCard";

export default function CampaignList() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all-campaigns";
  const q = searchParams.get("q") || "";

  const { campaigns, retrievingCampaigns } = useCampaigns();

  if (retrievingCampaigns) {
    return <Load />;
  }

  const filtered = (campaigns || []).filter((c) => {
    if (filter === "all-campaigns") return true;
    if (filter === "my-contributions")
      return (
        c.title.toLowerCase().includes("contribution") ||
        c.title.toLowerCase().includes("contributions")
      );

    return true;
  });

  return (
    <div className="mt-12 mb-6 w-full  mx-auto lg:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
        {filtered.map((c) => (
          <div key={c.cmid} className="w-full">
            <CampaignCard campaign={c} />
          </div>
        ))}
      </div>
    </div>
  );
}
