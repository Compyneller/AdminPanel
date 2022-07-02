import React, { useContext, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { Data } from "../Context/DataContext";
import Toastify from "toastify-js";
import axios from "axios";

const Card4 = () => {
  const { allData } = useContext(Data);
  const [icon, setIcon] = useState("");
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    allData?.data?.services?.content_boxes?.splice(3, 1, {
      icon: icon || allData?.data?.services?.content_boxes[3].icon,
      headeing: heading || allData?.data?.services?.content_boxes[3].headeing,
      text: text || allData?.data?.services?.content_boxes[3].text,
    });

    const body = {
      services: {
        content_boxes: [...allData?.data?.services?.content_boxes],
      },
    };
    const { data } = await axios.post(
      "http://34.207.41.229:4100/fincritic/updatehomepage",
      body
    );
    if (data.success) {
      Toastify({
        text: "Update Successfully",
        duration: 3000,
      }).showToast();
    }
  };
  return (
    <Card>
      <Card.Header as="h5">Card 4</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.services?.content_boxes[3].icon}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.services?.content_boxes[3].headeing}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.services?.content_boxes[3].text}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default Card4;
