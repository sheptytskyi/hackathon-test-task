import useProfile from '@hooks/useProfile.ts';
import { Routes } from '@router';
import { UserTypes } from '@constants';

const guestNavButtons = [{ title: 'Увійти', to: Routes.Login }];
const needyNavButtons = [{ title: 'Моі потреби', to: Routes.MyAdvertisements }];

const navButtons = [
  { title: 'Головна', to: Routes.Home },
  { title: 'Потреби', to: Routes.Advertisements },
];

const useNavButtons = () => {
  const { user_type, isLogged } = useProfile();

  if (!isLogged) {
    return navButtons.concat(guestNavButtons);
  }

  if (user_type === UserTypes.NeedHelp) {
    return navButtons.concat(needyNavButtons);
  }

  return navButtons;
};

export default useNavButtons;
