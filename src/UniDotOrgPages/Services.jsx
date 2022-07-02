import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Hero from "../components/DotOrgComponents/HomeComponents/Hero";
import SubHeading from "../components/DotOrgComponents/HomeComponents/SubHeading";
import MyCard from "../components/DotOrgComponents/ServicesComponents/MyCard";
import OurServicesCard from "../components/DotOrgComponents/ServicesComponents/OurServicesCard";

const Services = () => {
  const id = "service";
  return (
    <Container className="py-5">
      <Card>
        <Card.Header as="h3">Services</Card.Header>
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
          <OurServicesCard />
          <br />
          <MyCard />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Services;
