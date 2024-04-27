import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import { pallete } from '@theme';

export type ControlledTextFieldProps = TextFieldProps & {
  name: string;
};

export const ControlledTextField: FC<ControlledTextFieldProps> = ({
  name,
  fullWidth = true,
  required,
  defaultValue,
  helperText,
  ...props
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <TextField
          fullWidth={fullWidth}
          required={required}
          value={value ?? ''}
          helperText={error?.message || helperText}
          error={!!error}
          inputProps={{
            sx: {
              '&::placeholder': {
                color: pallete.grey[800],
                opacity: 1,
              },
            },
          }}
          {...field}
          {...props}
        />
      )}
    />
  );
};
