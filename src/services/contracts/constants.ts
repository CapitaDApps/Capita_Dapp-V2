import { base, baseSepolia } from "wagmi/chains";

type NetworkType = {
  [key: string]: {
    fundingFactoryAddress: string;
    usdcAddress: string;
    enbAddress: string;
    frenchieAddress: string;
    cngnAddress: string;
    bhuskyAddress: string;
  };
};

export const base_sepolia = baseSepolia.id.toString();
export const base_mainnet = base.id.toString();

export const networkContractAddresses: NetworkType = {
  [base_mainnet]: {
    fundingFactoryAddress: "0x2ce04B8F4838581A3D8CCF3116FC74C75D4214E7",
    usdcAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    enbAddress: "0xf73978b3a7d1d4974abae11f696c1b4408c027a0",
    frenchieAddress: "0xf42c45e5b79c9564c95a9b8641518a58b0d089de",
    cngnAddress: "0x46C85152bFe9f96829aA94755D9f915F9B10EF5F",
    bhuskyAddress: "0x20895E16d5aE9D6e0Ca127ED093a7cBE65dCb018",
  },
  [base_sepolia]: {
    fundingFactoryAddress: "0xB4834C1Cafb0894743d99f85C33f77928D8D9D44",
    usdcAddress: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    enbAddress: "0xc3184FC54B029cfDF86D1Cc393EF9626Cbe270E5",
    frenchieAddress: "0xc3184FC54B029cfDF86D1Cc393EF9626Cbe270E5",
    cngnAddress: "0x7E29CF1D8b1F4c847D0f821b79dDF6E67A5c11F8",
    bhuskyAddress: "0xc3184FC54B029cfDF86D1Cc393EF9626Cbe270E5",
  },
};

export const contractEvents = {
  FundingFactory: {
    ChainFundMeCreated: "ChainFundMeCreated",
  },

  ChainFundMe: {
    Deposited: "Deposited",
    WithdrawnToken: "WithdrawnToken",
    FailedOtherTokensWithdrawal: "FailedOtherTokensWithdrawal",
    EndedCampaign: "EndedCampaign",
  },

  token: {
    Approval: "Approval",
  },
};
