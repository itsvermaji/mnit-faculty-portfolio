import { Typography } from "@mui/material";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const imgSrc = "http://www.mnit.ac.in/sw/uba/photo/mnitlogo.png";
  // const imgSrc = "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png";
  return (
    <Navbar bg="primary" variant="dark" height="8px">
      <Container style={{ height: "0px" }}>
        <Navbar.Brand href="/">
          <Typography variant="button" fontSize={14}>
            Faculty Portal
          </Typography>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/register">Registration</Nav.Link>
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <img src={imgSrc} style={{width:"100px", height:"80px", marginRight:"8px"}}/>
      </Container>
    </Navbar>

    // <Navbar bg="dark" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="/">Faculty Portal</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Link to="/" >Home</Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Navigation;
