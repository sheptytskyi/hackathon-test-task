import { AdPriority, AdStatus } from '@constants/entities/ad.ts';

export type ICreateAdRequest = {
  title: string;
  description: string;
  categories: string[];
  location: string;
  contats: {
    email: string;
    phone: string;
  };
  pictures: File[];
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
  advert_id: number;
  title: string;
  description: string;
  categories: string[];
  location: string;
  pictures: string[];
  status: AdStatus;
  time_validity: string;
  priority: AdPriority;
};

export type IAllAdsResponse = {
  adrverties: IAd[];
};