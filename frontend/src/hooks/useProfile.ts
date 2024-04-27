import { IProfile, useGetProfileQuery } from '@app/services/users';
import useLoader from '@hooks/useLoader.ts';

const useProfile = () => {
  const { data, isLoading, isFetching } = useGetProfileQuery();
  useLoader(isLoading || isFetching, 'get-me');

  return (data ?? {}) as IProfile;
};

export default useProfile;
