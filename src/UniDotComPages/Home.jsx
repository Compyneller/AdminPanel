import React from "react";
import Hero from "../components/DotComComponents/HomeComponents/Hero/Hero";
import { Card, Container } from "react-bootstrap";
import Section1 from "../components/DotComComponents/HomeComponents/Section1/Section1";
import OurServices from "../components/DotComComponents/HomeComponents/OurServices/OurServices";
import Why from "../components/DotComComponents/HomeComponents/Why/Why";
import SocialsLinks from "../components/DotComComponents/HomeComponents/SocialsLinks/SocialsLinks";

const Home = () => {
  return (
    <Container className="py-5 w-100">
      <Card>
        <Card.Header as="h3">Home</Card.Header>
        <Card.Body>
          <Hero />
          <br />
          <Section1 />
          <br />
          <OurServices />
          <br />
          <Why />
          <br />
          <SocialsLinks />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
