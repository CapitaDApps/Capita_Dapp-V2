"use client";

import React from "react";

interface Props {
  top?: string; // CSS value, e.g. "96px" or "6rem"
  right?: string; // CSS value, e.g. "24px" or "2rem"
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export default function FloatingReportButton({
  top = "6rem",
  right = "1.5rem",
  onClick,
  children,
  className = "",
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open report dialog"
      style={{ position: "fixed", top, right, zIndex: 9999 }}
      className={
        "rounded-lg bg-[#0b0c0d] border border-[#1b2226] px-6 py-3 shadow-md flex items-center gap-4 " +
        className
      }
    >
      {children}
    </button>
  );
}
