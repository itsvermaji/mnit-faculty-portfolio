import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { Link } from "@mui/material";

export default function ConferenceCard(props) {
  const { conf } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Card>
        <React.Fragment>
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {conf.name}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              {conf.year}
            </Typography>
            {/* <Typography color="text.secondary" gutterBottom>
              Author/Co-authors
            </Typography>
            <Typography color="text.secondary">
              Unknown Attribute
            </Typography> */}
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
