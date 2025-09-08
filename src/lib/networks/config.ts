import { createConfig } from "@privy-io/wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { http } from "wagmi";

const mainnetConfig = createConfig({
  chains: [base],

  transports: {
    [base.id]: http(
      `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
    ),
  },
});

const devConfig = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(
      `https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
    ),
  },
});

export const config =
  process.env.NEXT_PUBLIC_PRODUCTION == "true" ? mainnetConfig : devConfig;

export const connectingChain =
  process.env.NEXT_PUBLIC_PRODUCTION == "true" ? base : baseSepolia;
