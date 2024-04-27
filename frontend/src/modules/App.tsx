import { RouterProvider } from 'react-router-dom';
import { RouterSettings } from '@router';
import { Loader } from '@/ui';
import useProfile from '@hooks/useProfile.ts';

const App = () => {
  // TODO remove after CORS fix
  useProfile();

  return (
    <>
      <RouterProvider
        router={RouterSettings}
        fallbackElement={<>Loading...</>}
      />

      <Loader />
    </>
  );
};

export default App;
