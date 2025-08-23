"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, isBefore, addDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { DateOnlySchema } from "@/lib/constants";
import { z } from "zod";
import { Control } from "react-hook-form";
import Image from "next/image";
import { useOustsideClick } from "@/components/hooks/useOutsideClick";
import { useScrollModal } from "@/components/hooks/useScrollModal";

interface Props {
  control: Control<z.infer<typeof DateOnlySchema>>;
  startDate: Date | null;
}

export default function EndDate({ control, startDate }: Props) {
  const { isOpen, setIsOpen, ref } = useOustsideClick();
  useScrollModal(isOpen);

  return (
    <FormField
      control={control}
      name="endDate"
      render={({ field }) => (
        <FormItem className="flex flex-col w-full ">
          <Popover open={isOpen}>
            <PopoverTrigger onClick={() => setIsOpen(!isOpen)} asChild>
              <FormControl>
                <div className="neon-wrapper">
                  <div
                    className={cn(
                      "space-y-1 cursor-pointer rounded-[8px] p-3",
                      "bg-[var(--form-blue)] border border-[var(--form-blue-border)]"
                    )}
                  >
                    <p className="text-[11px] text-[var(--form-label)]">
                      End Date
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
                        <span className="text-primary-text">
                          e.g 01/01/2025
                        </span>
                      )}

                      <span
                        className={
                          "ml-3 flex items-center justify-center w-8 h-8 rounded-md transition"
                        }
                        aria-hidden
                      >
                        <Image
                          src="/campaign/calendar.png"
                          width={18}
                          height={18}
                          alt="calendar"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </FormControl>
            </PopoverTrigger>

            <PopoverContent
              ref={ref}
              className="p-0 bg-primary-bg rounded-[16px] w-fit border-none mr-3"
              align="start"
            >
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined}
                onSelect={(date) =>
                  field.onChange(date ? date.toISOString() : "")
                }
                disabled={(date) =>
                  startDate ? isBefore(date, addDays(startDate, 1)) : false
                }
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
