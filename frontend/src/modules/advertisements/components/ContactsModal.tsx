import { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useGetOneAdQuery } from '@app/services/ads';
import useLoader from '@hooks/useLoader.ts';

type Props = {
  open: boolean;
  onClose: () => void;
  id: number;
};

const ContactsModal: FC<Props> = (props) => {
  const { data, isLoading } = useGetOneAdQuery(props.id);
  useLoader(isLoading, 'get-one-ad');

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      sx={{
        '& .MuiDialog-paper': {
          minWidth: 300,
          maxWidth: 400,
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Контакти
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={props.onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>

      <DialogContent dividers>
        <Typography gutterBottom>{data?.email}</Typography>
        <Typography gutterBottom>{data?.phone}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ContactsModal;
