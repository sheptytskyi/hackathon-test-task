import { useGetProfileQuery } from '@app/services/users';
import useLoader from '@hooks/useLoader.ts';
import { IProfile } from '@app/services/users/types.ts';
import { useAppSelector } from '@hooks/store.ts';
import { selectAccessToken } from '@app/slices/auth.ts';
import { skipToken } from '@reduxjs/toolkit/query';

type UserProfile = IProfile & {
  isLogged: boolean;
};

const useProfile = (): UserProfile => {
  const accessToken = useAppSelector(selectAccessToken);

  const { data, isLoading, isFetching } = useGetProfileQuery(
    accessToken ? undefined : skipToken,
  );

  useLoader(isLoading || isFetching, 'get-me');

  return {
    ...((data ?? {}) as IProfile),
    isLogged: !!accessToken,
  };
};

export default useProfile;
