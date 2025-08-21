import React from "react";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "ChainFundMe",
  description: "A decentralized platform for funding campaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased bg-[var(--background)]`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
