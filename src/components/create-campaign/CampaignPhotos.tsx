"use client";

import { Control } from "react-hook-form";
import { z } from "zod";

import CampaignCoverImage from "./CampaignCoverImage";
import CampaignAvatar from "./CampaignAvatar";
import { CampaignFormSchema } from "@/lib/constants";

interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
}

export default function CampaignPhotos({ control }: FormInput) {
  return (
    <div>
      <CampaignCoverImage control={control} />
      <CampaignAvatar control={control} />
    </div>
  );
}
