import {
  ICreateUserRequest,
  ILoginRequest,
  ILoginResponse,
  IProfile,
} from '@app/services/users/types';
import authorizedApi from '@app/services/authorizedApi';
import baseApi from '@app/services/baseApi';
import { QueryTags } from '@app';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<ILoginResponse, ILoginRequest>({
      query: (body) => ({
        url: '/login/',
        method: 'POST',
        body,
      }),

      invalidatesTags: [QueryTags.User],
    }),

    createUser: builder.mutation<void, ICreateUserRequest>({
      query: (body) => ({
        url: '/registration/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const usersApi = authorizedApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<IProfile, void>({
      query: () => '/profile/',
      providesTags: [QueryTags.User],
    }),
  }),
});

export const { useSignInMutation, useCreateUserMutation } = authApi;
export const { useGetProfileQuery } = usersApi;
