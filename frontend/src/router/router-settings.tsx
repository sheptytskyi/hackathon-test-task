import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Routes } from '@router';

const Home = lazy(() => import('@modules/home'));
const HomeContent = lazy(() =>
  import('@modules/home').then((module) => ({ default: module.HomeContent })),
);
const Login = lazy(() => import('@modules/login'));
const Registration = lazy(() => import('@modules/registration'));
const Advertisements = lazy(() => import('@modules/advertisements'));
const AdDetails = lazy(() => import('@modules/ad-details'));
const MyAds = lazy(() => import('@modules/my-ads'));

// TODO: Add roles guard

const RouterSettings = createBrowserRouter([
  {
    path: Routes.Home,
    element: <Home />,
    children: [
      { index: true, element: <HomeContent /> },
      { path: Routes.Login, element: <Login /> },
      { path: Routes.Register, element: <Registration /> },
      { path: Routes.Advertisements, element: <Advertisements /> },
      { path: Routes.MyAdvertisements, element: <MyAds /> },
      { path: Routes.Advertisement, element: <AdDetails /> },
    ],
  },

  {
    path: '*',
    element: <Navigate to={Routes.Home} replace />,
  },
]);

export default RouterSettings;
