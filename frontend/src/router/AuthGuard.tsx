import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes } from '@router/index.ts';
import { selectAccessToken } from '@app/slices/auth.ts';
import { useAppSelector } from '@hooks/store.ts';

type Props = {
  children: ReactNode;
  shouldBeLogged?: boolean;
};

const AuthGuard: FC<Props> = ({ children, shouldBeLogged = true }) => {
  const accessToken = useAppSelector(selectAccessToken);

  if (shouldBeLogged ? accessToken : !accessToken) {
    return <>{children}</>;
  }

  return <Navigate to={Routes.Login} />;
};

export default AuthGuard;
