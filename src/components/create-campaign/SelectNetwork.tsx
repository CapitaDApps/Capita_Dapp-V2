import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Control,
  FieldPath,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { CampaignFormSchema } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import z from "zod";
import Image from "next/image";
interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
  name: FieldPath<z.infer<typeof CampaignFormSchema>>;
  setValue: UseFormSetValue<z.infer<typeof CampaignFormSchema>>;
  watch: UseFormWatch<z.infer<typeof CampaignFormSchema>>;
  label: string;
  placeholder: string;
  array: { [key: string]: string }[];
}
export default function SelectNetwork({
  control,
  name,
  placeholder,
  watch,
  setValue,
  array,
}: FormInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <div className="w-full flex-1 flex justify-center items-center">
            <Select
              onValueChange={(val) => {
                if (val === "solana") {
                  setValue("tokens", ["usdc", "usdt"]);
                }
                if (val === "base") {
                  setValue("tokens", ["usdc", "cngn", "eth(base)"]);
                }
                if (val === "bnb") {
                  setValue("tokens", ["usdt"]);
                }
                return field.onChange(val);
              }}
            >
              <FormControl>
                <SelectTrigger
                  className=" !py-5 rounded-l-[6px] rounded-r-none cursor-pointer border  w-full lg:w-full !bg-[var(--form-blue)] border-[var(--form-blue-border)] focus:ring-[var(--form-blue-border)] 
   focus:outline-none focus:border-none  p-3 text-xs text-secondary-text focus:ring data-[placeholder]:text-gray-500"
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="max-h-[160px] bg-[#071015] border border-[var(--form-blue-border)]">
                {array.map((select) => (
                  <SelectItem
                    className="cursor-pointer text-xs hover:bg-[#003DEF]"
                    key={select.name}
                    value={select.value}
                  >
                    <Image
                      src={select.image}
                      alt={`${select.label} icon`}
                      width={20}
                      height={20}
                    />{" "}
                    {select.name}
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
