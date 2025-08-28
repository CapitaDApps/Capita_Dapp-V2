"use client";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ type, ...props }: InputProps) {
  if (type === "file") {
    // strip value prop for file inputs
    const { value, ...rest } = props;
    return <input type="file" {...rest} />;
  }
  return <input type={type} {...props} />;
}
