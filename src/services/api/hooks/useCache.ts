"use client";

import { ReturnCampaignDocument } from "@/types/api";
import { useEffect, useState } from "react";
import { getCampaign } from "../campaign";

export function useCache() {
  const [campaignId] = useState(() => localStorage.getItem("campaignId"));
  const [gettingCache, setGettingCache] = useState(false);
  const [cachedData, setCachedData] = useState<ReturnCampaignDocument>();

  useEffect(() => {
    (async () => {
      if (campaignId) {
        setGettingCache(true);
        const data = await getCampaign(campaignId);
        setCachedData(data);
        setGettingCache(false);
      }
    })();
  }, [campaignId]);

  return { cachedData, gettingCache };
}
