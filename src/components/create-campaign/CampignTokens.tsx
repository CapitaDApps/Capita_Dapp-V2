"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CampaignFormSchema } from "@/lib/constants";
import {
  Control,
  UseFormGetValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import Image from "next/image";
import {
  getNetworkTokens,
  TokenObjectType,
} from "@/services/contracts/tokensConfig";
import { useEffect, useState } from "react";
import { getEnvChainId } from "@/lib/networks/config";
import { NetworkMainnet } from "@/lib/networks/types";

interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
  getValues: UseFormGetValues<z.infer<typeof CampaignFormSchema>>;
  setValue: UseFormSetValue<z.infer<typeof CampaignFormSchema>>;
  watch: UseFormWatch<z.infer<typeof CampaignFormSchema>>;
}
export function CampaignTokens({
  control,
  watch,
  getValues,
  setValue,
}: FormInput) {
  const value = watch("tokens");
  const network = watch("chain");

  const defaultTokens = (value || [])
    .filter((token) => token.type == "default")
    .map((token) => token.name);

  const [tokens, setTokens] = useState<TokenObjectType[]>([]);

  useEffect(() => {
    console.log({ network });
    setTokens(getNetworkTokens(getEnvChainId(network as NetworkMainnet)));
  }, [network]);

  return (
    <FormField
      control={control}
      name="tokens"
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          <Popover>
            <PopoverTrigger asChild>
              <FormControl className="flex justify-between">
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "!w-full  !py-5  rounded-r-[6px] rounded-l-none bg-primary/5 border-none outline-primary/30 outline focus-visible:outline-primary  cursor-pointer  rounded-[8px text-xs",
                    !field.value && "text-gray-500 font-normal"
                  )}
                >
                  Select Token
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent className="w-[180px] md:w-72 !bg-[#fff] border-primary/50 focus:ring-primary/50 p-0">
              <Command>
                <CommandInput placeholder="Search tokens..." className="h-9 " />
                <CommandList>
                  <CommandEmpty>No token found.</CommandEmpty>

                  <CommandGroup className="cursor-pointer max-h-[120px] overflow-y-auto no-scroll">
                    {tokens.map((chain) => (
                      <CommandItem
                        disabled={defaultTokens.includes(chain.name)}
                        value={chain.name}
                        key={chain.name}
                        className="hover:bg-primary hover:text-white cursor-pointer text-xs"
                        onSelect={() => {
                          const current = getValues("tokens") || [];
                          if (current.some((c) => c.name == chain.name)) {
                            setValue(
                              "tokens",
                              current.filter((val) => val.name !== chain.name)
                            );
                          } else {
                            setValue("tokens", [...current, chain]);
                          }
                        }}
                      >
                        <Image
                          src={chain.src}
                          alt={`${chain.name} icon`}
                          width={20}
                          height={20}
                        />
                        {chain.name}
                        <Check
                          className={
                            watch("tokens")?.some(
                              (token) => token.name == chain.name
                            )
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          {!value?.length && <FormMessage />}
        </FormItem>
      )}
    />
  );
}
