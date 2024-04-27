import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@ui';
import {
  AppWrapper,
  ContentWrapper,
  PageWrapper,
} from '@modules/home/Home.styled';
import { Box } from '@mui/material';

const Home: FC = () => (
  <AppWrapper>
    <Header />

    <PageWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>

      <Box flex={1} />

      <Footer />
    </PageWrapper>
  </AppWrapper>
);

export default Home;
