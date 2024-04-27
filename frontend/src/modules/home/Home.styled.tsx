import { Stack, styled } from '@mui/material';

export const AppWrapper = styled(Stack)(({ theme }) => ({
  background: theme.palette.primary.light,
  overflow: 'hidden',
}));

export const PageWrapper = styled(Stack)({
  marginTop: '70px',
  height: 'calc(100dvh - 70px)',
  overflowY: 'auto',
});

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  minHeight: '70dvh',
}));
