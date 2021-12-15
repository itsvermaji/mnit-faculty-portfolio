import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { Link } from "@mui/material";

export default function JournalCard(props) {
  const { journal } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Card>
        <React.Fragment>
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {journal.name}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              {journal.year}
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
