import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const LoginDetails = (props) => {
  function signinHandler(event) {
    event.preventDefault();

    const formData = event.currentTarget.elements;

    const signinData = {
      email: formData.email.value,
      password: formData.password.value,
    };

    var url = `http://localhost:5000/api/faculty/login`;
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
        console.log(resData.data);
        console.log("Here we set the state");
        props.isLogin(true);

        // save it into react store
        var token = resData.token;
        // console.log(token);

        // if loggedin fetch data again
        url = `http://localhost:5000/api/faculty/${resData.data}`;
        fetch(url, {
          method: "GET", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        })
          .then((response) => response.json())
          .then((resData) => {
            console.log("full Data", resData);
          });

        props.setFaculty({ a: 1, b: 2 });
      })
      .catch((error) => {
        console.error("an error occured while registration:", error);
      })
      .finally(() => {
        console.log("Logged In!");
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
