import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Components/Profile/profile.css";
import LoginForm from "../Components/ui/LoginForm";

import { Container } from "react-bootstrap";
import Grid from "@mui/material/Grid";

import Item from "@mui/material/ListItem";
import FacultyTables from "../Components/ui/FacultyTables";
import Loading from "../Components/ui/Loading";

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [faculty, setFaculty] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/api/faculty/${id}`;
    fetch(url, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((resData) => {
        const { flag, msg, data } = resData;
        setFaculty(data[0]);
      })
      .catch((error) => {
        console.error("an error occured while registration:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
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
                src={faculty.profile_img}
              />
            </Item>
          </Grid>
          <Grid item xs={12} md={10}>
            <Item>
              <div style={{ paddingTop: "2%", paddingLeft: "4%" }}>
                <h3>
                  <b>{faculty.name}</b>
                </h3>
                <div>
                  <p>{faculty.designation}</p>
                  <p>{faculty.contact_detail}</p>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>

        <hr />

        {isLogin || <LoginForm />}
        {isLogin && <FacultyTables />}
      </Container>
    );
  }
};

export default ProfilePage;
