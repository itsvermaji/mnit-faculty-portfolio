import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { makeStyles } from '@mui/material';

export default function PublicationCard(props){

  const {article} = props;


  return (
    <Box sx={{ width: "100%" }}>
      <Card raised="true" variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {article.title}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              {article.year}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              {article.authors}
            </Typography>
            <Typography color="text.secondary">{article.publication}</Typography>
          </CardContent>
        </React.Fragment>
      </Card>
      {/* This is a card. */}
    </Box>
  );
};


