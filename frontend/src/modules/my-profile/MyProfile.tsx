import { FC } from 'react';
import MyInfo from '@modules/my-profile/components/MyInfo/MyInfo.tsx';
import { Stack } from '@mui/material';
import MyAds from '@modules/my-profile/components/MyAds/MyAds.tsx';
import useProfile from '@hooks/useProfile.ts';
import { UserTypes } from '@constants';

const MyProfile: FC = () => {
  const [{ user_type = UserTypes.NeedHelp }] = useProfile();

  return (
    <Stack gap={6} pt={3} pb={6}>
      <MyInfo />
      {user_type === UserTypes.NeedHelp && <MyAds />}
    </Stack>
  );
};

export default MyProfile;
