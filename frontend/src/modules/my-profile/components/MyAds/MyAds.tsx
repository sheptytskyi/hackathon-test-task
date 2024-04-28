import { FC } from 'react';
import { Section } from '@ui';
import { useGetMyAdsQuery } from '@app/services/ads';
import useLoader from '@hooks/useLoader.ts';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

const MyAds: FC = () => {
  const {
    data = {
      id: 1,
      title: 'Title',
      description: 'Description',
    },
    isLoading,
    isFetching,
  } = useGetMyAdsQuery();
  const isLoadingOrFetching = isLoading || isFetching;
  useLoader(isLoadingOrFetching, 'get-my-ads');

  return (
    <Section title="Мої оголошення">
      {!data && !isLoadingOrFetching && (
        <Stack gap={4} maxWidth={300}>
          <Typography>У вас ще немає оголошень</Typography>
          <Button variant="filled">Створити оголошення</Button>
        </Stack>
      )}

      {data && !isLoadingOrFetching && (
        <Card sx={{ width: 300 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" color="error" fullWidth>
              Видалити
            </Button>
          </CardActions>
        </Card>
      )}
    </Section>
  );
};

export default MyAds;
