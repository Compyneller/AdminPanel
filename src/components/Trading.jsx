import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Expert from "./Expert";
import NewTrader from "./NewTrader";

const Trading = () => {
  return (
    <Card>
      <Card.Header as="h3">Trading</Card.Header>
      <Card.Body>
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <NewTrader />
          </Col>
          <Col sm={12} lg={6}>
            <Expert />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Trading;
