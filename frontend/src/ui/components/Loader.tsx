import { FC } from 'react';
import { useAppSelector } from '@hooks/store.ts';
import { selectLoadingIds } from '@app/slices/ui.ts';
import { Backdrop, CircularProgress } from '@mui/material';

export const Loader: FC = () => {
  const loadingsId = useAppSelector(selectLoadingIds);

  return (
    <Backdrop open={Boolean(loadingsId.length)} sx={{ zIndex: 1400 }}>
      <CircularProgress size={80} thickness={2} />
    </Backdrop>
  );
};
