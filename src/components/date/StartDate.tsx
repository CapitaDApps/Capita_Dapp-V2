"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, startOfDay, isBefore, isToday } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CampaignFormSchema } from "@/lib/constants";
import { z } from "zod";
import { Control } from "react-hook-form";
import Image from "next/image";
import { useScrollModal } from "@/components/hooks/useScrollModal";
import { CgCalendarDates } from "react-icons/cg";

interface Props {
  control: Control<z.infer<typeof CampaignFormSchema>>;
}

export default function StartDate({ control }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  useScrollModal(isOpen);

  return (
    <FormField
      control={control}
      name="startDate"
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger onClick={() => setIsOpen((o) => !o)} asChild>
              <FormControl>
                <div className="neon-wrapper">
                  <div
                    className={cn(
                      "space-y-1 cursor-pointer rounded-[8px] p-3 py-2",
                      " bg-primary/5 outline-primary/30 outline focus-visible:outline-primary"
                    )}
                    role="button"
                    tabIndex={0}
                  >
                    <p className="text-[11px] text-sidebar-content/70">
                      Start Date
                    </p>
                    <div
                      className={cn(
                        "w-full text-left font-normal justify-between items-center text-primary-text bg-transparent border-none flex text-xs",
                        !field.value && "text-primary-text"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span className="text-primary-text text-gray-500">
                          e.g 01/01/2025
                        </span>
                      )}

                      <span
                        className={
                          "ml-3 flex items-center justify-center w-8 h-8 rounded-md transition"
                        }
                        aria-hidden
                      >
                        <CgCalendarDates className="text-sidebar-content/70 text-lg" />
                      </span>
                    </div>
                  </div>
                </div>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent
              className="p-0 bg-primary-bg rounded-[16px] w-fit border-none mr-3"
              align="start"
            >
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined}
                onSelect={(date) => {
                  field.onChange(
                    date
                      ? isToday(date.toISOString())
                        ? new Date().toISOString()
                        : date.toISOString()
                      : ""
                  );
                  // close the popover after selecting a date to ensure the click is handled
                  setIsOpen(false);
                }}
                disabled={(date) => {
                  const today = startOfDay(new Date());
                  return isBefore(date, today);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
