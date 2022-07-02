import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import Linkedin from "./Linkedin";
import Twitter from "./Twitter";
import Medium from "./Medium";
const SocialsLinks = () => {
  return (
    <Card className="shadow-sm">
      <Card.Header as="h3">Socials Links</Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Col sm={12} md={6} lg={4}>
            <Linkedin />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Twitter />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Medium />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SocialsLinks;
