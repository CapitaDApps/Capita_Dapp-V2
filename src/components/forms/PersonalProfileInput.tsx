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
import { PersonalProfileFormSchema } from "@/lib/constants";
import { Textarea } from "../ui/textarea";

interface FormInput {
  control: Control<z.infer<typeof PersonalProfileFormSchema>>;
  name: FieldPath<z.infer<typeof PersonalProfileFormSchema>>;
  label: string;
  placeholder: string;
  type: "input" | "textarea";
  inputType?: string;
}

export default function PersonalFundingProfileInput({
  control,
  name,
  label,
  placeholder,
  type,
  inputType = "text",
}: FormInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="text-xs text-primary-text font-normal">
            {label}
          </FormLabel>
          <div className="w-full flex justify-center items-center">
            <FormControl>
              {type === "input" ? (
                
                // <div className="neon-wrapper w-[92%]">

                  <Input
                    className="neon-inputs border w-[92%] lg:w-full border-zinc-400 focus:ring-primary focus:ring-2 
   focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                    placeholder={placeholder}
                    {...field}
                    type={inputType}
                  />
                // </div>
              ) : (
                <div className="flex flex-col items-center w-full space-y-2">
                   {/* <div className="neon-wrapper w-[92%]"> */}

                  <Textarea
                    placeholder={placeholder}
                    maxLength={2500}
                    className="resize-none neon-inputs h-[130px] w-[92%] lg:w-full border  border-zinc-400 focus:ring-primary focus:ring-2 
    focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    value={typeof field.value === "string" ? field.value : ""}
                  />
                   {/* </div> */}
                  <div className="w-[92%] lg:w-full text-left">
                    <p className="text-xs text-gray-500">
                      {typeof field.value === "string" ? field.value.length : 0}
                      /200
                    </p>
                  </div>
                </div>
              )}
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
