import React from "react";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ClientShell from "./ClientShell";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/layout/Footer";
import BackgroundWithOverlay from "@/components/hero/BackgroundWithOverlay";
import Web3Provider from "./web3Provider";
import { Bounce, ToastContainer } from "react-toastify";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
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
        <Web3Provider>
          <BackgroundWithOverlay />
          <NextTopLoader color="#003def" height={4} showSpinner={false} />
          <ClientShell>
            <div className="relative z-10">
              {children}
              <Footer />
            </div>
          </ClientShell>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            stacked={true}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            limit={1}
            theme="light"
            transition={Bounce}
          />
        </Web3Provider>
      </body>
    </html>
  );
}
