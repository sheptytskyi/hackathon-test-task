import { IProfile } from '@app/services/users/types';
import authorizedApi from '@app/services/authorizedApi';
import baseApi from '@app/services/baseApi';
import { QueryTags } from '@app';
import {
  IAllAdsResponse,
  ICreateAdRequest,
  IMyAd,
} from '@app/services/ads/types.ts';

const adsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAds: builder.query<IAllAdsResponse, void>({
      query: () => '/ads/',
      providesTags: [QueryTags.Ads],
    }),
  }),
});

export const adsAuthApi = authorizedApi.injectEndpoints({
  endpoints: (builder) => ({
    getOneAd: builder.query<IProfile, string>({
      query: (id: string) => `/ads/${id}/`,
      providesTags: [QueryTags.Ad],
    }),

    getMyAds: builder.query<IMyAd, void>({
      query: () => '/advertisement/get_profile_advert/',
      providesTags: [QueryTags.Ads],
    }),

    createAd: builder.mutation<void, ICreateAdRequest>({
      query: (body) => ({
        url: '/advertisement/create_help_advert/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [QueryTags.Ads],
    }),

    deleteMyAd: builder.mutation<void, void>({
      query: () => ({
        url: `/advertisement/delete_help_advert/`,
        method: 'DELETE',
      }),
      invalidatesTags: [QueryTags.Ads],
    }),
  }),
});

export const { useGetAdsQuery } = adsApi;
export const {
  useGetMyAdsQuery,
  useGetOneAdQuery,
  useCreateAdMutation,
  useDeleteMyAdMutation,
} = adsAuthApi;
