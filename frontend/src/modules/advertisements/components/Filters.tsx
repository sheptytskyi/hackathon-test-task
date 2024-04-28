import React, { FC } from 'react';
import { Stack, styled, Typography } from '@mui/material';
import { pallete } from '@theme';
import { ControlledAutocomplete, ControlledSelect } from '@ui';
import {
  AdCategoriesOptions,
  AdPriorityOptions,
} from '@constants/entities/ad.ts';

const Wrapper = styled(Stack)({
  border: `1px solid ${pallete.grey[500]}`,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  padding: '20px',
  height: '100%',
  gap: 15,
  width: 100,
  minWidth: 300,
});

const Filters: FC = () => {
  return (
    <Wrapper>
      <Typography variant="h4">Фільтри</Typography>

      <ControlledAutocomplete
        name="categories"
        label="Категорії"
        placeholder="Оберіть категорії"
        multiple
        options={AdCategoriesOptions as any}
      />

      <ControlledSelect
        name="priority"
        label={'Пріоритет'}
        options={AdPriorityOptions}
      />
    </Wrapper>
  );
};

export default Filters;
