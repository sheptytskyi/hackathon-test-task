import useProfile from '@hooks/useProfile.ts';
import { Routes } from '@router';

const guestNavButtons = [{ title: 'Увійти', to: Routes.Login }];

const navButtons = [
  { title: 'Головна', to: Routes.Home },
  { title: 'Потреби', to: Routes.Advertisements },
];

const useNavButtons = () => {
  const [{ isLogged }] = useProfile();

  if (!isLogged) {
    return navButtons.concat(guestNavButtons);
  }

  return navButtons;
};

export default useNavButtons;
