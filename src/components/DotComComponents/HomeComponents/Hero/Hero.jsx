import React from "react";
import { Row, Col } from "react-bootstrap";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const Hero = () => {
  return (
    <Row className="g-3">
      <Col sm={12} lg={6}>
        <Heading />
      </Col>
      <Col sm={12} lg={6}>
        <SubHeading />
      </Col>
    </Row>
  );
};

export default Hero;
