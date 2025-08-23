export type NetworkKey = "base" | "solana" | "bnb";

export const CREATOR_TYPES = [
  "Individual",
  "Organization",
  "Start up",
  "DAO",
] as const;
export const CATEGORIES = [
  "Travel",
  "Health",
  "Academics",
  "Crises Relief",
  "Community Rescue",
  "Creatives/Community",
  "Organizations",
  "Personal",
  "Phoenix Baker",
] as const;

export const NETWORKS: { id: NetworkKey; label: string; image: string }[] = [
  { id: "base", label: "Base", image: "/tokens/base.svg" },
  { id: "solana", label: "Solana", image: "/tokens/solana.svg" },
  { id: "bnb", label: "BNB", image: "/tokens/binance.svg" },
];

export const TOKENS: Record<
  NetworkKey,
  { tokens: { symbol: string; image: string }[] }
> = {
  base: {
    tokens: [
      { symbol: "ETH", image: "/tokens/eth.svg" },
      { symbol: "USDC", image: "/tokens/usdc.svg" },
      { symbol: "CNGN", image: "/tokens/cngn.svg" },
      { symbol: "FRENCHIE", image: "/tokens/frenchie.svg" },
      { symbol: "ENB", image: "/tokens/enb.svg" },
      { symbol: "BHUSKY", image: "/tokens/bhusky.svg" },
    ],
  },
  solana: { tokens: [{ symbol: "UNICOIN", image: "/tokens/unicorn.svg" }] },
  bnb: {
    tokens: [
      { symbol: "BNB", image: "/tokens/binance.svg" },
      { symbol: "ETH", image: "/tokens/eth.svg" },
    ],
  },
};
