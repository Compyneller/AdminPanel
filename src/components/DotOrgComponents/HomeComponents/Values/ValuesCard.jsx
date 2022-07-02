import React, { useContext, useState } from "react";
import { Data } from "../../../../Context/DataContext";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import Toastify from "toastify-js";
import axios from "axios";

const ValuesCard = ({ items, index }) => {
  const [icon, setIcon] = useState("");
  const { orgHomepage } = useContext(Data);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e, index) => {
    e.preventDefault();
    orgHomepage?.data?.services?.content_boxes.splice(index, 1, {
      icon: icon || orgHomepage?.data?.services?.content_boxes[index].icon,
      headeing:
        heading || orgHomepage?.data?.services?.content_boxes[index].headeing,
      text: text || orgHomepage?.data?.services?.content_boxes[index].text,
    });
    const body = {
      _id: "orgHomepage",
      services: {
        heading: "Values",
        content_boxes: [...orgHomepage?.data?.services?.content_boxes],
      },
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
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  return (
    <Card className="shadow-sm">
      <Card.Header as="h5">{items?.headeing}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e, index)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items?.icon}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items?.headeing}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items?.text}
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

export default ValuesCard;
