import { FC } from 'react';
import { ContactsWrapper, Wrapper } from '@ui/layouts/Footer/Footer.styled.ts';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { CONTACTS, HACKATON_URL, tg } from '@constants';
import { TextLink } from '@/ui';

const Footer: FC = () => {
  return (
    <Wrapper>
      <Stack gap={4} pl={20} pb={15} flexBasis="500px">
        <Typography variant="h2" color="common.white">
          Команда яка виконала цей проект: Діти Ньютона
        </Typography>

        <Typography color="common.white">
          Створене по мотивам тестового завдання від Best Lviv Hackathon 2024
        </Typography>

        <Box mt={1} />

        <TextLink color="common.white" to={HACKATON_URL} target="_blank">
          {HACKATON_URL}
        </TextLink>
      </Stack>

      <ContactsWrapper>
        <Grid container>
          <Grid item sm={6}>
            <Typography variant="h5" color="common.white">
              Люди які прийняли участь в розробці (тг аккаунит):
            </Typography>

            <Stack mt={2}>
              {CONTACTS.map(({ name, tg: url }) => (
                <Typography color="common.white" key={name}>
                  {name}:{' '}
                  <TextLink target="_blank" color="common.white" to={tg(url)}>
                    @{url}
                  </TextLink>
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography color="common.white">© 2023 — Copyright</Typography>
      </ContactsWrapper>
    </Wrapper>
  );
};

export default Footer;
