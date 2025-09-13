import { getAuthToken } from "./config";
import axios from "axios";

const prod = process.env.NEXT_PUBLIC_PRODUCTION == "true";

const url = prod
  ? process.env.NEXT_PUBLIC_BASE_API_URL
  : "http://localhost:3000";

const fullUrl = `${url}/api/v1/campaign/funder`;

const baseUrl = prod ? "/api/v1/campaign/funder" : fullUrl;

export type FundDataType = {
  userId: string;
  campaignId: string;
  chainId: number;
  tokenAddress: string;
  amount: string;
};

const addFunder = async (data: FundDataType) => {
  const token = await getAuthToken();
  const resp = await axios.post(baseUrl, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log({ addFunderResp: resp.data });
  return resp.data;
};

export { addFunder };
