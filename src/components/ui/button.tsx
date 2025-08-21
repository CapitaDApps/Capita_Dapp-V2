"use client";
import React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
