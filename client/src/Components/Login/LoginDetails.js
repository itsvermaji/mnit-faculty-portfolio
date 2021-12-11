import React, { useState, ReactDOM, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FacultyTables from "../ui/FacultyTables";

const LoginDetails = ({setIsLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const whenLoggedin = () => {
    setIsLogin(true);
    console.log("Holea CHoca Guapa");
  };

  function signinHandler(event) {
    event.preventDefault();

    const formData = event.currentTarget.elements;

    const signinData = {
      email: formData.email.value,
      password: formData.password.value,
    };

    const url = `http://localhost:5000/api/faculty/login`;
    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signinData),
    })
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData);
      })
      .catch((error) => {
        console.error("an error occured while registration:", error);
      })
      .finally(() => {
        console.log("Logged In!");
        alert("Login Successful")
        whenLoggedin()
      });
  }

  return (
    <Container className="container">
        <Row className="justify-content-md-center">
          <Col xs lg="4" id="loginPlaceHolder">
          <div style={{ margin: "10px", display: "flexbox" }}>
            <form onSubmit={signinHandler}>
              <div className="row mb-4">
                  <TextField
                    id="email"
                    name="email"
                    size="small"
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
              </div>
              <div className="row mb-4">
                  <TextField
                    id="password"
                    name="password"
                    size="small"
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
              </div>

              <div className="row mb-4">
                <div className="col">
                  <Link to="/register">Register</Link>
                </div>
                <div className="col">
                  <Link to="/forgot">Forgot password?</Link>
                </div>
              </div>

              <div>
                <Button variant="contained" type="submit">
                  Sign In
                </Button>
              </div>
            </form>
          </div>
          </Col>
        </Row>
      </Container>
  );
};

export default LoginDetails;
