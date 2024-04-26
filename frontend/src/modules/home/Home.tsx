import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
  );
};

export default Home;
