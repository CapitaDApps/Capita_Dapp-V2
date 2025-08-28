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
import { CampaignFormSchema } from "@/lib/constants";

interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
  name: FieldPath<z.infer<typeof CampaignFormSchema>>;
  label: string;
  placeholder: string;
  type: "input" | "textarea";
  inputType?: string;
  textType?: string;
}

export default function CampaignInput({
  control,
  textType,
  name,
  label,
  placeholder,
  type,
}: FormInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2">
          <FormLabel className="text-xs text-[var(--form-label)] font-normal">
            {label}
          </FormLabel>
          <div className="w-full flex justify-center items-center">
            <FormControl>
              {type === "input" ? (
                <Input
                  className=" border w-[98%] md:w-[92%] lg:w-full !bg-[var(--form-blue)] border-[var(--form-blue-border)] focus:ring-[var(--form-blue-border)] focus:ring-2 
   focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                  placeholder={placeholder}
                  {...field}
                  type={textType}
                />
              ) : (
                <div className="flex flex-col items-center w-full space-y-2">
                  <Textarea
                    placeholder={placeholder}
                    maxLength={2000}
                    className="resize-none h-[130px] w-[98%] md:w-[92%] lg:w-full border bg-[var(--form-blue)] border-[var(--form-blue-border)] focus:ring-[var(--form-blue-border)] focus:ring 
    focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    value={typeof field.value === "string" ? field.value : ""}
                  />
                  {/* </div> */}
                  <div className="w-[92%] lg:w-full text-left">
                    <p className="text-xs text-gray-500">
                      {typeof field.value === "string" ? field.value.length : 0}
                      /2000
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
