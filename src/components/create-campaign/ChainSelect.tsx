import React from "react";
import { CampaignTokens } from "./CampignTokens";
import { CampaignFormSchema } from "@/lib/constants";
import z from "zod";
import {
  Control,
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import SelectNetwork from "./SelectNetwork";
import Image from "next/image";
import { base, bsc } from "wagmi/chains";
import { getNetworkTokens } from "@/services/contracts/tokensConfig";
import { chains } from "@/lib/networks/config";

interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
  getValues: UseFormGetValues<z.infer<typeof CampaignFormSchema>>;
  setValue: UseFormSetValue<z.infer<typeof CampaignFormSchema>>;
  watch: UseFormWatch<z.infer<typeof CampaignFormSchema>>;
}

// const baseToks = [
//   { label: "FRENCHIE", value: "frenchie", image: "/tokens/frenchie.svg" },
//   { label: "ENB", value: "enb", image: "/tokens/enb.svg" },
//   { label: "Bhusky", value: "bhusky", image: "/tokens/bhusky.svg" },
//   { label: "Eth(base)", value: "eth(base)", image: "/tokens/eth.svg" },
//   { label: "USDC", value: "usdc", image: "/tokens/usdc.svg" },
//   { label: "CNGN", value: "cngn", image: "/tokens/cngn.svg" },
// ];

// const bnbToks = [
//   { label: "BNB", value: "bnb", image: "/tokens/binance.svg" },
//   { label: "ETH", value: "eth", image: "/tokens/eth.svg" },
//   { label: "USDT", value: "usdt", image: "/tokens/usdt.svg" },
// ];
export default function ChainSelect({
  control,
  getValues,
  setValue,
  watch,
}: FormInput) {
  const tokens = watch("tokens");

  return (
    <div className="space-y-1">
      <p className="text-xs text-[var(--form-label)] font-normal">
        Network & Chain
      </p>
      <div className="flex w-ful cursor-pointer w-[98%]  mx-auto">
        <SelectNetwork
          control={control}
          name="chain"
          label="Creator Type"
          placeholder="Select Chain"
          setValue={setValue}
          watch={watch}
          array={chains}
        />
        <CampaignTokens
          getValues={getValues}
          setValue={setValue}
          watch={watch}
          control={control}
        />
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-2">
        {tokens?.map((token) => (
          <div
            className="flex items-center gap-1 text-xs rounded-full bg-primary/10 border border-primary/50 font-medium px-2 py-1"
            key={token?.name}
          >
            <Image
              src={token?.src || ""}
              alt={`${token?.name} icon`}
              width={20}
              height={20}
            />
            {token?.name}
          </div>
        ))}
      </div>
    </div>
  );
}
