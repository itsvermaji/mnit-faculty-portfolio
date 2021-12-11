import React from "react";
import LoginDetails from "../Login/LoginDetails";
import { Container, Row, Col } from "react-bootstrap";
const LoginForm = (props) => {
  return (
    <>
      <Container className="container">
        <Row className="justify-content-md-center">
          <Col xs lg="4" id="loginPlaceHolder">
            <LoginDetails email={props.email} password={props.password} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
