"use client";

import React, { useEffect, useState } from "react";
import FloatingReportButton from "./FloatingReportButton";
import Image from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ReportFlow({ open, onClose }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selected, setSelected] = useState<string>("fraud");
  const [details, setDetails] = useState<string>("");

  useEffect(() => {
    if (!open) {
      setStep(1);
      setSelected("fraud");
      setDetails("");
    }
  }, [open]);

  if (!open) return null;

  // Compact preview card (first click)
  if (step === 1) {
    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />

        <FloatingReportButton
          top="6rem"
          right="9rem"
          onClick={() => setStep(2)}
        >
          <div className="text-lg py-5">Report Campaign</div>
          <Image
            src={"/layout/flag.svg"}
            width={12}
            height={12}
            alt="report flag"
          />
        </FloatingReportButton>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />

        <div
          role="dialog"
          aria-modal="true"
          className="relative z-10 w-full max-w-md rounded-lg bg-[#071018] border border-[var(--form-blue-border)] shadow-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3">
            <h3 className="text-lg font-semibold">Gathering Info</h3>
            <button
              onClick={onClose}
              aria-label="Close report dialog"
              className="text-slate-400"
            >
              ✕
            </button>
          </div>

          <div className="border-t border-[#1b2226]" />
          <div className="px-6 pt-6 pb-4 max-h-[68vh] overflow-y-auto">
            <h2 className="text-2xl font-medium text-white mb-6">
              What type of issue are you reporting?
            </h2>

            <div className="space-y-6">
              <label className="flex justify-between items-start gap-4">
                <div>
                  <div className="font-medium text-white">
                    Fraudulent or scam
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    The campaign appears deceptive, with intent to mislead or
                    steal funds
                  </div>
                </div>
                <input
                  type="radio"
                  name="report"
                  value="fraud"
                  checked={selected === "fraud"}
                  onChange={() => setSelected("fraud")}
                  className="w-5 h-5 mt-2 accent-[#0070f3]"
                />
              </label>

              <label className="flex justify-between items-start gap-4">
                <div>
                  <div className="font-medium text-white">
                    Misleading or false information
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    Details provided don't match reality or are intentionally
                    inaccurate
                  </div>
                </div>
                <input
                  type="radio"
                  name="report"
                  value="misleading"
                  checked={selected === "misleading"}
                  onChange={() => setSelected("misleading")}
                  className="w-5 h-5 mt-2 accent-[#0070f3]"
                />
              </label>

              <label className="flex justify-between items-start gap-4">
                <div>
                  <div className="font-medium text-white">
                    Offensive or harmful content
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    The campaign includes abusive, discriminatory, or unsafe
                    material
                  </div>
                </div>
                <input
                  type="radio"
                  name="report"
                  value="offensive"
                  checked={selected === "offensive"}
                  onChange={() => setSelected("offensive")}
                  className="w-5 h-5 mt-2 accent-[#0070f3] bg-transparent"
                />
              </label>

              <label className="flex justify-between items-start gap-4">
                <div>
                  <div className="font-medium text-white">
                    Violates platform terms
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    The campaign includes abusive, discriminatory, or unsafe
                    material
                  </div>
                </div>
                <input
                  type="radio"
                  name="report"
                  value="terms"
                  checked={selected === "terms"}
                  onChange={() => setSelected("terms")}
                  className="w-5 h-5 mt-2 accent-[#0070f3]"
                />
              </label>

              <label className="flex justify-between items-start gap-4">
                <div>
                  <div className="font-medium text-white">Other</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Report an issue not listed above; please describe
                  </div>
                </div>
                <input
                  type="radio"
                  name="report"
                  value="other"
                  checked={selected === "other"}
                  onChange={() => setSelected("other")}
                  className="w-5 h-5 mt-2 accent-[#0070f3]"
                />
              </label>

              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe the issue (optional)"
                className="w-full mt-2 h-28 rounded-lg border border-[#2b2f33] p-4 bg-transparent text-white placeholder:text-slate-500 resize-vertical"
              />
            </div>
          </div>

          <div className="border-t border-[#1b2226] px-6 py-4 bg-[#071018]">
            <button
              onClick={() => setStep(3)}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#003DEF] to-[#001F7A] text-white text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-md rounded-lg bg-[#071018] border border-[var(--form-blue-border)] p-6 shadow-lg text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
            ✓
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2">Thank you.</h3>
        <p className="text-slate-300 mb-6">
          Your report has been submitted and will be reviewed within a few days.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => {
              setStep(1);
              onClose();
            }}
            className="px-6 w-50 py-2 rounded-full bg-gradient-to-r from-[#003DEF] to-[#001F7A] text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
