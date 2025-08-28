"use client";
import React from "react";

type InputValue = string | readonly string[] | number | undefined | File;

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> & {
  className?: string;
  value?: InputValue;
};

export function Input({ type, value, ...props }: InputProps) {
  if (type === "file") {
    // ❌ Don't pass `value` to file inputs (browser blocks it anyway)
    return <input type="file" {...props} />;
  }

  // ✅ Safe for other input types
  return <input type={type} {...props} />;
}
