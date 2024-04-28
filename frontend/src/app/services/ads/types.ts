import { AdPriority, AdStatus } from '@constants/entities/ad.ts';

export type ICreateAdRequest = {
  title: string;
  description: string;
  categories: number[];
  location: string;
  contact_email: string;
  contact_phone: string;
  pictures: FileList | null;
  status: AdStatus;
  time_validity: string;
  priority: AdPriority;
};

export type IMyAd = {
  id: number;
  user_name: string;
  title: string;
  description: string;
  status: AdStatus;
};

export type IAd = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  location: string;
  pictures: { picture: string }[];
  status: AdStatus;
  time_validity: string;
  priority: AdPriority;
};

export type IAllAdsResponse = IAd[];

export interface IAdsParams {
  categories?: number[];
  priority?: AdPriority;
}
