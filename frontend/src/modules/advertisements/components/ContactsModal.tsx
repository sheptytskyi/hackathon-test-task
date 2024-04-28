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
import { TextLink } from '@ui';
import useProfile from '@hooks/useProfile.ts';
import { UserTypes } from '@constants';
import { skipToken } from '@reduxjs/toolkit/query';

type Props = {
  open: boolean;
  onClose: () => void;
  id: number;
};

const ContactsModal: FC<Props> = (props) => {
  const [{ user_type }] = useProfile();
  const { data, isLoading } = useGetOneAdQuery(
    !user_type || user_type === UserTypes.NeedHelp ? skipToken : props.id,
  );
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
          color: (theme) => theme.palette.grey[700],
        }}
      >
        <Close />
      </IconButton>

      <DialogContent dividers>
        <Typography gutterBottom variant="h4">
          E-mail:{' '}
          <TextLink to={`mailto:${data?.contact_email}`}>
            {data?.contact_email}
          </TextLink>
        </Typography>

        <Typography gutterBottom variant="h4">
          Телефон:{' '}
          <TextLink to={`tel:${data?.contact_phone}`}>
            {data?.contact_phone}
          </TextLink>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ContactsModal;
