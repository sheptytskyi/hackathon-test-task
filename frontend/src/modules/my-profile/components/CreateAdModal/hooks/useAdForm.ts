import { Resolver, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Errors } from '@constants';
import { AdPriority, AdStatus } from '@constants/entities/ad.ts';
import dayjs, { Dayjs } from 'dayjs';

export type FormValues = {
  title: string;
  description: string;
  categories: { value: number; label: string }[];
  location: string;
  contacts: {
    email: string;
    phone: string;
  };
  pictures: FileList | null;
  status: AdStatus;
  time_validity: Dayjs;
  priority: AdPriority;
};

const schema = yup.object().shape({
  title: yup.string().required(Errors.Required),
  description: yup.string().required(Errors.Required),
  categories: yup
    .array()
    .of(yup.object())
    .test(
      'categories',
      Errors.Required,
      (value?: any[]) => Number(value?.length) > 0,
    ),
  location: yup.string().required(Errors.Required),
  contacts: yup.object().shape({
    email: yup.string().email(Errors.EmailInvalid).required(Errors.Required),
    phone: yup
      .string()
      .required(Errors.Required)
      .test('phone', Errors.PhoneInvalid, (value) =>
        /^\+380\d{9}$/.test(value),
      ),
  }),
  pictures: yup.mixed().required(Errors.Required),
  time_validity: yup.mixed().required(Errors.Required),
  priority: yup.string().required(Errors.Required),
});

const useAdForm = () => {
  const form = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues: {
      title: '',
      description: '',
      categories: [],
      location: '',
      contacts: {
        email: '',
        phone: '',
      },
      pictures: null,
      time_validity: dayjs(),
      priority: AdPriority.Moderate,
    },
  });

  return { form };
};

export default useAdForm;
