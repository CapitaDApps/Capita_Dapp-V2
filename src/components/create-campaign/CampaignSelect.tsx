import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Control, FieldPath } from "react-hook-form";
import { CampaignFormSchema } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import z from "zod";
interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
  name: FieldPath<z.infer<typeof CampaignFormSchema>>;
  label: string;
  placeholder: string;
  array: { [key: string]: string }[];
}
export default function CampaignSelect({
  control,
  name,
  label,
  placeholder,
  array,
}: FormInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xs text-[var(--form-label)] font-normal">
            {label}
          </FormLabel>
          <div className="w-full flex justify-center items-center">
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger
                  className=" cursor-pointer  w-[98%]  md:w-[92%] lg:w-full  bg-primary/5 outline-primary/30 outline focus-visible:outline-primary rounded-[8px] p-3 text-xs  focus:ring text-black ring-primary/40  data-[placeholder]:text-gray-500"
                >
                  <SelectValue placeholder={placeholder} className="" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="max-h-[160px] bg-[#fff] border border-primary/30 text-[var(--sidebar-content)]">
                {array.map((select) => (
                  <SelectItem
                    className="cursor-pointer text-xs hover:bg-primary hover:text-white"
                    key={select.name}
                    value={select.value}
                  >
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
