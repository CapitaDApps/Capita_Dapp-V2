import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface FormInput {
  control: Control<any>;
  name: FieldPath<any>;
  label: string;
  placeholder: string;
  type: "input" | "textarea";
}

export default function EditProfileInput({
  control,
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
          <FormLabel className="text-xs text-primary-text font-normal">
            {label}
          </FormLabel>
          <div className="w-full flex justify-center items-center">
            <FormControl>
              {type === "input" ? (
                <Input
                  className="border w-[92%] lg:w-full border-[#383838] focus:ring-primary focus:ring-2 
      focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                  placeholder={placeholder}
                  {...field}
                />
              ) : (
                <Textarea
                  placeholder={placeholder}
                  className="resize-none w-[92%] lg:w-full border border-[#383838] focus:ring-primary focus:ring-2 
      focus:outline-none focus:border-none rounded-[8px] p-3 text-xs text-secondary-text"
                  {...field}
                />
              )}
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
