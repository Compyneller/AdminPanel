import React, { useContext, useState } from "react";
import { Card, InputGroup, Button, Form } from "react-bootstrap";
import { Data } from "../../../Context/DataContext";
import axios from "axios";
import Toastify from "toastify-js";

const Text2 = () => {
  const { about } = useContext(Data);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    about?.data?.content_paras.splice(0, 1, {
      heading: heading,
      text: text,
    });
    const body = {
      _id: "about",
      content_paras: [...about?.data?.content_paras],
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
    <Card className="shadow-sm w-100">
      <Card.Header as="h5">{about?.data?.content_paras[0].heading}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={about?.data?.content_paras[0].heading}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={about?.data?.content_paras[0].text}
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
      </Card.Body>
    </Card>
  );
};

export default Text2;
