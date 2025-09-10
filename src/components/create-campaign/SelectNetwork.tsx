"use client";
import { CampaignFormSchema } from "@/lib/constants";
import { config, getEnvChainId } from "@/lib/networks/config";
import { ChainType, NetworkMainnet } from "@/lib/networks/types";
import { getNetworkTokens } from "@/services/contracts/tokensConfig";
import Image from "next/image";
import {
  Control,
  FieldPath,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { useSwitchChain } from "wagmi";
import { z } from "zod";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
  name: FieldPath<z.infer<typeof CampaignFormSchema>>;
  setValue: UseFormSetValue<z.infer<typeof CampaignFormSchema>>;
  watch: UseFormWatch<z.infer<typeof CampaignFormSchema>>;
  label: string;
  placeholder: string;
  array: ChainType[];
}

export default function SelectNetwork({
  control,
  name,
  placeholder,
  setValue,
  array,
}: FormInput) {
  const { switchChain } = useSwitchChain({ config: config });

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <div className="w-full flex-1 flex justify-center items-center">
            <Select
              onValueChange={(val) => {
                setValue(
                  "tokens",
                  getNetworkTokens(getEnvChainId(val as NetworkMainnet))
                );
                switchChain({ chainId: getEnvChainId(val as NetworkMainnet) });
                return field.onChange(val);
              }}
            >
              <FormControl>
                <SelectTrigger className=" !py-5 rounded-l-[6px] rounded-r-none cursor-pointer   w-full lg:w-full bg-primary/5 outline-primary/30 outline focus-visible:outline-primary  p-3 text-xs text-black  data-[placeholder]:text-gray-500">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="max-h-[160px] bg-[#fff] border border-primary/30">
                {array.map((select) => (
                  <SelectItem
                    className="cursor-pointer text-xs hover:bg-primary hover:text-white"
                    key={select.value}
                    value={select.value}
                  >
                    <Image
                      src={select.image}
                      alt={`${select.symbol} icon`}
                      width={20}
                      height={20}
                      className="inline-block mr-2"
                    />
                    {select.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
