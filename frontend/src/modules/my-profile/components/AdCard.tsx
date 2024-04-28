import { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

type Props = {
  title: string;
  description: string;
  onDelete: () => void;
};

const AdCard: FC<Props> = ({ title, description, onDelete }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="error" fullWidth onClick={onDelete}>
          Видалити
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdCard;
