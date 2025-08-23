"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  CREATOR_TYPES,
  CATEGORIES,
  NETWORKS,
  TOKENS,
} from "@/lib/campaignData";
import type { NetworkKey } from "@/lib/campaignData";

export default function FormFields({
  name,
  onNameChange,
  creatorOpen,
  setCreatorOpen,
  categoryOpen,
  setCategoryOpen,
  creator,
  setCreator,
  category,
  setCategory,
  selectedNetwork,
  setSelectedNetwork,
  selectedToken,
  setSelectedToken,
  handleSubmitClick,
}: {
  name: string;
  onNameChange: (v: string) => void;
  creatorOpen: boolean;
  setCreatorOpen: (v: boolean) => void;
  categoryOpen: boolean;
  setCategoryOpen: (v: boolean) => void;
  creator: string | null;
  setCreator: (v: string | null) => void;
  category: string | null;
  setCategory: (v: string | null) => void;
  selectedNetwork: string;
  setSelectedNetwork: (v: string) => void;
  selectedToken: string | null;
  setSelectedToken: (v: string | null) => void;
  handleSubmitClick: () => void;
}) {
  // local state for bio and attachments
  const [bio, setBio] = useState("");
  const reportRef = useRef<HTMLInputElement | null>(null);
  const billsRef = useRef<HTMLInputElement | null>(null);
  const [reportFileName, setReportFileName] = useState<string | null>(null);
  const [billsFileName, setBillsFileName] = useState<string | null>(null);

  const onReportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setReportFileName(f ? f.name : null);
  };

  const onBillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setBillsFileName(f ? f.name : null);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <label className="text-sm text-[var(--form-label)]">Campaign Name</label>
      <input
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Enter your Campaign's Name"
        className="w-full rounded-md bg-[var(--form-blue)] border border-[var(--form-blue-border)] px-3 py-3 text-white focus:outline-none"
      />

      <div>
        <label className="text-sm text-[var(--form-label)]">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Enter your Campaign bio (Max 1000 char)"
          maxLength={1000}
          rows={6}
          className="w-full rounded-md bg-[var(--form-blue)] border border-[var(--form-blue-border)] px-4 py-3 text-slate-100 resize-vertical focus:outline-none"
        />
        <div className="text-xs text-slate-400 mt-1 text-right">
          {bio.length}/1000
        </div>
      </div>

      <div>
        <label className="text-sm text-[var(--form-label)]">
          Attach Documents (for Medical rescues only)
        </label>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Medical Report */}
          <div className="rounded-lg border-2 border-dashed border-[var(--form-blue-border)] bg-[var(--form-blue)] p-4 flex flex-col items-center justify-center gap-3 h-36">
            <div className="text-sm text-slate-300">Medical Report</div>
            <div className="w-12 h-12 rounded-md flex items-center justify-center">
              <Image
                src={"/layout/file.svg"}
                alt="File Icon"
                width={24}
                height={24}
                onClick={() => reportRef.current?.click()}
              />
            </div>

            <div className="text-sm">
              {reportFileName ? (
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-300 truncate max-w-[160px]">
                    {reportFileName}
                  </span>
                  <button
                    onClick={() => {
                      setReportFileName(null);
                      if (reportRef.current) reportRef.current.value = "";
                    }}
                    className="text-xs text-secondary-purple underline"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => reportRef.current?.click()}
                  className="text-sm text-white u"
                  type="button"
                >
                  <span className="underline">Upload</span> from Computer
                </button>
              )}

              <input
                ref={reportRef}
                type="file"
                className="hidden"
                onChange={onReportChange}
                accept="application/pdf,image/*"
              />
            </div>
          </div>

          <div className="rounded-lg border-2 border-dashed border-[var(--form-blue-border)] bg-[var(--form-blue)] p-4 flex flex-col items-center justify-center gap-3 h-36">
            <div className="text-sm text-slate-300">
              Hospital bills & others
            </div>
            <div className="w-12 h-12 rounded-md  flex items-center justify-center">
              <div className="w-12 h-12 rounded-md flex items-center justify-center">
                <Image
                  src={"/layout/file.svg"}
                  alt="File Icon"
                  width={24}
                  height={24}
                  onClick={() => billsRef.current?.click()}
                />
              </div>
            </div>

            <div className="text-sm">
              {billsFileName ? (
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-300 truncate max-w-[160px]">
                    {billsFileName}
                  </span>
                  <button
                    onClick={() => {
                      setBillsFileName(null);
                      if (billsRef.current) billsRef.current.value = "";
                    }}
                    className="text-xs text-secondary-purple underline"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => billsRef.current?.click()}
                  className="text-sm text-white"
                  type="button"
                >
                  <span className="underline">Upload</span> from Computer
                </button>
              )}

              <input
                ref={billsRef}
                type="file"
                className="hidden"
                onChange={onBillsChange}
                accept="application/pdf,image/*"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm text-[var(--form-label)]">
            Creator Type
          </label>
          <div className="relative mt-3 text-sm">
            <button
              onClick={() => setCreatorOpen(!creatorOpen)}
              className="w-full text-left rounded-md bg-[var(--form-blue)] border border-[var(--form-blue-border)] px-3 py-3 flex items-center justify-between text-white"
            >
              <span>
                {creator ??
                  "Are you an individual, organization, DAO or Startup?"}
              </span>
              <span className="text-slate-400">▾</span>
            </button>

            {creatorOpen && (
              <div className="absolute left-0 mt-2 w-full bg-[#071015] border border-[var(--form-blue-border)] rounded-md shadow-lg z-20 max-h-48 overflow-y-auto">
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
          <label className="text-sm text-[var(--form-label)]">
            Campaign Category
          </label>
          <div className="relative mt-3">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full text-left rounded-md bg-[var(--form-blue)] border border-[var(--form-blue-border)] px-3 py-3 flex items-center justify-between text-white"
            >
              <span>{category ?? "Select a campaign category"}</span>
              <span className="text-slate-400">▾</span>
            </button>

            {categoryOpen && (
              <div className="absolute left-0 mt-2 w-full max-h-48 overflow-y-auto bg-[#071015] border border-[var(--form-blue-border)] rounded-md shadow-lg z-20">
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
          <label className="text-sm text-slate-300">Start Date</label>
          <input
            placeholder="e.g 25/01/2025"
            className="w-full rounded-md bg-[var(--form-blue)] border border-[var(--form-blue-border)] px-3 py-3 mt-3 text-slate-300"
          />
        </div>
        <div>
          <label className="text-sm text-slate-300">End Date</label>
          <input
            placeholder="e.g 25/01/2025"
            className="w-full rounded-md bg-[var(--form-blue)] border border-[var(--form-blue-border)] px-3 py-3 mt-3 text-slate-300"
          />
        </div>
      </div>

      {/* Tabs for network/token selection */}
      <div className="mt-2">
        <div className="flex rounded-md overflow-hidden border border-[var(--form-blue-border)]">
          <button className="flex-1 px-4 py-3 text-sm bg-[var(--form-blue)] text-white">
            Select Chain
          </button>

          <div
            role="separator"
            aria-orientation="vertical"
            aria-hidden="true"
            className="w-px bg-[var(--form-blue-border)] self-stretch"
          />

          <button className="flex-1 px-4 py-3 text-sm bg-[var(--form-blue)] text-white">
            Select Tokens
          </button>
        </div>

        <div className="mt-4">
          <div className="rounded-[24px] overflow-hidden shadow-sm w-full max-w-full md:max-w-[900px] lg:max-w-[1100px] h-auto mx-auto">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="w-full lg:w-64 bg-[#1E1E1E] p-6">
                <h3 className="text-white text-lg mb-4">Select network</h3>

                <div className="space-y-3">
                  {NETWORKS.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => {
                        setSelectedNetwork(n.id as NetworkKey);
                        setSelectedToken(
                          TOKENS[n.id as NetworkKey].tokens[0]?.symbol ?? null
                        );
                      }}
                      className={`w-full text-left flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors border ${
                        selectedNetwork === n.id
                          ? "border-[#6B4EFF] ring-1 ring-[#6B4EFF]"
                          : "border-[#666666] hover:bg-[rgba(255,255,255,0.02)]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden border border-zinc-800">
                          <Image
                            src={n.image}
                            alt={`${n.label} icon`}
                            width={28}
                            height={28}
                          />
                        </div>
                        <span className="text-sm text-white font-medium">
                          {n.label}
                        </span>
                      </div>

                      <span className="ml-2 flex items-center">
                        {selectedNetwork === n.id ? (
                          <span className="w-6 h-6 rounded-full bg-[#6B4EFF] flex items-center justify-center">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 12.5l1.8 1.8L15 10"
                                stroke="#fff"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="w-6 h-6" aria-hidden />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* divider: vertical on lg+, horizontal on smaller screens */}
              <div aria-hidden className="hidden lg:block w-px bg-[#666666]" />
              <div
                aria-hidden
                className="block lg:hidden h-px bg-[#666666] w-full my-4"
              />

              {/* right - tokens */}
              <div className="flex-1 bg-[#2A2A2A] p-6">
                <h3 className="text-white text-lg mb-4">Choose a token</h3>

                <div className="mb-4">
                  <div className="rounded-lg border border-[#666666] bg-[#1E1E1E] px-3 py-2 flex items-center gap-3 ">
                    <Image
                      height={16}
                      width={16}
                      src="/campaign/magnifying_glass.png"
                      alt="magnifying glass"
                    />
                    <Input
                      type="text"
                      placeholder="Search by name, symbol or address"
                      className="w-full text-sm text-text-gray bg-[#1E1E1E] border-0 pl-3 pr-4 py-1.5 focus-visible:outline-none focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {TOKENS[selectedNetwork as NetworkKey].tokens.map((t) => (
                    <button
                      key={t.symbol}
                      onClick={() => setSelectedToken(t.symbol)}
                      className={`w-full text-left flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors border ${
                        selectedToken === t.symbol
                          ? "border-[#6B4EFF] ring-1 ring-[#6B4EFF]"
                          : "border-[#666666] hover:bg-[rgba(255,255,255,0.02)]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden border border-zinc-800">
                          <Image
                            src={t.image}
                            alt={`${t.symbol} icon`}
                            width={28}
                            height={28}
                          />
                        </div>
                        <span className="text-sm text-white font-medium">
                          {t.symbol}
                        </span>
                      </div>

                      <span className="ml-2 flex items-center">
                        {selectedToken === t.symbol ? (
                          <span className="w-6 h-6 rounded-full bg-[#6B4EFF] flex items-center justify-center">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 12.8l2.1 2.1L15 11.5"
                                stroke="#fff"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="w-6 h-6" aria-hidden />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
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
  );
}
