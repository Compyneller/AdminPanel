import axios from "axios";
import React, { useContext, useState } from "react";
import { Card, InputGroup, Form, Button } from "react-bootstrap";
import { Data } from "../../Context/DataContext";
import Toastify from "toastify-js";

const Hero = () => {
  const { inrd } = useContext(Data);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      main_heading: heading || inrd?.data?.main_heading,
      sub_heading: subHeading || inrd?.data?.sub_heading,
    };
    const { data } = await axios.post(
      "http://34.207.41.229:4100/inrd/updatehomepage",
      body
    );
    if (data.success) {
      Toastify({
        text: "Update Successfully",
        duration: 3000,
      }).showToast();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <Card>
      <Card.Header as="h5">Edit Hero Section</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={inrd?.data?.main_heading}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={inrd?.data?.sub_heading}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={subHeading}
              onChange={(e) => setSubHeading(e.target.value)}
            />
          </InputGroup>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default Hero;
