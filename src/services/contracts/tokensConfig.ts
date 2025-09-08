import { Token } from "@/types/token.types";

export const tokenNames: Token = {
  usdc: "USDC(base)",
  eth: "Eth(base)",
  frenchie: "Frenchie",
  enb: "ENB",
  cngn: "CNGN",
  bhusky: "BHUSKY",
};

export const tokens = [
  {
    name: tokenNames.eth,
    src: "/tokens/eth.svg",
    type: "default" as const,
    decimals: 18,
  },
  {
    name: tokenNames.usdc,
    src: "/tokens/usdc.svg",
    type: "default" as const,
    decimals: 6,
  },
  {
    name: tokenNames.cngn,
    src: "/tokens/cngn.svg",
    type: "optional" as const,
    decimals: 6,
  },
  {
    name: tokenNames.frenchie,
    src: "/tokens/frenchie.svg",
    type: "optional" as const,
    decimals: 18,
  },
  {
    name: tokenNames.enb,
    src: "/tokens/enb.svg",
    type: "optional" as const,
    decimals: 18,
  },
  {
    name: tokenNames.bhusky,
    src: "/tokens/bhusky.svg",
    type: "optional" as const,
    decialms: 18,
  },
];
