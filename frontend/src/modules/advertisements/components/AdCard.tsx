import { FC, useState } from 'react';
import { IAd } from '@app/services/ads/types.ts';
import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  styled,
} from '@mui/material';
import { pallete } from '@theme';
import { InfoItem } from '@ui';
import {
  AdCategoriesOptions,
  ReadableAdPriority,
  ReadableAdStatus,
} from '@constants/entities/ad.ts';
import dayjs from 'dayjs';
import useProfile from '@hooks/useProfile.ts';
import ContactsModal from '@modules/advertisements/components/ContactsModal.tsx';

type Props = {
  ad: IAd;
};

const Wrapper = styled(Grid)({
  border: `1px solid ${pallete.grey[500]}`,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  background: 'white',
  flex: 1,
  position: 'relative',
});

const AdCard: FC<Props> = ({ ad }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [{ user_type }] = useProfile();
  const {
    title = 'No title',
    description = 'No description',
    categories = [1],
    location = 'No location',
    pictures = [],
    status = 'active',
    time_validity = 'No time validity',
    priority = 'moderate',
  } = ad;

  return (
    <Wrapper container spacing={3} xs={12}>
      <ContactsModal open={isOpened} onClose={() => setIsOpened(false)} />

      {user_type === UserTypes.GiveHelp && (
        <Box position="absolute" right={25} top={25}>
          <Button onClick={() => setIsOpened(true)}>Контакти</Button>
        </Box>
      )}

      <Grid item xs={12}>
        <InfoItem title={title} />
      </Grid>

      <Grid item xs={12}>
        <InfoItem title="Опис">{description}</InfoItem>
      </Grid>

      <Grid item xs={12}>
        <InfoItem title="Категорії">
          {categories
            .map(
              (category) =>
                AdCategoriesOptions.find((option) => option.value === category)
                  ?.label,
            )
            .join(', ')}
        </InfoItem>
      </Grid>

      <Grid item xs={6}>
        <InfoItem title="Локація">{location}</InfoItem>
      </Grid>

      <Grid item xs={6}>
        <InfoItem title="Статус оголошення">
          {ReadableAdStatus[status]}
        </InfoItem>
      </Grid>

      <Grid item xs={6}>
        <InfoItem title="Термін дії">
          {dayjs(time_validity).format('DD-MM-YYYY')}
        </InfoItem>
      </Grid>

      <Grid item xs={6}>
        <InfoItem title="Пріоритет">{ReadableAdPriority[priority]}</InfoItem>
      </Grid>

      <Grid item xs={12}>
        <InfoItem title="Фотографії">
          <ImageList cols={3}>
            {pictures.map((picture) => (
              <ImageListItem key={picture.picture}>
                <img src={picture.picture} alt={title} />
              </ImageListItem>
            ))}
          </ImageList>
        </InfoItem>
      </Grid>
    </Wrapper>
  );
};

export default AdCard;
