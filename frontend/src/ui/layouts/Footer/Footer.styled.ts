import { Stack, styled } from '@mui/material';

export const Wrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  backgroundColor: theme.palette.primary.main,

  paddingTop: 64,
  gap: 40,
}));

export const ContactsWrapper = styled(Stack)(({ theme }) => ({
  borderLeft: `1px solid ${theme.palette.common.white}`,
  borderTop: `1px solid ${theme.palette.common.white}`,
  borderRadius: '50px 0 0 0',
  flex: 1,

  justifyContent: 'space-between',
  padding: 30,
}));
