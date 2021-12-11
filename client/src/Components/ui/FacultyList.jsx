import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Success from "../../Pages/Success";

// import { Card } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { Grid } from "@mui/material";
import { maxWidth } from "@mui/system";

const FacultyList = (props) => {
  // let navigate = useNavigate();
  // function profileRedirect() {
  //   console.log("funcion ran");
  //   // navigate(`/users/${faculty.id}`);
  // }

  // const renderCard = (faculty, index) => {
  //   return (
  //     <div style={{display: 'flex', flexDirection: 'row', maxWidth:"24rem"}}>
  //     <Card style={{ width: "16rem", margin:"10px", flex:3}} key={index}>
  //       <Card.Img variant="top" src={faculty.profile_img} style={{paddingTop:"8px"}}/>
  //       <Card.Body>
  //         <Card.Title>{faculty.name}</Card.Title>
  //         <Card.Text>{faculty.designation}</Card.Text>
  //       </Card.Body>
  //     </Card>
  //     </div>
  //   );
  // };

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
