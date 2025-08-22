"use client";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className = "", ...props }: InputProps) {
  return <input {...props} className={`bg-transparent ${className}`} />;
}
