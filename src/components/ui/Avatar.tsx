"use client";

import React from "react";
import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
};

export default function Avatar({
  src = "/layout/avatarboy.svg",
  alt = "avatar",
  size = 32,
  className = "",
}: Props) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}
