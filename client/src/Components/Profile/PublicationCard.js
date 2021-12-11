import React from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { makeStyles } from '@mui/material';



const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h6" color="text.primary">Publication Title</Typography>
      <Typography color="text.secondary" gutterBottom>Year</Typography>
      <Typography color="text.secondary" gutterBottom>Contributors' Name</Typography>
      <Typography color="text.secondary">Conference Name</Typography>
    </CardContent>
  </React.Fragment>
);

const PublicationCard = () => {
    return (
        <Box sx={{width:"100%"}}>
            <Card raised="true" variant="outlined">{card}</Card>
        </Box>
    )
}

export default PublicationCard
