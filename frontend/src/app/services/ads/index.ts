import authorizedApi from '@app/services/authorizedApi';
import baseApi from '@app/services/baseApi';
import { QueryTags } from '@app';
import {
  IAdsParams,
  IAllAdsResponse,
  ICreateAdRequest,
  IMyAd,
} from '@app/services/ads/types.ts';
import queryString from 'query-string';

const adsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAds: builder.query<IAllAdsResponse, IAdsParams>({
      query: (params) => ({
        url: `/advertisement/get_all_advert/?${queryString.stringify({
          categories: params.categories?.length ? params.categories : undefined,
          priority: params.priority,
        })}`,
      }),
      providesTags: [QueryTags.Ads],
    }),
  }),
});

export const adsAuthApi = authorizedApi.injectEndpoints({
  endpoints: (builder) => ({
    getOneAd: builder.query<
      { contact_email: string; contact_phone: string },
      number
    >({
      query: (id) => `/advertisement/get_all_advert/${id}/contacts`,
      providesTags: [QueryTags.Ad],
    }),

    getMyAds: builder.query<IMyAd[], void>({
      query: () => '/advertisement/get_profile_advert/',
      providesTags: [QueryTags.Ads],
    }),

    createAd: builder.mutation<void, ICreateAdRequest>({
      query: (body) => {
        const formData = new FormData();
        formData.append('title', body.title);
        formData.append('description', body.description);
        formData.append('location', body.location);

        formData.append('priority', body.priority);
        formData.append('time_validity', body.time_validity);

        body.categories.forEach((category) =>
          formData.append('categories', category.toString()),
        );

        formData.append('contact_email', body.contact_email);
        formData.append('contact_phone', body.contact_phone);

        if (body.pictures) {
          Array.from(body.pictures).forEach((picture) =>
            formData.append('pictures', picture),
          );
        }

        return {
          url: '/advertisement/create_help_advert/',
          method: 'POST',
          body: formData,
        };
      },
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
