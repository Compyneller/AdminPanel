import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Card, InputGroup, Form } from "react-bootstrap";
import { Data } from "../../../Context/DataContext";
import Toastify from "toastify-js";
const OurServicesCardComponent = ({ items, index }) => {
  const { orgServices } = useContext(Data);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async (e, index) => {
    e.preventDefault();
    orgServices?.data?.content_boxes.splice(index, 1, {
      heading: heading || orgServices?.data?.content_boxes[index].heading,
      text: text || orgServices?.data?.content_boxes[index].text,
      image: image || orgServices?.data?.content_boxes[index].image,
    });
    const body = {
      _id: "service",
      content_boxes: [...orgServices?.data?.content_boxes],
    };
    const { data } = await axios.post(
      "http://34.207.41.229:4100/universomagnanimoorg/update",
      body
    );
    if (data?.success) {
      Toastify({
        text: "Update Successful",

        duration: 3000,
      }).showToast();
    }
  };
  return (
    <Card className="shadow-sm">
      <Card.Header as="h5">{items.heading}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e, index)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.heading}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.text}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.image}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={image}
              onChange={(e) => setImage(e.target.value)}
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

export default OurServicesCardComponent;
