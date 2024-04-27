import { RouterProvider } from 'react-router-dom';
import { RouterSettings } from '@router';
import { Loader } from '@/ui';
import useProfile from '@hooks/useProfile.ts';
import { useAppSelector } from '@hooks/store.ts';
import { selectLoadingIds } from '@app/slices/ui.ts';

const App = () => {
  const loadingsId = useAppSelector(selectLoadingIds);

  // TODO remove after CORS fix
  useProfile();

  return (
    <>
      <RouterProvider
        router={RouterSettings}
        fallbackElement={<>Loading...</>}
      />

      <Loader open={Boolean(loadingsId.length)} />
    </>
  );
};

export default App;
