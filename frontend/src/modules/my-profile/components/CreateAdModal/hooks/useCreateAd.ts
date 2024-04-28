import { useCreateAdMutation } from '@app/services/ads';
import useLoader from '@hooks/useLoader.ts';
import { useSnackbar } from 'notistack';
import { FormValues } from '@modules/my-profile/components/CreateAdModal/hooks/useAdForm.ts';

const useCreateAd = (onClose: () => void) => {
  const { enqueueSnackbar } = useSnackbar();
  const [create, { isLoading }] = useCreateAdMutation();
  useLoader(isLoading, 'create-ad');

  const handleCreateAd = async (values: FormValues) => {
    try {
      const { categories, time_validity, ...rest } = values;

      await create({
        categories: categories.map((c) => c.value),
        time_validity: time_validity.toISOString(),
        ...rest,
      }).unwrap();

      onClose();

      enqueueSnackbar('Оголошення успішно створено', { variant: 'success' });
    } catch (e) {
      enqueueSnackbar('Помилка створення оголошення. Спробуйте ще раз', {
        variant: 'error',
      });
    }
  };

  return { handleCreateAd, isLoading };
};

export default useCreateAd;
