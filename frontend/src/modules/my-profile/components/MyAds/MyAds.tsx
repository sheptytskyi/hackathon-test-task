import { FC } from 'react';
import { Section } from '@ui';
import { useDeleteMyAdMutation, useGetMyAdsQuery } from '@app/services/ads';
import useLoader from '@hooks/useLoader.ts';
import { Button, Stack, Typography } from '@mui/material';
import AdCard from '@modules/my-profile/components/AdCard.tsx';
import { useSnackbar } from 'notistack';

const MyAds: FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { data, isLoading, isFetching } = useGetMyAdsQuery();
  const isLoadingOrFetching = isLoading || isFetching;

  const [deleteAd, deleteState] = useDeleteMyAdMutation();

  useLoader(
    isLoadingOrFetching || deleteState.isLoading,
    'get-my-ads-or-delete-ad',
  );

  const handleDelete = async () => {
    try {
      await deleteAd().unwrap();
      enqueueSnackbar('Оголошення видалено', { variant: 'success' });
    } catch (e) {
      enqueueSnackbar('Помилка видалення оголошення. Спробуйте ще раз', {
        variant: 'error',
      });
    }
  };

  return (
    <Section title="Мої оголошення">
      {!data && !isLoadingOrFetching && (
        <Stack gap={4} maxWidth={300}>
          <Typography>У вас ще немає оголошень</Typography>
          <Button variant="filled">Створити оголошення</Button>
        </Stack>
      )}

      {data && !isLoadingOrFetching && (
        <AdCard
          title={data.title}
          description={data.description}
          onDelete={handleDelete}
        />
      )}
    </Section>
  );
};

export default MyAds;
