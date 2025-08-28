"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import CampaignInput from "./CampaignInput";
import { CampaignFormSchema } from "@/lib/constants";
import CampaignSelect from "./CampaignSelect";
import DateForm from "../date/DateForm";
import ChainSelect from "./ChainSelect";
import CampaignPhotos from "./CampaignPhotos";

export function CampaignForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof CampaignFormSchema>>({
    resolver: zodResolver(CampaignFormSchema),
  });

  const creator = [
    {
      value: "individual",
      name: "Individual",
    },
    {
      value: "organization",
      name: "Organization",
    },
    {
      value: "start-up",
      name: "Start up",
    },
    {
      value: "dao",
      name: "DAO",
    },
  ];
  const category = [
    {
      value: "travel",
      name: "Travel",
    },
    {
      value: "health",
      name: "Health",
    },
    {
      value: "academics",
      name: "Academics",
    },
    {
      value: "crises-relif",
      name: "Crises Relif",
    },
    {
      value: "community-rescue",
      name: "Comunity Rescue",
    },
    {
      value: "creativies/community",
      name: "Creativies/Community",
    },
    {
      value: "organizations",
      name: "Organizations",
    },
    {
      value: "Personal",
      name: "personal",
    },
    {
      value: "phoenix baker",
      name: "Phoenix Baker",
    },
  ];
  function onSubmit(values: z.infer<typeof CampaignFormSchema>) {
    console.log(values);
  }
  const watchedStart = form.watch("startDate");
  const startDateObj = watchedStart ? new Date(watchedStart) : null;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5 mt-2 mb-8">
        <CampaignPhotos control={form.control} />
        <CampaignInput
          control={form.control}
          label="Campaign Name"
          name="campaignName"
          textType="text"
          placeholder="Enter your Campaign Name"
          type="input"
        />
        <CampaignInput
          control={form.control}
          label="Bio"
          textType="text"
          name="bio"
          placeholder="Enter your Campaign bio (Max 2000 char)"
          type="textarea"
        />

        <CampaignSelect
          control={form.control}
          name="creator"
          label="Creator Type"
          placeholder="Are you an individual, organization, DAO or Startup?"
          array={creator}
        />
        <CampaignSelect
          control={form.control}
          name="category"
          label="Creator Category"
          placeholder="Select your Campaign Category"
          array={category}
        />

        <DateForm control={form.control} startDate={startDateObj} />
        <ChainSelect
          setValue={form.setValue}
          getValues={form.getValues}
          watch={form.watch}
          control={form.control}
        />
        <CampaignInput
          control={form.control}
          label="Funding Target"
          textType="number"
          name="fundingTarget"
          placeholder="1000 USD"
          type="input"
        />
        <div className="flex w-full justify-end">
          <Button
            // disabled={isSaving}
            style={{
              background:
                "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
            }}
            type="submit"
            className="text-white lg:w-fit w-full text-sm"
          >
            {"Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
