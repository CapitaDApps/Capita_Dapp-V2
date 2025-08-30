"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Form } from "@/components/ui/form";
import FundCampaignForm from "../forms/FundCampaignForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";

//local mock data
const tokenNames = {
  eth: "ETH",
  usdc: "USDC",
  frenchie: "FRENCHIE",
} as const;

const FundCampaignFormSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required" }),
  token: z.string().min(1, { message: "Select a token" }),
});

export default function CampaignFooter({
  campaignAddress,
  campaignName,
  status,
  ended,
  options,
}: {
  campaignAddress: string | undefined;
  campaignName: string;
  status: string;
  ended: boolean;
  options: {
    name: string;
    src: string;
  }[];
}) {
  // UI-only: no wallet or contract interactions here. This renders the form and confirmation dialog.
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const [isDonationShared, setIsDonationShared] = useState(false);
  const [fundDetails, setFundDetails] = useState({ amount: "", token: "" });
  const form = useForm<z.infer<typeof FundCampaignFormSchema>>({
    resolver: zodResolver(FundCampaignFormSchema),
    defaultValues: { amount: "", token: "" },
  });

  const tokenOption = options.map((opt) => ({
    value: opt.name.toLowerCase(),
    option: opt.name,
    svg: opt.src,
  }));

  async function onSubmit(values: z.infer<typeof FundCampaignFormSchema>) {
    // open confirmation dialog with entered values
    setFundDetails({ amount: values.amount, token: values.token });
    setIsOpenModal(true);
  }

  function handleConfirm() {
    // UI-only: simulate success
    setIsOpenModal(false);
    // setIsDonationShared(true);
    toast.success("You've successfully funded the campaign (simulated)");
    // reset form
    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 md:grid-cols-3 items-center place-items-end gap-3 md:gap-6 ">
            <div className="w-[100%]">
              <FundCampaignForm
                name="amount"
                placeholder={`${
                  form.watch("token") === tokenNames.eth.toLowerCase()
                    ? "Enter eth amount"
                    : form.watch("token") === tokenNames.usdc.toLowerCase()
                    ? "Enter usdc amount"
                    : "Enter token amount"
                }`}
                label={`Enter amount to fund`}
                type="input"
                control={form.control}
                options={tokenOption}
              />
            </div>

            <div className="w-[100%] h-full">
              <FundCampaignForm
                name="token"
                label="Select Token"
                placeholder="Select token to continue"
                type="select"
                control={form.control}
                options={tokenOption}
              />
            </div>

            <Button
              style={{
                background:
                  "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
              }}
              className="w-[100%] cursor-pointer last:col-span-3 md:last:col-span-1 text-white disabled:cursor-not-allowed"
              type="submit"
              disabled={status !== "ongoing" || ended}
            >
              Fund Campaign
            </Button>
          </div>
        </form>
      </Form>

      <AlertDialog open={isOpenModal}>
        <AlertDialogContent className="border-none flex flex-col items-center gap-3">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-sm text-center text-white font-normal">
              {campaignName}
            </AlertDialogTitle>
            <AlertDialogDescription className="flex items-center text-silver flex-col text-xs">
              <span>You&apos;re about to fund</span>
              <span className="text-2xl text-white">
                {fundDetails.amount} {fundDetails.token}
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="items-end">
            <AlertDialogCancel
              className="text-white bg-red-600 border-none hover:bg-red-700 hover:text-white"
              onClick={() => setIsOpenModal(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirm}
              className="text-white"
              style={{
                background:
                  "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
              }}
            >
              Fund
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* {isDonationShared && (
        <PostDonationModal
          campaignName={campaignName}
          campaignAddress={campaignAddress}
          onClose={() => setIsDonationShared(false)}
        />
      )} */}
    </div>
  );
}
