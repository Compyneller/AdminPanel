import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Aboutus from "../components/DotOrgComponents/HomeComponents/AboutUs/Aboutus";
import ImageAbout from "../components/DotOrgComponents/HomeComponents/AboutUs/ImageAbout";
import Hero from "../components/DotOrgComponents/HomeComponents/Hero";
import Mission from "../components/DotOrgComponents/HomeComponents/Mission/Mission";
import MissionImage from "../components/DotOrgComponents/HomeComponents/Mission/MissionImage";
import SubHeading from "../components/DotOrgComponents/HomeComponents/SubHeading";
import Vision from "../components/DotOrgComponents/HomeComponents/Vision/Vision";
import VisionImage from "../components/DotOrgComponents/HomeComponents/Vision/VisionImage";
import Values from "../components/DotOrgComponents/HomeComponents/Values/Values";
import Address from "../components/DotOrgComponents/HomeComponents/Address/Address";

const Home = () => {
  const id = "homepage";
  return (
    <Container className="py-5">
      <Card>
        <Card.Header as="h3">Home</Card.Header>
        <Card.Body>
          <Row className="g-3">
            <Col sm={12} lg={6}>
              <Hero id={id} />
            </Col>
            <Col sm={12} lg={6}>
              <SubHeading id={id} />
            </Col>
          </Row>
          <br />
          <Card>
            <Card.Header as="h3">About Us</Card.Header>
            <Card.Body>
              <Row className="g-3">
                <Col sm={12} lg={6}>
                  <Aboutus />
                </Col>
                <Col sm={12} lg={6}>
                  <ImageAbout />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header as="h3">Mission</Card.Header>
            <Card.Body>
              <Row className="g-3">
                <Col sm={12} lg={6}>
                  <Mission />
                </Col>
                <Col sm={12} lg={6}>
                  <MissionImage />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <br />
          <Card>
            <Card.Header as="h3">Vision</Card.Header>
            <Card.Body>
              <Row className="g-3">
                <Col sm={12} lg={6}>
                  <Vision />
                </Col>
                <Col sm={12} lg={6}>
                  <VisionImage />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header as="h3">Values</Card.Header>
            <Card.Body>
              <Values />
            </Card.Body>
          </Card>
          <br />
          <Address />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
