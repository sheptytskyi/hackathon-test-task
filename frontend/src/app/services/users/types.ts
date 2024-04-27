import { UserTypes } from '@constants/entities/user.ts';

export type ILoginRequest = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  access: string;
  refresh: string;
};

export type ICreateUserRequest = {
  first_name: string;
  second_name: string;
  user_type: UserTypes;
  email: string;
  password_1: string;
  password_2: string;
};

export interface IProfile {
  // TODO: Add fields
  user_type: UserTypes;
}
