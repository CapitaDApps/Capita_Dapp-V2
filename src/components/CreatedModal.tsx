"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useMultiStep } from "@/context/MultiFormContext";
import Link from "next/link";
import React from "react";
export default function CreatedModal({
  children,
  type,
  errorCreating,
  isCreating,
}: {
  children: React.ReactNode;
  type: string;
  errorCreating: string;
  isCreating: boolean;
}) {
  console.log(type);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="border-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-sidebar-content text-sm text-center font-[500]">
            Campaign Creation
          </AlertDialogTitle>
          <AlertDialogDescription className="text-xs text-center">
            {errorCreating
              ? "Could not create campaign"
              : isCreating
              ? "Campaign creation in progress..."
              : `Your campaign has been successfully created! \n
            You can now manage and track its performance from your profile.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="">
          {!isCreating || errorCreating ? (
            <>
              <AlertDialogCancel className="text-sidebar-content">
                Close
              </AlertDialogCancel>
              <Link href="/profile" className="">
                <AlertDialogAction
                  style={{
                    background:
                      "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
                  }}
                  className="hover:bg-transparent text-white w-full"
                >
                  Back to Profile
                </AlertDialogAction>
              </Link>
            </>
          ) : (
            ""
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
