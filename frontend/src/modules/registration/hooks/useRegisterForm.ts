import { Resolver, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Errors, UserTypes } from '@constants';
import { ICreateUserRequest } from '@app/services/users/types.ts';

const schema = yup.object().shape({
  first_name: yup.string().required(Errors.Required),
  second_name: yup.string().required(Errors.Required),
  user_type: yup.string().required(Errors.Required),
  email: yup.string().email(Errors.EmailInvalid).required(Errors.Required),
  password_1: yup.string().required(Errors.Required),
  password_2: yup
    .string()
    .required(Errors.Required)
    .test('passwords-match', Errors.PasswordsMatch, function (value) {
      return this.parent.password_1 === value;
    }),
});

const useRegisterForm = () => {
  const form = useForm<ICreateUserRequest>({
    mode: 'onChange',
    resolver: yupResolver(schema) as Resolver<ICreateUserRequest>,
    defaultValues: {
      first_name: '',
      second_name: '',
      user_type: UserTypes.NeedHelp,
      email: '',
      password_1: '',
      password_2: '',
    },
  });

  return { form };
};

export default useRegisterForm;
