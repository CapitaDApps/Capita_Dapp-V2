"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import EditProfileInput from "@/components/edit_profile/EditProfileInput";
import { EditProfileFormSchema as _EditProfileFormSchema } from "@/lib/constants";
import useCreateProfile from "@/components/hooks/useCreateProfile";
import { useGetProfile } from "@/components/hooks/useGetProfile";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMultiStep } from "@/context/MultiFormContext";
import { useAccount } from "@/components/hooks/useAccount";

const EditProfileFormSchema =
  // fallback schema when original isn't exported from constants
  (_EditProfileFormSchema as any) ||
  z.object({
    displayName: z.string().optional(),
    bio: z.string().optional(),
    email: z.string().optional(),
    xLink: z.string().optional(),
    lnLink: z.string().optional(),
  });

export default function EditProfileFormField() {
  const { profile } = useGetProfile();
  const router = useRouter();
  const { profileImg, profileCoverImg, setProfileImg, setProfileCoverImg } =
    useMultiStep();
  const form = useForm<z.infer<typeof EditProfileFormSchema>>({
    resolver: zodResolver(EditProfileFormSchema),
    defaultValues: {
      displayName: profile?.displayName || "",
      bio: profile?.bio || "",
      email: profile?.email || "",
      xLink: profile?.xLink || "",
      lnLink: profile?.lnLink || "",
    },
  });
  const { createProfile, status } = useCreateProfile();
  const { address } = useAccount();

  function onSubmit(values: z.infer<typeof EditProfileFormSchema>) {
    if (!address) toast("Connect your wallet to edit your profile");
    else {
      createProfile(
        {
          ...values,
          walletAddress: address,
          avatar: profileImg,
          coverAvatar: profileCoverImg,
        },
        {
          onSuccess: () => {
            router.push("/profile");
            form.reset();
            setProfileImg(undefined);
            setProfileCoverImg(undefined);
          },
        }
      );
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-8">
        <EditProfileInput
          name="displayName"
          label="Display Name"
          placeholder="Enter your Display Name"
          type="input"
          control={form.control}
        />
        <EditProfileInput
          name="bio"
          label="Bio"
          placeholder="Enter your bio(Max 200 char)"
          type="textarea"
          control={form.control}
        />
        <EditProfileInput
          name="email"
          label="Email"
          placeholder="Your email address"
          type="input"
          control={form.control}
        />
        <EditProfileInput
          name="xLink"
          label="X link"
          placeholder="e.g https://x.com/xusername"
          type="input"
          control={form.control}
        />
        <EditProfileInput
          name="lnLink"
          label="Ln link"
          placeholder="e.g https://linkedin.com/ln/lnusername"
          type="input"
          control={form.control}
        />
        <div className="flex w-full justify-end">
          <Button
            type="submit"
            className="bg-primary-text hover:bg-primary-text/80 lg:w-fit w-full  text-primary-bg text-sm"
          >
            {status === "pending" ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
