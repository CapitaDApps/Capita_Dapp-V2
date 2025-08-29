"use client";
import React from "react";

export default function EditError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("Error in /profile/edit:", error);
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
      <p className="text-sm text-secondary-text mb-4">
        An unexpected error occurred while loading the edit profile page.
      </p>
      {/* <div className="mb-4 w-full max-w-2xl">
        <details className="text-xs bg-[#0b0b0b] p-3 rounded text-left">
          <summary className="cursor-pointer">Show error details</summary>
          <pre className="mt-2 whitespace-pre-wrap text-[12px]">{error?.message}</pre>
          <pre className="mt-2 whitespace-pre-wrap text-[11px] text-secondary-text">{error?.stack}</pre>
        </details>
      </div> */}
      <div className="flex gap-2">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-primary-text text-primary-bg rounded"
        >
          Try again
        </button>
        <a href="/profile" className="px-4 py-2 border rounded text-sm">
          Home
        </a>
      </div>
    </div>
  );
}
