/* eslint-disable @typescript-eslint/no-explicit-any */

import { getBalance, getChainId, readContract } from "@wagmi/core";

import TokenABI from "./abi/Token.json";

import { networkContractAddresses } from "./constants";
import { formatEther, zeroAddress } from "viem";
import { tokenNames } from "./tokensConfig";
import { config } from "@/lib/networks/config";

async function getCoinBalance(
  coin: string,
  address: string | undefined
): Promise<string> {
  if (coin == tokenNames.eth) {
    const data = await getBalance(config, {
      address: address as `0x${string}`,
    });
    console.log({ data });
    return formatEther(data.value);
  }
  // ERC 20
  const tokenAddress = getTokenAddress(coin);
  if (tokenAddress) {
    const result = await readContract(config, {
      address: tokenAddress as `0x${string}`,
      abi: TokenABI,
      functionName: "balanceOf",
      args: [address],
    });

    return formatEther(result as bigint);
  }

  return "0";
}

function getTokenAddress(tokenName: string) {
  const chainId = getChainId(config);
  let tokenAddress: string = "";
  switch (tokenName.toLowerCase()) {
    case tokenNames.eth.toLowerCase():
      tokenAddress = zeroAddress;
      break;
    case tokenNames.usdc.toLowerCase():
      tokenAddress = networkContractAddresses[`${chainId}`].usdcAddress;
      break;
    case tokenNames.frenchie.toLowerCase():
      tokenAddress = networkContractAddresses[`${chainId}`].frenchieAddress;
      break;
    case tokenNames.enb.toLowerCase():
      tokenAddress = networkContractAddresses[`${chainId}`].enbAddress;
      break;
    case tokenNames.cngn.toLowerCase():
      tokenAddress = networkContractAddresses[`${chainId}`].cngnAddress;
      break;
    case tokenNames.bhusky.toLowerCase():
      tokenAddress = networkContractAddresses[`${chainId}`].bhuskyAddress;
    default:
      break;
  }
  return tokenAddress;
}

export { getCoinBalance, getTokenAddress };
