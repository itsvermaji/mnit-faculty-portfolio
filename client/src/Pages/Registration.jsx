import React from "react";
import RegistrationForm from "../Components/ui/RegistrationForm";
import { Typography, Container } from "@mui/material";

const RegistrationPage = () => {
  function registrationHandler(facultyData) {
    const url = "http://localhost:5000/api/faculty/register";

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(facultyData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("an error occured while registration:", error);
      });

  }

  return (
    <Container>
      <RegistrationForm onRegistration={registrationHandler} />
    </Container>
  );
};

export default RegistrationPage;
