import { base, bsc } from "wagmi/chains";

export const chainConfig = [
  {
    value: "base",
    id: base.id.toString(),
    name: "Base",
    image: "/tokens/base.svg",
  },
  {
    value: "solana",
    name: "Solana",
    id: "sol",
    image: "/tokens/solana.svg",
  },
  {
    value: "bnb",
    id: bsc.id.toString(),
    name: "BNB",
    image: "/tokens/binance.svg",
  },
];
