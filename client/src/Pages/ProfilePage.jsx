import React, { useState, useEffect } from "react";
import "../Components/Profile/profile.css";
import PublicationCard from "../Components/Profile/PublicationCard";
import LoginForm from "../Components/ui/LoginForm";

import { Container } from "react-bootstrap";
import Grid from "@mui/material/Grid";

import Item from "@mui/material/ListItem";
import FacultyTables from "../Components/ui/FacultyTables";

// import {PublicationCard} from "./PublicationCard.js"
const ProfilePage = () => {
  const [isLogin, setIsLogin] = useState(false);

  let imgSrc =
    "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg";

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Item>
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "80px",
              }}
              src=""
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={10}>
          <Item>
            <div style={{ paddingTop: "2%", paddingLeft: "4%" }}>
              <h3>
                <b>Brin AmberLee</b>
              </h3>
              <div>
                <p>Malaviya National Institute of Technology</p>
                <p>Super Sexy Gal</p>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>

      <hr />

      {isLogin || <LoginForm />}
      {isLogin && <FacultyTables />}

      {/* <LoginForm /> */}

    </Container>
  );
};

export default ProfilePage;
