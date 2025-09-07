import React from "react";
import { FormField, FormItem, FormMessage } from "../ui/form";
import { Camera } from "lucide-react";
import { CampaignFormSchema } from "@/lib/constants";
import z from "zod";
import { Control } from "react-hook-form";
import Image from "next/image";
const defaultCover = "/campaign/banner.png";

interface FormInput {
  control: Control<z.infer<typeof CampaignFormSchema>>;
}

export default function CampaignCoverImage({ control }: FormInput) {
  return (
    <FormField
      control={control}
      name="cover"
      render={({ field }) => (
        <FormItem>
          <FormMessage />
          <div className="relative border bg-primary/50 border-primary/30 w-full  h-[150px] lg:h-[200px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
            {field.value ? (
              <Image
                fill
                src={URL.createObjectURL(field.value)}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`relative w-full h-full`}>
                <div className="absolute w-full z-[1] h-full bg-[#2E2E2E]/15  rounded-[16px] flex items-center justify-center gap-2" />
                <Image
                  src={defaultCover}
                  alt="default cover"
                  fill
                  className="w-full rounded-[16px] object-center object-cover"
                  sizes="100vw"
                  unoptimized
                />
              </div>
            )}
            <div className="absolute z-[3]">
              <label className=" rounded-full z-20 cursor-pointer">
                <div className="bg-black/50 p-2 rounded-full">
                  <Camera className="w-5 h-5   text-white" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    e.target.files?.[0] && field.onChange(e.target.files[0])
                  }
                />
              </label>
            </div>
          </div>
        </FormItem>
      )}
    />
  );
}
