import React from "react";
import Card from "./Card";
// import Success from "../../Pages/Success";

import { Container, Row } from "react-bootstrap";
// import { Grid } from "@mui/material";
// import { maxWidth } from "@mui/system";

const FacultyList = (props) => {

  return (
    <Container>
      <Row>
      {/* <Grid container spacing={24}>
        <Grid item md={4}> */}
          {/* <div> */}
            {props.faculties.map((faculty) => {
              return <Card key={faculty.id} faculty={faculty} />;
            })}
          {/* </div> */}
          {/* {props.faculties.map(renderCard)} */}
        {/* </Grid>
      </Grid> */}
      </Row>
    </Container>
  );
};

export default FacultyList;
