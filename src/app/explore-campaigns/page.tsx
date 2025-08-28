import CreateCampaign from "@/components/layout/CreateCampaign";
import Filter from "@/components/layout/Filter";
import FilterMobile from "@/components/layout/FilterMobile";
import React, { Suspense } from "react";
import CampaignList from "@/components/campaigns/CampaignList";

import Load from "@/components/ui/Load";

export async function generateMetadata() {
  return {
    title: `Funding Campaigns`,
  };
}
export default async function ExploreCampaigns() {
  return (
    <div className="h-full py-1.5 pt-16 lg:py- px-4 md:px-8 ">
      <CreateCampaign />
      <Suspense fallback={<Load />}>
        <Filter />
        <FilterMobile />
        <CampaignList />
      </Suspense>
    </div>
  );
}
