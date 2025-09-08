import { clsx, type ClassValue } from "clsx";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateAddr(addr: string | undefined, length = 5) {
  if (!addr) return "";
  const firstPart = addr.slice(0, length);
  const secondPart = addr.slice(addr.length - length);
  return `${firstPart}...${secondPart}`;
}

export const handleCopyAddress = async (address: string | undefined) => {
  if (!address) return;
  await navigator.clipboard.writeText(address);
  toast.success("Address copied to clipboard", {
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
  });
};
