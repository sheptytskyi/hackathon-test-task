import { FC } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import Filters from '@modules/advertisements/components/Filters.tsx';
import { useGetAdsQuery } from '@app/services/ads';
import useLoader from '@hooks/useLoader.ts';
import { FormProvider, useForm } from 'react-hook-form';
import AdCard from '@modules/advertisements/components/AdCard.tsx';
import { Centered } from '@ui';

const Cards = styled(Stack)({
  flex: 1,
  gap: 20,
});

const Advertisements: FC = () => {
  const form = useForm({
    defaultValues: {
      categories: [],
      priority: undefined,
    },
  });

  const { data, isLoading, isFetching } = useGetAdsQuery(
    {
      categories: form
        .watch('categories')
        .map((category) => (category as any).value),
      priority: form.watch('priority'),
    },
    { refetchOnMountOrArgChange: true },
  );

  useLoader(isLoading, 'get-all-ads');

  return (
    <FormProvider {...form}>
      <Stack flexDirection="row" gap={10} mt={5}>
        <Filters />

        <Cards>
          {data?.map((ad) => <AdCard key={ad.id} ad={ad} />)}

          {!data?.length && !isLoading && !isFetching && (
            <Centered>
              <Typography variant="h4">Нічого не знайдено</Typography>
            </Centered>
          )}
        </Cards>
      </Stack>
    </FormProvider>
  );
};

export default Advertisements;
