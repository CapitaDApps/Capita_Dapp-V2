"use client";

import React from "react";
import { createProfileApi } from "@/lib/action";
import { Profile } from "@/lib/types/profile.type";

export default function useCreateProfile() {
  const [status, setStatus] = React.useState<"idle" | "pending" | "done">(
    "idle"
  );

  async function createProfile(
    obj: Profile,
    opts?: { onSuccess?: () => void }
  ) {
    setStatus("pending");
    try {
      const res = await createProfileApi(obj);
      if (res && (res as any).ok) {
        setStatus("done");
        opts?.onSuccess?.();
      } else {
        setStatus("idle");
      }
    } catch (e) {
      setStatus("idle");
    }
  }

  return { status, createProfile } as const;
}
