import React, { useContext, useState } from "react";
import { Container, Card, InputGroup, Form, Button } from "react-bootstrap";
import { Data } from "../Context/DataContext";
import axios from "axios";
import Toastify from "toastify-js";

const News = () => {
  const { news } = useContext(Data);
  console.log(news);
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "newsupdate",
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
  const handleSubSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "newsupdate",
      sub_heading: subHeading,
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
  const handleText = async (e) => {
    e.preventDefault();
    const body = {
      _id: "newsupdate",
      text: text,
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
      _id: "newsupdate",
      call_to_action: address,
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
        <Card.Header as="h3">Edit News & Updates</Card.Header>
        <Card.Body>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder={news?.data?.heading}
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
          <br />
          <form action="" onSubmit={(e) => handleSubSubmit(e)}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder={news?.data?.sub_heading}
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
          <br />
          <form action="" onSubmit={(e) => handleText(e)}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder={news?.data?.text}
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
          <br />
          <form action="" onSubmit={(e) => handleAddress(e)}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder={news?.data?.call_to_action}
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
    </Container>
  );
};

export default News;
