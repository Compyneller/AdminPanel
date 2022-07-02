import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const WhatDoWeProvide = () => {
  return (
    <Card>
      <Card.Header as="h3">What do we provide?</Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Col sm={12} md={6} lg={3}>
            <Card1 />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card2 />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card3 />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card4 />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WhatDoWeProvide;
