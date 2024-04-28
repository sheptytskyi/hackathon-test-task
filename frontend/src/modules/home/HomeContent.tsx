import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { APP_TITLE } from '@constants';

const HomeContent: FC = () => {
  return (
    <Stack pt={10}>
      <Typography variant="h1" color="primary.main">
        {APP_TITLE}
      </Typography>

      <Typography mt={6} variant="h5" color="grey.800">
        Ласкаво просимо до нашої платформи для волонтерської діяльності! Ми
        зібралися разом, щоб спростити процес надання допомоги тим, хто її
        потребує. Тут ви знайдете оголошення про допомогу та можливість
        самостійно створити своє. Ми віримо, що разом ми можемо зробити більше.
      </Typography>

      <Box
        mt={10}
        p="14px 24px"
        sx={{ bgcolor: 'common.white', borderRadius: 3 }}
      >
        <Typography>
          Дякуємо, що обрали нашу платформу для волонтерської діяльності. Не
          соромтеся зв{"'"}язатися з нами, якщо у вас є будь-які питання чи
          пропозиції. Разом ми змінюємо світ до кращого.
        </Typography>
      </Box>
    </Stack>
  );
};

export default HomeContent;
