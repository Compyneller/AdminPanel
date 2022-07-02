import React, { useContext, useState } from "react";
import {
  Container,
  Card,
  InputGroup,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Data } from "../Context/DataContext";
import Toastify from "toastify-js";
import axios from "axios";

const ContactUs = () => {
  const { contact } = useContext(Data);
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "contact",
      sub_heading: text,
    };
    const { data } = await axios.post(
      "http://34.207.41.229:4100/universomagnanimocom/update",
      body
    );
    if (data?.success) {
      Toastify({
        text: "Update Successfully",

        duration: 3000,
      }).showToast();
    }
  };
  const handleHeading = async (e) => {
    e.preventDefault();
    const body = {
      _id: "contact",
      heading: heading,
    };
    const { data } = await axios.post(
      "http://34.207.41.229:4100/universomagnanimocom/update",
      body
    );
    if (data?.success) {
      Toastify({
        text: "Update Successfully",

        duration: 3000,
      }).showToast();
    }
  };
  const handleAddress = async (e) => {
    e.preventDefault();
    const body = {
      _id: "contact",
      address: address,
    };
    const { data } = await axios.post(
      "http://34.207.41.229:4100/universomagnanimocom/update",
      body
    );
    if (data?.success) {
      Toastify({
        text: "Update Successfully",

        duration: 3000,
      }).showToast();
    }
  };
  return (
    <Container className="py-5">
      <Card className="shadow-sm">
        <Card.Header as="h3">Contact Us</Card.Header>
        <Card.Body>
          <Card className="shadow-sm">
            <Card.Header as="h5">Edit Contact Us</Card.Header>
            <Card.Body>
              <Row className="g-3">
                <Col sm={12} lg={6}>
                  <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder={contact?.data?.sub_heading}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </InputGroup>
                    <Button variant="dark" type="submit">
                      Submit
                    </Button>
                  </form>
                </Col>
                <Col sm={12} lg={6}>
                  <form action="" onSubmit={(e) => handleHeading(e)}>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder={contact?.data?.heading}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                      />
                    </InputGroup>
                    <Button variant="dark" type="submit">
                      Submit
                    </Button>
                  </form>
                </Col>
              </Row>
              <br />
              <Card className="shadow-sm">
                <Card.Header as="h5">Edit Address</Card.Header>
                <Card.Body>
                  <form action="" onSubmit={(e) => handleAddress(e)}>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder={contact?.data?.address}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </InputGroup>
                    <Button variant="dark" type="submit">
                      Submit
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUs;
