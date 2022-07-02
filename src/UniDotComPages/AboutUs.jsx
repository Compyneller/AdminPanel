import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Heading from "../components/DotComComponents/AboutUs/Heading";
import Text from "../components/DotComComponents/AboutUs/Text";
import Images from "../components/DotComComponents/AboutUs/Images";
import Image2 from "../components/DotComComponents/AboutUs/Image2";
import Text2 from "../components/DotComComponents/AboutUs/Text2";
import Text3 from "../components/DotComComponents/AboutUs/Text3";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <Card className="shadow-sm">
        <Card.Header as="h3">About Us</Card.Header>
        <Card.Body>
          <Heading />
          <br />
          <Text />
          <br />
          <Row className="g-3">
            <Col sm={12} lg={6}>
              <Images />
            </Col>
            <Col sm={12} lg={6}>
              <Image2 />
            </Col>
          </Row>
          <br />
          <Text2 />
          <br />
          <Text3 />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutUs;
