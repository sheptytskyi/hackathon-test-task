import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Routes } from '@router';
import { Loader } from '@ui';
import AuthGuard from '@router/AuthGuard.tsx';
import RoleGuard from '@router/RoleGuard.tsx';
import { UserTypes } from '@constants';

const Home = lazy(() => import('@modules/home'));
const HomeContent = lazy(() =>
  import('@modules/home').then((module) => ({ default: module.HomeContent })),
);
const Login = lazy(() => import('@modules/login'));
const Registration = lazy(() => import('@modules/registration'));
const Advertisements = lazy(() => import('@modules/advertisements'));
const AdDetails = lazy(() => import('@modules/ad-details'));
const MyAds = lazy(() => import('@modules/my-ads'));
const MyProfile = lazy(() => import('@modules/my-profile'));

// TODO: Add roles guard

const RouterSettings = createBrowserRouter([
  {
    path: Routes.Home,
    element: (
      <Suspense fallback={<Loader open />}>
        <Home />
      </Suspense>
    ),
    children: [
      { index: true, element: <HomeContent /> },
      {
        path: Routes.Login,
        element: (
          <AuthGuard shouldBeLogged={false}>
            <Login />
          </AuthGuard>
        ),
      },
      {
        path: Routes.Register,
        element: (
          <AuthGuard shouldBeLogged={false}>
            <Registration />
          </AuthGuard>
        ),
      },
      { path: Routes.Advertisements, element: <Advertisements /> },
      {
        path: Routes.MyAdvertisements,
        element: (
          <AuthGuard>
            <RoleGuard role={UserTypes.NeedHelp}>
              <MyAds />
            </RoleGuard>
          </AuthGuard>
        ),
      },
      {
        path: Routes.Advertisement,
        element: (
          <AuthGuard>
            <RoleGuard role={UserTypes.GiveHelp}>
              <AdDetails />
            </RoleGuard>
          </AuthGuard>
        ),
      },
      {
        path: Routes.MyProfile,
        element: (
          <AuthGuard>
            <MyProfile />
          </AuthGuard>
        ),
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to={Routes.Home} replace />,
  },
]);

export default RouterSettings;
