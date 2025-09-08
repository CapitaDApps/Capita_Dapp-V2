import { ChainDocument } from "./chain.types";
import { CommentDocument } from "./comment.types";
import { UserDocument } from "./user.types";

export type CampaignDocument = {
  title: string;
  description: string;
  image: File;
  coverImage: File;
  otherImages: File[];
  category: string;
  targetAmount: number;
  startDate: string;
  endDate: string;
  chain: string;
  userCategory: string;
};
export type ReturnCampaignDocument = {
  title: string;
  description: string;
  image: string;
  coverImage: string;
  otherImages: string[];
  category: string;
  targetAmount: number;
  currentAmount: number;
  owner: UserDocument;
  startDate: Date;
  endDate: Date;
  chain: ChainDocument;
  ipfsId: string;
  userCategory: string;
  comments: CommentDocument[];
  likes: number;
  seen: number;
  cmid: string;
  published: boolean;
};
