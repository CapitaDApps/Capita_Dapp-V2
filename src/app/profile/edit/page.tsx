"use client";
import dynamic from "next/dynamic";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const EditLayout = dynamic(
  () => import("@/components/edit_profile/EditLayout"),
  {
    ssr: false,
  }
);

export default function Page() {
  const qcRef = React.useRef<QueryClient | null>(null);
  if (!qcRef.current) qcRef.current = new QueryClient();
  return (
    <QueryClientProvider client={qcRef.current}>
      <EditLayout />
    </QueryClientProvider>
  );
}
