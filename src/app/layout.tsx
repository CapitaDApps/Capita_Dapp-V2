import React from "react";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";
import NextTopLoader from "nextjs-toploader";

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
      <body
        className={`${sora.variable}  antialiased relative min-h-screen  max-w-[144rem] mx-auto bg-[var(--background)`}
      >
        <NextTopLoader color="#003DEF" height={4} showSpinner={false} />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}

// style={{
//   backgroundImage:
//     "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
//   backgroundSize: "20px 20px",
// }}
