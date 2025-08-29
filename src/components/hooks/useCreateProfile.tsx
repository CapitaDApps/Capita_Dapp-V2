"use client";

import React from "react";
import { createProfileApi } from "@/lib/action";
import { Profile } from "@/lib/types/profile.type";

export default function useCreateProfile() {
  const [status, setStatus] = React.useState<"idle" | "pending" | "done">(
    "idle"
  );

  type CreateProfileResponse =
    | { ok: true; data?: unknown }
    | { ok: false; error?: string };

  async function createProfile(
    obj: Profile,
    opts?: { onSuccess?: () => void }
  ) {
    setStatus("pending");
    try {
      const res = (await createProfileApi(obj)) as CreateProfileResponse;
      if (res && res.ok) {
        setStatus("done");
        opts?.onSuccess?.();
      } else {
        setStatus("idle");
      }
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  }

  return { status, createProfile } as const;
}
