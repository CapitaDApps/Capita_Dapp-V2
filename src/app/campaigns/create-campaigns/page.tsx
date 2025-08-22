"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CREATOR_TYPES = ["Individual", "Organization", "Start up", "DAO"];
const CATEGORIES = [
  "Travel",
  "Health",
  "Academics",
  "Crises Relief",
  "Community Rescue",
  "Creatives/Community",
  "Organizations",
  "Personal",
  "Phoenix Baker",
];

type NetworkKey = "base" | "solana" | "bnb";

const NETWORKS: { id: NetworkKey; label: string; image: string }[] = [
  { id: "base", label: "Base", image: "/tokens/base.svg" },
  { id: "solana", label: "Solana", image: "/tokens/solana.svg" },
  { id: "bnb", label: "BNB", image: "/tokens/binance.svg" },
];

const TOKENS: Record<
  "base" | "solana" | "bnb",
  { tokens: { symbol: string; image: string }[] }
> = {
  base: {
    tokens: [
      { symbol: "ETH", image: "/tokens/eth.svg" },
      { symbol: "USDC", image: "/tokens/usdc.svg" },
      { symbol: "CNGN", image: "/tokens/cngn.svg" },
      { symbol: "FRENCHIE", image: "/tokens/frenchie.svg" },
      { symbol: "ENB", image: "/tokens/enb.svg" },
      { symbol: "BHUSKY", image: "/tokens/bhusky.svg" },
    ],
  },
  solana: {
    tokens: [{ symbol: "UNICOIN", image: "/tokens/unicorn.svg" }],
  },
  bnb: {
    tokens: [
      { symbol: "BNB", image: "/tokens/binance.svg" },
      { symbol: "ETH", image: "/tokens/eth.svg" },
    ],
  },
};

export default function CreateCampaignPage() {
  const [creatorOpen, setCreatorOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [creator, setCreator] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<string>("base");
  const [selectedToken, setSelectedToken] = useState<string | null>("ETH");
  const [name, setName] = useState("");
  const [dissolve, setDissolve] = useState(false);
  const router = useRouter();

  function handleSubmitClick() {
    setDissolve(true);
    setTimeout(() => {
      router.push("/campaigns/premium/terms");
    }, 300);
  }

  return (
    <div className="min-h-screen bg-[#0b1014] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <div
            className="w-full sm:w-[720px] rounded-2xl border border-zinc-800 overflow-hidden relative"
            style={{
              backgroundColor: "#0b0f12",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "#0056CC33",
                backdropFilter: "blur(200px)",
                WebkitBackdropFilter: "blur(200px)",
              }}
            />

            <div className="relative z-10 p-6 sm:p-8">
              <button
                className="text-sm text-primary-text mb-4 bg-transparent"
                onClick={() => window.history.back()}
              >
                &lt; Back
              </button>

              {/* Card content container */}
              <div
                className={`bg-[#0b0f12] border border-zinc-800 rounded-2xl p-6 ${
                  dissolve ? "dissolve" : ""
                }`}
              >
                <div className="space-y-6">
                  {/* Upload area with large rounded rect and circular upload button */}
                  <div className="relative">
                    <div className="h-36 sm:h-44 rounded-md border border-[#08386a] bg-[#02152a] flex items-center justify-center text-slate-400">
                      <div className="text-center">
                        <div className="mb-2">Upload campaign cover</div>
                        <div className="flex items-center justify-center gap-2">
                          <button className="px-3 py-2 rounded bg-[rgba(255,255,255,0.02)] border border-[#08386a] text-sm inline-flex items-center gap-2">
                            <Image
                              src="/layout/camera.svg"
                              alt="camera"
                              width={16}
                              height={16}
                            />
                            <span>Upload</span>
                          </button>
                          <button className="px-3 py-2 rounded bg-transparent border border-zinc-700 text-sm">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* circular upload button overlapping bottom center */}
                    <div className="absolute left-1/2 -bottom-6 -translate-x-1/2">
                      <button className="w-14 h-14 rounded-full bg-[#012f58] border-2 border-[#0b66ff] flex items-center justify-center shadow-lg">
                        <Image
                          src="/layout/camera.svg"
                          alt="camera"
                          width={18}
                          height={18}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 gap-4">
                    <label className="text-sm text-slate-300">
                      Campaign Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your Campaign's Name"
                      className="w-full rounded-md bg-[#061014] border border-zinc-800 px-3 py-3 text-white focus:outline-none"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-slate-300">
                          Creator Type
                        </label>
                        <div className="relative">
                          <button
                            onClick={() => setCreatorOpen((s) => !s)}
                            className="w-full text-left rounded-md bg-[#061014] border border-zinc-800 px-3 py-3 flex items-center justify-between text-white"
                          >
                            <span>
                              {creator ??
                                "Are you an individual, organization, DAO or Startup?"}
                            </span>
                            <span className="text-slate-400">▾</span>
                          </button>

                          {creatorOpen && (
                            <div className="absolute left-0 mt-2 w-full bg-[#071015] border border-zinc-800 rounded-md shadow-lg z-20 max-h-48 overflow-y-auto">
                              {CREATOR_TYPES.map((c) => (
                                <button
                                  key={c}
                                  onClick={() => {
                                    setCreator(c);
                                    setCreatorOpen(false);
                                  }}
                                  className="w-full text-left px-3 py-2 hover:bg-[rgba(255,255,255,0.02)] text-white"
                                >
                                  {c}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-slate-300">
                          Campaign Category
                        </label>
                        <div className="relative">
                          <button
                            onClick={() => setCategoryOpen((s) => !s)}
                            className="w-full text-left rounded-md bg-[#061014] border border-zinc-800 px-3 py-3 flex items-center justify-between text-white"
                          >
                            <span>
                              {category ?? "Select a campaign category"}
                            </span>
                            <span className="text-slate-400">▾</span>
                          </button>

                          {categoryOpen && (
                            <div className="absolute left-0 mt-2 w-full max-h-48 overflow-y-auto bg-[#071015] border border-zinc-800 rounded-md shadow-lg z-20">
                              {CATEGORIES.map((c) => (
                                <button
                                  key={c}
                                  onClick={() => {
                                    setCategory(c);
                                    setCategoryOpen(false);
                                  }}
                                  className="w-full text-left px-3 py-2 hover:bg-[rgba(255,255,255,0.02)] text-white"
                                >
                                  {c}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm text-slate-300">
                          Start Date
                        </label>
                        <input
                          placeholder="e.g 25/01/2025"
                          className="w-full rounded-md bg-[#061014] border border-zinc-800 px-3 py-3 text-slate-300"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-slate-300">
                          End Date
                        </label>
                        <input
                          placeholder="e.g 25/01/2025"
                          className="w-full rounded-md bg-[#061014] border border-zinc-800 px-3 py-3 text-slate-300"
                        />
                      </div>
                    </div>

                    {/* Tabs for network/token selection */}
                    <div className="mt-2">
                      <div className="flex rounded-md overflow-hidden border border-zinc-800">
                        <button className="flex-1 px-4 py-3 text-sm bg-[#061014] text-white">
                          Select Chain
                        </button>
                        <button className="flex-1 px-4 py-3 text-sm bg-[#061014] text-white">
                          Select Tokens
                        </button>
                      </div>

                      <div className="mt-4 bg-[#071015] border border-zinc-800 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Networks column */}
                        <div className="space-y-3">
                          {NETWORKS.map((n) => (
                            <button
                              key={n.id}
                              onClick={() => {
                                setSelectedNetwork(n.id as keyof typeof TOKENS);
                                setSelectedToken(
                                  TOKENS[n.id as keyof typeof TOKENS].tokens[0]
                                    ?.symbol ?? null
                                );
                              }}
                              className={`w-full text-left flex items-center justify-between gap-3 px-3 py-3 rounded-md border border-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                                selectedNetwork === n.id
                                  ? "bg-[#081731] ring-1 ring-[#6B4EFF]"
                                  : "hover:bg-[rgba(255,255,255,0.02)]"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-md  flex items-center justify-center overflow-hidden">
                                  <Image
                                    src={n.image}
                                    alt={`${n.label} icon`}
                                    width={28}
                                    height={28}
                                  />
                                </div>
                                <span className="text-sm text-white">
                                  {n.label}
                                </span>
                              </div>

                              {/* right-side check indicator */}
                              <span className="ml-2 flex items-center">
                                {selectedNetwork === n.id ? (
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      fill="#6B4EFF"
                                    />
                                    <path
                                      d="M9 12.5l1.8 1.8L15 10"
                                      stroke="#fff"
                                      strokeWidth="1.8"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                ) : (
                                  <span className="w-4 h-4" aria-hidden />
                                )}
                              </span>
                            </button>
                          ))}
                        </div>

                        {/* Tokens column */}
                        <div>
                          <div className="mb-2">
                            <input
                              placeholder="Search by name, symbol or address"
                              className="w-full rounded-md bg-[#061014] border border-zinc-800 px-3 py-2 text-sm text-slate-300"
                            />
                          </div>

                          <div className="space-y-2">
                            {TOKENS[
                              selectedNetwork as keyof typeof TOKENS
                            ].tokens.map((t) => (
                              <button
                                key={t.symbol}
                                onClick={() => setSelectedToken(t.symbol)}
                                className={`w-full text-left flex items-center justify-between gap-3 px-3 py-3 rounded-md border border-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                                  selectedToken === t.symbol
                                    ? "bg-[#1f1146] ring-1 ring-[#6B4EFF]"
                                    : "hover:bg-[rgba(255,255,255,0.02)]"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-md  flex items-center justify-center overflow-hidden">
                                    <Image
                                      src={t.image}
                                      alt={`${t.symbol} icon`}
                                      width={28}
                                      height={28}
                                    />
                                  </div>
                                  <span className="text-sm text-white">
                                    {t.symbol}
                                  </span>
                                </div>

                                {/* right-side check indicator for tokens */}
                                <span className="ml-2 flex items-center">
                                  {selectedToken === t.symbol ? (
                                    <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="2"
                                        y="2"
                                        width="20"
                                        height="20"
                                        rx="6"
                                        fill="#6B4EFF"
                                      />
                                      <path
                                        d="M8.5 12.8l2.1 2.1L15 11.5"
                                        stroke="#fff"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  ) : (
                                    <span className="w-4 h-4" aria-hidden />
                                  )}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-center">
                      <button
                        onClick={handleSubmitClick}
                        className="inline-flex items-center justify-center  text-white rounded-lg shadow-lg"
                        style={{
                          width: 184,
                          height: 55,
                          borderWidth: 1,
                          background:
                            "linear-gradient(270.05deg, #003DEF 68.33%, #001F7A 114.25%)",
                        }}
                        aria-label="Submit"
                      >
                        <span className="text-base font-semibold">Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dissolve {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-6px);
          }
        }
        .dissolve {
          animation: dissolve 300ms ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
