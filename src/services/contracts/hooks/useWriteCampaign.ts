"use client";

import { useWriteFundingFactory } from "./useWriteFundingFactory";

import { useQueryClient } from "@tanstack/react-query";

export function useWriteCampaign() {
  const createCampaignFunc = useWriteFundingFactory();
  const queryClient = useQueryClient();

  async function createChainFundMe(options: {
    uri: string;
    startTime: number;
    endTime: number;
    otherTokens: string[];
  }) {
    return await createCampaignFunc(
      "createChainFundMe",
      [options.startTime, options.endTime, options.uri, options.otherTokens],
      {
        onError: async (error: { message: string }) => {
          console.log(error);
        },
        onSuccess: async () => {
          console.log("Campaign created successfully");
          await queryClient.invalidateQueries();
        },
      }
    );
  }

  return { createChainFundMe };
}
