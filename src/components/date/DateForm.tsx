"use client";
import React from "react";
import { Control } from "react-hook-form";
import { z } from "zod";
import { DateOnlySchema } from "@/lib/constants";
import StartDate from "./StartDate";
import EndDate from "./EndDate";

interface Props {
  control: Control<z.infer<typeof DateOnlySchema>>;
  startDate: Date | null;
}

export default function DateForm({ control, startDate }: Props) {
  return (
    <div className="w-full space-y-2">
      <p className="text-sm text-[var(--form-label)] font-normal">Campaign Duration</p>
      <div className="flex items-center gap-2 justify-between w-full">
        <StartDate control={control} />
        <EndDate control={control} startDate={startDate} />
      </div>
    </div>
  );
}
