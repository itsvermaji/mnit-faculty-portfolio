import React from "react";
import { Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Item from "@mui/material/ListItem";
import "../Components/Profile/profile.css";
import PublicationCard from "../Components/Profile/PublicationCard";


// import {PublicationCard} from "./PublicationCard.js"
const ProfilePage = () => {
  const [value, setValue] = React.useState("one");
  let imgSrc = "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant = "scrollable"
          indicatorColor="primary"
          aria-label="scrollable secondary tabs example"
        >
          <Tab value="one" label="Publications" />
          <Tab value="five" label="Journals"/>
          <Tab value="two" label="Patents" />
          <Tab value="three" label="PhD. Guided" />
          <Tab value="four" label="Conferences" />
        </Tabs>
      </Box>

    {/* <PublicationCard/> */}
    <PublicationCard></PublicationCard>
    <PublicationCard></PublicationCard>
    <PublicationCard></PublicationCard>
    <PublicationCard></PublicationCard>
    <PublicationCard></PublicationCard>
    </Container>
  );
};

export default ProfilePage;
