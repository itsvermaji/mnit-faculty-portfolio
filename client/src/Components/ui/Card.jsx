import {useNavigate} from 'react-router-dom';

import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Success from "../../Pages/Success";

export default function ProfileCard(props) {
  let navigate = useNavigate();

  
  // console.log(props.faculty);
  const { faculty } = props;

  function profileRedirect() {
    console.log("funcion ran");
    navigate(`/users/${faculty.id}`);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', maxWidth:"24rem", margin:"10px"}} onClick={profileRedirect}>
      <Card sx={{ maxWidth: 345 }} style={{flex:4}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image={faculty.profile_img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {faculty.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {faculty.designation}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
