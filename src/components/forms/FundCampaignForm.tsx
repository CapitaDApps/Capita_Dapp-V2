import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

// Local mocks
const FundCampaignFormSchema = z.object({
  amount: z.string().min(1, { message: "Amount is required" }),
  token: z.string().min(1, { message: "Select a token" }),
});

interface FormInput {
  control: Control<z.infer<typeof FundCampaignFormSchema>>;
  name: FieldPath<z.infer<typeof FundCampaignFormSchema>>;
  label: string;
  placeholder: string;
  options?: { value: string; option: string; svg: string }[];
  type: "input" | "select";
}

export default function FundCampaignForm({
  control,
  name,
  label,
  placeholder,
  type,
  options,
}: FormInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel className="text-xs text-primary-text font-normal ">
            {label}
          </FormLabel>
          {type === "select" ? (
            <Select onValueChange={field.onChange}>
              <FormControl className="">
                <SelectTrigger
                  className="border w-[100%]  lg:w-full border-[#383838] focus:ring-primary focus:ring-2 
 focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-[#2A2A2A] border-[#333333] border  rounded-lg">
                {options?.map((opt) => (
                  <SelectItem
                    className="text-xs flex items-center gap-2 text-primary-text cursor-pointer hover:!text-primary-text hover:!bg-primary duration-500 transition-all font-normal"
                    key={opt.value}
                    value={opt.value}
                  >
                    <div className="flex items-center gap-1">
                      <Image src={opt.svg} width={20} height={20} alt="token" />
                      {opt.option}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <div className="w-full flex justify-center items-center">
              <FormControl>
                {type === "input" ? (
                  <Input
                    className="border w-[100%] lg:w-full border-[#383838] focus:ring-primary focus:ring-2 
 focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                    placeholder={placeholder}
                    {...field}
                  />
                ) : (
                  <div className="flex flex-col items-center w-full space-y-2">
                    <Textarea
                      placeholder={placeholder}
                      maxLength={1000}
                      className="resize-none h-[130px] w-[100%] lg:w-full border  border-[#383838] focus:ring-primary focus:ring-2 
                focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                      {...field}
                      onChange={(e) => field.onChange(e.target.value)}
                      value={typeof field.value === "string" ? field.value : ""}
                    />
                    <div className="w-[100%] lg:w-full text-left">
                      <p className="text-xs text-gray-500">
                        {typeof field.value === "string"
                          ? field.value.length
                          : 0}
                        /1000
                      </p>
                    </div>
                  </div>
                )}
              </FormControl>
            </div>
          )}
          <FormMessage className="md:text-xs text-[10px]" />
        </FormItem>
      )}
    />
  );
}
