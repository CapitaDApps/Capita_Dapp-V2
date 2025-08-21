"use client";
import React from "react";

export function Input({ className = "", ...props }: any) {
  return <input {...props} className={`bg-transparent ${className}`} />;
}
