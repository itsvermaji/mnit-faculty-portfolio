import React from "react";
import {Row, Card, Container, Col } from "react-bootstrap";
const MainPage = () => {
  const cards = [
    {
      image:
        "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
      name: "Who knows?",
      designation: "Nudist",
    },
    {
        image:
          "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
        name: "Who knows?",
        designation: "Nudist",
      },
      {
        image:
          "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
        name: "Who knows?",
        designation: "Nudist",
      },
      {
        image:
          "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
        name: "Who knows?",
        designation: "Nudist",
      },
      {
        image:
          "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
        name: "Who knows?",
        designation: "Nudist",
      },
      {
        image:
          "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
        name: "Who knows?",
        designation: "Nudist",
      },
      {
        image:
          "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
        name: "Who knows?",
        designation: "Nudist",
      },
    {
      image:
        "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
      name: "Who knows?",
      designation: "Nudist",
    },
    {
      image:
        "https://icaroinvolo.altervista.org/wp-content/uploads/2018/01/BrinAmberlee-320x330.jpg",
      name: "Who knows?",
      designation: "Nudist",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "16rem", margin:"10px"}} key={index}>
        <Card.Img variant="top" src={card.image} style={{paddingTop:"8px"}}/>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>{card.designation}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
        <Container>
            <Row>
                {cards.map(renderCard)}
            </Row>
        </Container>
    
  ) 
};

export default MainPage;
