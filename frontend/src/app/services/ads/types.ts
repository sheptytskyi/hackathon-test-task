import { AdPriority, AdStatus } from '@constants/entities/ad.ts';

export type ICreateAdRequest = {
  title: string;
  description: string;
  categories: number[];
  location: string;
  contacts: {
    email: string;
    phone: string;
  };
  pictures: FileList | null;
  status: AdStatus;
  time_validity: string;
  priority: AdPriority;
};

export type IMyAd = {
  advert_id: number;
  user_name: string;
  title: string;
  description: string;
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
