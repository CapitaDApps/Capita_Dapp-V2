"use client";
import React from "react";

export function useGetProfile() {
  // Return mock profile for now. Replace with API hook when available.
  const [profile, setProfile] = React.useState<any | null>(null);
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
