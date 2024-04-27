import { FC, PropsWithChildren } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = PropsWithChildren<{
  to: string;
  color?: string;
}>;

export const TextLink: FC<Props> = ({
  children,
  to,
  color = 'common.black',
}) => {
  return (
    <Typography
      color={color}
      component={Link}
      to={to}
      sx={{ width: 'fit-content' }}
    >
      {children}
    </Typography>
  );
};
