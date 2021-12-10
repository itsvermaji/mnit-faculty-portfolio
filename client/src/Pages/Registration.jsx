import React, { useState, useEffect } from "react";
import axios from "axios";
import RegistrationForm from "../Components/ui/RegistrationForm";
import { Typography, Box, Container } from "@mui/material";

const RegistrationPage = () => {
  function registrationHandler(facultyData) {
    const url = "http://localhost:5000/api/faculty/register";

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(facultyData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("an error occured while registration:", error);
      });

    // fetch(url, {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(facultyData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("an error occured while registration:", error);
    //   });
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h1" gutterBottom>
        Registration
      </Typography>

      <RegistrationForm onRegistration={registrationHandler} />
    </Container>
  );
};

export default RegistrationPage;
