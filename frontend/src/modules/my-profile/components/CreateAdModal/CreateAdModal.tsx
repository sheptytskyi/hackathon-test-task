import React, { FC, useEffect } from 'react';
import {
  AppBar,
  Button,
  Dialog,
  DialogProps,
  Grid,
  IconButton,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Close } from '@mui/icons-material';
import useAdForm from '@modules/my-profile/components/CreateAdModal/hooks/useAdForm.ts';
import {
  ControlledDatePicker,
  ControlledSelect,
  ControlledTextField,
} from '@ui';
import useCreateAd from '@modules/my-profile/components/CreateAdModal/hooks/useCreateAd.ts';
import { FormProvider } from 'react-hook-form';
import { ControlledAutocomplete } from '@ui/inputs/ControlledAutocomplete.tsx';
import {
  AdCategoriesOptions,
  AdPriorityOptions,
} from '@constants/entities/ad.ts';
import { ControlledFilesUpload } from '@ui/inputs/ControlledFilesUpload.tsx';

type Props = Pick<DialogProps, 'open'> & {
  onClose: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateAdModal: FC<Props> = (props) => {
  const { form } = useAdForm();
  const { handleCreateAd, isLoading } = useCreateAd(props.onClose);

  useEffect(form.reset, [props.open]);

  return (
    <FormProvider {...form}>
      <Dialog fullScreen TransitionComponent={Transition} {...props}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.onClose}
              aria-label="close"
            >
              <Close />
            </IconButton>

            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              color="common.white"
            >
              Створити оголошення
            </Typography>

            <Button
              color="inherit"
              onClick={() => {
                handleCreateAd(form.getValues());
              }}
              disabled={!form.formState.isValid || isLoading}
            >
              Зберегти
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={4} px={20} py={10} maxWidth={900}>
          <Typography variant="h6">Оголошення</Typography>

          <Grid item xs={12}>
            <ControlledTextField name="title" label={'Заголовок'} />
          </Grid>

          <Grid item xs={12}>
            <ControlledTextField
              name="description"
              label={'Опис'}
              multiline
              minRows={3}
            />
          </Grid>

          <Grid item xs={12}>
            <ControlledAutocomplete
              name="categories"
              label="Категорії"
              placeholder="Оберіть категорії"
              multiple
              options={AdCategoriesOptions as any}
            />
          </Grid>

          <Grid item xs={12}>
            <ControlledTextField name="location" label={'Локація'} />
          </Grid>

          <Grid item xs={12}>
            <ControlledSelect
              name="priority"
              label={'Пріоритет'}
              options={AdPriorityOptions}
            />
          </Grid>

          <Grid item xs={12}>
            <ControlledDatePicker name="time_validity" label={'Термін дії'} />
          </Grid>

          <Grid item xs={12}>
            <Typography mb={2} variant="h6">
              Фотографії
            </Typography>

            <ControlledFilesUpload name="pictures" />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Контакти</Typography>
            <Stack gap={3} mt={4}>
              <ControlledTextField name="contacts.email" label={'Email'} />
              <ControlledTextField name="contacts.phone" label={'Телефон'} />
            </Stack>
          </Grid>
        </Grid>
      </Dialog>
    </FormProvider>
  );
};

export default CreateAdModal;
