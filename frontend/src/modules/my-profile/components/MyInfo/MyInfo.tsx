import { FC } from 'react';
import { InfoItem, Section } from '@ui';
import useProfile from '@hooks/useProfile.ts';
import { Button, Grid } from '@mui/material';
import { ReadableUserTypes, UserTypes } from '@constants';
import dayjs from 'dayjs';
import { Logout } from '@mui/icons-material';
import useLogout from '@hooks/useLogout.ts';

const MyInfo: FC = () => {
  const [
    {
      first_name = 'Volodymyr',
      last_name = 'Melnyk',
      email = 'fron10der@gmail.com',
      date_joined = '2021-10-10',
      user_type = UserTypes.GiveHelp,
    },
  ] = useProfile();
  const handleLogout = useLogout();

  return (
    <Section title="Мої дані">
      <Grid container spacing={5} width="500px">
        <Grid item xs={6}>
          <InfoItem title="Ім'я">{first_name}</InfoItem>
        </Grid>

        <Grid item xs={6}>
          <InfoItem title="Прізвище">{last_name}</InfoItem>
        </Grid>

        <Grid item xs={6}>
          <InfoItem title="E-mail">{email}</InfoItem>
        </Grid>

        <Grid item xs={6}>
          <InfoItem title="Роль">{ReadableUserTypes[user_type]}</InfoItem>
        </Grid>

        <Grid item xs={12}>
          <InfoItem title="Дата реєстрації">
            {dayjs(date_joined).format('DD.MM.YYYY')}
          </InfoItem>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="filled"
            startIcon={<Logout />}
            onClick={handleLogout}
          >
            Вийти з профілю
          </Button>
        </Grid>
      </Grid>
    </Section>
  );
};

export default MyInfo;
