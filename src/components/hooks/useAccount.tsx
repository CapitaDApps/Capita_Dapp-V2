"use client";
import React from "react";

// Lightweight hook that returns a mock address and stubbed functions.
export function useAccount() {
  const [address, setAddress] = React.useState<string | null>(null);
  // Attempt to read from window.localStorage for a mock address
  React.useEffect(() => {
    const a = window.localStorage.getItem("mock_address");
    if (a) setAddress(a);
  }, []);
  return { address, setAddress } as const;
}
