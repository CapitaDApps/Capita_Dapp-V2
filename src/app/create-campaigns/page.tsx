"use client";
import Stepper from "@/components/campaigns/Stepper";
import { CampaignForm } from "@/components/create-campaign/CammpaignForm";
import React from "react";

export default function page() {
  return (
    <div className="pt-20 mx-auto w-[93%] lg:w-[75%]">
      <Stepper step={1} />
      <button
        className="text-xs text-primary-text bg-transparent"
        onClick={() => window.history.back()}
      >
        &lt; Back
      </button>
      <CampaignForm />
    </div>
  );
}
