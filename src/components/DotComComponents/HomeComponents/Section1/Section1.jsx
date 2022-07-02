import React from "react";
import Card1 from "./Card1";
import { Row, Col } from "react-bootstrap";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Section1 = () => {
  return (
    <Row className="g-3">
      <Col sm={12} md={6} lg={4}>
        <Card1 />
      </Col>
      <Col sm={12} md={6} lg={4}>
        <Card2 />
      </Col>
      <Col sm={12} md={6} lg={4}>
        <Card3 />
      </Col>
    </Row>
  );
};

export default Section1;
