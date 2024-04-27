import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useLogout from '@hooks/useLogout';
import { Box, Button, Typography } from '@mui/material';
import useProfile from '@hooks/useProfile.ts';
import { UserTypes } from '@constants';
import { Routes } from '@router/index.ts';

type Props = {
  role: UserTypes;
  children: ReactNode;
};

const RoleGuard: FC<Props> = ({ children, role }) => {
  const profile = useProfile();
  const handleLogout = useLogout();

  if (!profile) {
    return null;
  }

  if (!profile.user_type) {
    return (
      <>
        <Typography variant="h3" align="center">
          Your role was unable to identify.
        </Typography>

        <Box width={250} mx="auto" display="flex" flexDirection="column">
          <Button onClick={handleLogout} sx={{ mt: 2 }}>
            Logout
          </Button>
        </Box>
      </>
    );
  }

  if (role === profile.user_type) {
    return <>{children}</>;
  }

  return <Navigate to={Routes.Advertisements} />;
};

export default RoleGuard;
