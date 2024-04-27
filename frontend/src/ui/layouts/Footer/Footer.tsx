import { FC } from 'react';
import { ContactsWrapper, Wrapper } from '@ui/layouts/Footer/Footer.styled.ts';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Routes } from '@router';
import { APP_TITLE, CONTACTS } from '@constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TextLink, IconLink } from '@/ui';

const Footer: FC = () => {
  return (
    <Wrapper>
      <Stack gap={4} pl={20} pb={15} flexBasis="500px">
        <Typography variant="h1" color="common.white">
          {APP_TITLE}
        </Typography>

        <Typography color="common.white">
          Тут треба написати довгий опис. Тут треба написати довгий опис. Тут
          треба написати довгий опис. Тут треба написати довгий опис.
        </Typography>

        <Box>
          <Button to={Routes.Advertisements} component={Link}>
            Переглянути Потреби
          </Button>
        </Box>
      </Stack>

      <ContactsWrapper>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Typography variant="h5" color="common.white">
              Контакти
            </Typography>

            <Stack mt={2}>
              <TextLink color="common.white" to={`tel:${CONTACTS.PHONE}`}>
                {CONTACTS.PHONE}
              </TextLink>

              <TextLink color="common.white" to={`mailto:${CONTACTS.PHONE}`}>
                {CONTACTS.EMAIL}
              </TextLink>
            </Stack>
          </Grid>

          <Grid item sm={6}>
            <Typography variant="h5" color="common.white">
              Підпишись на нас:
            </Typography>

            <Stack mt={2} gap={2} flexDirection="row">
              <IconLink to={CONTACTS.INSTAGRAM} icon={InstagramIcon} />
              <IconLink to={CONTACTS.FACEBOOK} icon={FacebookIcon} />
            </Stack>
          </Grid>
        </Grid>

        <Typography color="common.white">© 2023 — Copyright</Typography>
      </ContactsWrapper>
    </Wrapper>
  );
};

export default Footer;
