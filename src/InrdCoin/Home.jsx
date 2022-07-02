import React from "react";
import Hero from "../components/InrdComponents/Hero";
import { Container, Row, Col, Card } from "react-bootstrap";
import MidStrip from "../components/InrdComponents/MidStrip";
import MultiChain from "../components/InrdComponents/MultiChain";
import OurTrustedWallet from "../components/InrdComponents/OurTrustedWallet";
import HowToBuySell from "../components/InrdComponents/HowToBuySell";
import SocialsLinks from "../components/InrdComponents/SocialsLinks";

const Home = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col>
          <Hero />
        </Col>
      </Row>
      <br />
      <MidStrip />
      <br />
      <MultiChain />
      <br />
      <OurTrustedWallet />
      <br />
      <HowToBuySell />
      <br />
      <Card>
        <Card.Header as="h3">Socials Links</Card.Header>
        <Card.Body>
          <SocialsLinks />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
