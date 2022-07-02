import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Data } from "../Context/DataContext";
import ClearMyDoubts from "./ClearMyDoubts";

const FooterLinks = () => {
  const { allData } = useContext(Data);
  return (
    <Card>
      <Card.Header as="h3">Footer Links</Card.Header>
      <Card.Body>
        <Row className="g-3">
          {allData?.data?.faqs?.map((items, index) => {
            return (
              <Col sm={12} md={6} lg={4} key={index}>
                <ClearMyDoubts items={items} index={index} />
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FooterLinks;
