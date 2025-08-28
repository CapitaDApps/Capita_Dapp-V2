import React from "react";
import { FormField, FormItem, FormMessage } from "../ui/form";
import { Camera } from "lucide-react";
import z from "zod";
import { Control } from "react-hook-form";
import { CampaignFormSchema } from "@/lib/constants";
import Image from "next/image";
const defaultAvatar = "/campaign/c.png";
interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
}

export default function CampaignAvatar({ control }: FormInput) {
  return (
    <FormField
      control={control}
      name="avatar"
      render={({ field }) => (
        <FormItem>
          <div className="relative w-[70px] z-[4] h-[70px] lg:h-[80px] lg:w-[80px] mx-auto -mt-12 rounded-full border border-[var(--form-blue-border)] bg-[var(--form-blue)] overflow-hidden flex items-center justify-center">
            {field.value ? (
              <Image
                fill
                src={
                  typeof window !== "undefined"
                    ? URL.createObjectURL(field.value as File)
                    : ""
                }
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`relative w-full h-full`}>
                <div className="absolute w-full z-[1] h-full bg-[#2E2E2E]/30  rounded-[16px] flex items-center justify-center gap-2" />

                <Image
                  src={defaultAvatar}
                  alt="default avatar"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <label className="absolute z-[4]  inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition cursor-pointer">
              <Camera className="w-6 h-6 text-white" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) field.onChange(file as File);
                }}
              />
            </label>
          </div>
          <FormMessage className="text-xs  text-right" />
        </FormItem>
      )}
    />
  );
}
