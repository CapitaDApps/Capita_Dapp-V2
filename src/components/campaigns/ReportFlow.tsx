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

  // Full report form
  if (step === 2) {
    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />

        <div
          role="dialog"
          aria-modal="true"
          className="relative z-10 w-full max-w-md rounded-lg bg-[#071018] border border-[var(--form-blue-border)] p-4 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Gathering Info</h3>
            <button
              onClick={onClose}
              aria-label="Close report dialog"
              className="text-slate-400"
            >
              ✕
            </button>
          </div>

          <div className="text-sm text-slate-300 mb-3">
            What type of issue are you reporting?
          </div>

          <div className="space-y-3 mb-3">
            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="report"
                value="fraud"
                checked={selected === "fraud"}
                onChange={() => setSelected("fraud")}
              />
              <div>
                <div className="font-medium">Fraudulent or scam</div>
                <div className="text-xs text-slate-400">
                  The campaign appears deceptive, with intent to mislead or
                  steal funds
                </div>
              </div>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="report"
                value="misleading"
                checked={selected === "misleading"}
                onChange={() => setSelected("misleading")}
              />
              <div>
                <div className="font-medium">
                  Misleading or false information
                </div>
                <div className="text-xs text-slate-400">
                  Details provided don't match reality or are intentionally
                  inaccurate
                </div>
              </div>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="report"
                value="offensive"
                checked={selected === "offensive"}
                onChange={() => setSelected("offensive")}
              />
              <div>
                <div className="font-medium">Offensive or harmful content</div>
                <div className="text-xs text-slate-400">
                  The campaign includes abusive, discriminatory, or unsafe
                  material
                </div>
              </div>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="radio"
                name="report"
                value="other"
                checked={selected === "other"}
                onChange={() => setSelected("other")}
              />
              <div>
                <div className="font-medium">Other</div>
                <div className="text-xs text-slate-400">
                  Report an issue not listed above; please describe
                </div>
              </div>
            </label>
          </div>

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Describe the issue (optional)"
            className="w-full min-h-[100px] rounded-md bg-[#0b1116] border border-[#20303a] p-3 text-white resize-vertical mb-3"
          />

          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2 rounded-md bg-[#22334d]"
            >
              Cancel
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-3 py-2 rounded-md bg-gradient-to-r from-[#003DEF] to-[#001F7A]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Success
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
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#003DEF] to-[#001F7A] text-white"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
