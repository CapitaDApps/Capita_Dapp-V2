import React from "react";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/layout/Footer";
import BackgroundWithOverlay from "@/components/hero/BackgroundWithOverlay";

const sora = Sora({
  variable: "--font-sora",
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
      <body
        className={`${sora.variable} antialiased relative min-h-screen max-w-[144rem] mx-auto`}
      >
        <BackgroundWithOverlay />
        <NextTopLoader color="#003def" height={4} showSpinner={false} />
        <ClientShell>
          <div className="relative z-10">
            {children}
            <Footer />
          </div>
        </ClientShell>
      </body>
    </html>
  );
}