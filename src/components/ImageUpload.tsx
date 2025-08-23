"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

export type ImageValue = { url: string; file?: File } | null;

export default function ImageUpload({
  value,
  onChange,
  accept = "image/*",
  variant = "cover",
  placeholder = "Upload",
  showRemove = true,
  className = "",
}: {
  value: ImageValue;
  onChange: (v: ImageValue) => void;
  accept?: string;
  variant?: "cover" | "avatar";
  placeholder?: string;
  showRemove?: boolean;
  className?: string;
}) {
  const coverInputRef = useRef<HTMLInputElement | null>(null);
  const avatarInputRef = useRef<HTMLInputElement | null>(null);

  const isBlobOrDataUrl = (u?: string) =>
    !!u && (u.startsWith("blob:") || u.startsWith("data:"));

  useEffect(() => {
    return () => {
      if (value && value.url?.startsWith("blob:")) {
        URL.revokeObjectURL(value.url);
      }
    };
  }, []);

  function handleCoverFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    onChange({ url, file: f });
  }

  function handleAvatarFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    onChange({ url, file: f });
  }

  function remove() {
    if (value?.file && value.url?.startsWith("blob:")) {
      URL.revokeObjectURL(value.url);
    }
    onChange(null);

    if (variant === "cover") {
      if (coverInputRef.current) coverInputRef.current.value = "";
    } else {
      if (avatarInputRef.current) avatarInputRef.current.value = "";
    }
  }

  if (variant === "avatar") {
    return (
      <div className={`relative inline-block ${className}`}>
        {value ? (
          <div className="relative">
            {isBlobOrDataUrl(value.url) ? (
              <img
                src={value.url}
                alt="avatar"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <Image
                src={value.url}
                alt="avatar"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover"
                unoptimized
              />
            )}

            {showRemove && (
              <button
                onClick={remove}
                aria-label="Remove image"
                className="absolute -right-2 -top-2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                ×
              </button>
            )}
          </div>
        ) : (
          <div className="relative inline-flex items-center justify-center">
            <label className="cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-[#0f1720] border-[var(--form-blue-border)] flex items-center justify-center overflow-hidden border  hover:border-zinc-600 transition-colors">
                <Image
                  src="/layout/camera.png"
                  alt={placeholder}
                  width={28}
                  height={28}
                />
              </div>
              <input
                ref={avatarInputRef}
                type="file"
                accept={accept}
                className="hidden"
                onChange={handleAvatarFile}
              />
            </label>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {value ? (
        <div className="relative">
          <div className="h-36 sm:h-44 rounded-md overflow-hidden border border-[var(--form-blue-border)] bg-[var(--form-blue)]">
            {isBlobOrDataUrl(value.url) ? (
              <img
                src={value.url}
                alt="preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Image
                src={value.url}
                alt="preview"
                fill
                className="object-cover"
                unoptimized
              />
            )}
          </div>

          {showRemove && (
            <button
              onClick={remove}
              aria-label="Remove cover"
              className="absolute right-3 top-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              ×
            </button>
          )}
        </div>
      ) : (
        <div className="h-36 sm:h-44 rounded-md border border-[var(--form-blue-border)] bg-[#02152a] flex items-center justify-center text-slate-400">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <Image
                  src="/layout/camera.png"
                  alt="camera"
                  width={30}
                  height={18}
                />

                <input
                  ref={coverInputRef}
                  type="file"
                  accept={accept}
                  className="hidden"
                  onChange={handleCoverFile}
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {variant === "cover" && (
        <div className="absolute left-1/2 -bottom-6 -translate-x-1/2">
          <label className="cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#02152a] border-2 border-[var(--form-blue-border)] flex items-center justify-center shadow-lg  transition-colors">
              <Image
                src="/layout/camera.png"
                alt="camera"
                width={18}
                height={18}
              />
            </div>

            <input
              type="file"
              accept={accept}
              className="hidden"
              onChange={handleCoverFile}
            />
          </label>
        </div>
      )}
    </div>
  );
}
