import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProfileCard(props) {
  console.log(props.faculty);
  const {faculty} = props;

  return (
    <Card sx={{ maxWidth: 345 }} onClick = {props.atClick.profileHandler}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {faculty.profile_img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {faculty.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {faculty.designation}
        </Typography>
      </CardContent>
    </Card>
  );
}
