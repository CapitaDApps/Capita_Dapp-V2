import { CampaignFormSchema } from "@/lib/constants";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { createCampaignDraft } from "../../campaign";
import { chainConfig } from "@/lib/networks/chains";

export function useCreateCampaign() {
  const { mutate, isPending: isSaving } = useMutation({
    mutationFn: async (data: z.infer<typeof CampaignFormSchema>) => {
      const chain =
        chainConfig.find((chainC) => data.chain == chainC.value)?.id || "";
      console.log({ chain });
      return await createCampaignDraft({
        title: data.campaignName,
        description: data.bio,
        image: data.avatar,
        coverImage: data.cover,
        category: data.category,
        targetAmount: +data.fundingTarget,
        startDate: data.startDate,
        endDate: data.endDate,
        chain,
        otherImages: [],
        userCategory: data.creator,
      });
    },
  });

  return { createCampaignFunc: mutate, isSaving };
}
