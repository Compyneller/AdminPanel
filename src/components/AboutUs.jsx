import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import AboutUsHeading from "./AboutUsHeading";
import AboutUsText from "./AboutUsText";

const AboutUs = () => {
  return (
    <Card>
      <Card.Header as="h3">About Us</Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <AboutUsHeading />
          </Col>
          <Col sm={12} lg={6}>
            <AboutUsText />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AboutUs;
