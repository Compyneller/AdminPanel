import React from "react";
import { Container } from "react-bootstrap";
import AboutUs from "../components/AboutUs";
import FooterLinks from "../components/FooterLinks";
import StartYourAccount from "../components/StartYourAccount";
import Trading from "../components/Trading";
import WhatDoWeProvide from "../components/WhatDoWeProvide";

const Home = () => {
  return (
    <Container>
      <AboutUs />
      <br />
      <WhatDoWeProvide />
      <br />
      <Trading />
      <br />
      <StartYourAccount />
      <br />
      <FooterLinks />
    </Container>
  );
};

export default Home;
