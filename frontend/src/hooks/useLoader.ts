import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/store';
import { startLoading, stopLoading } from '@app/slices/ui';

const useLoader = (loading: boolean, id: string): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) {
      dispatch(startLoading(id));
    } else {
      dispatch(stopLoading(id));
    }

    return () => {
      dispatch(stopLoading(id));
    };
  }, [loading, id]);
};

export default useLoader;
