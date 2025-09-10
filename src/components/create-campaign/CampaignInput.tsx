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
          <FormLabel className="text-xs text-sidebar-content font-normal">
            {label}
          </FormLabel>
          <div className="w-full flex justify-center items-center">
            <FormControl>
              {type === "input" ? (
                // @ts-expect-error type
                <Input
                  className="  w-[98%] md:w-[92%] lg:w-full   bg-primary/5 outline-primary/30 outline focus-visible:outline-primary rounded-[8px] p-3 text-xs text-sidebar-content"
                  placeholder={placeholder}
                  {...field}
                  type={textType}
                />
              ) : (
                <div className="flex flex-col items-center w-full space-y-2">
                  <Textarea
                    placeholder={placeholder}
                    maxLength={2000}
                    className="resize-none h-[130px] text-black ring-primary/40  placeholder:text-gray-500  w-[98%] md:w-[92%] lg:w-full border-primary bg-primary/5 outline-primary/30 outline focus-visible:outline-primary rounded-[8px] p-3 text-xs "
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
