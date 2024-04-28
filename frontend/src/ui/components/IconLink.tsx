import { FC } from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type Props = {
  icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  to: string;
  color?: string;
};

export const IconLink: FC<Props> = ({
  icon: Icon,
  to,
  color = 'common.white',
}) => {
  return (
    <IconButton sx={{ color }} component={Link} to={to} target="_blank">
      <Icon fill="currentColor" />
    </IconButton>
  );
};
