"use client";
import React from "react";

type Profile = {
  displayName: string;
  bio: string;
  email: string;
  xLink: string;
  lnLink: string;
  avatar: string;
  coverAvatar: string;
};

export function useGetProfile() {
  const [profile, setProfile] = React.useState<Profile | null>(null);
  React.useEffect(() => {
    const stored = window.localStorage.getItem("mock_profile");
    if (stored) setProfile(JSON.parse(stored));
    else
      setProfile({
        displayName: "Sam Example",
        bio: "A short bio about Sam.",
        email: "sam@example.com",
        xLink: "https://x.com/sam",
        lnLink: "https://linkedin.com/in/sam",
        avatar: "/avatar.png",
        coverAvatar: "/cover.png",
      });
  }, []);

  return { profile } as const;
}
