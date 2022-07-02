import React, { useContext, useState } from "react";
import { Button, Card, InputGroup, Form } from "react-bootstrap";
import { Data } from "../Context/DataContext";
import Toastify from "toastify-js";
import axios from "axios";

const One = () => {
  const { allData } = useContext(Data);

  const [icon, setIcon] = useState("");
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    allData?.data?.platform?.content_boxes.splice(0, 1, {
      icon: icon || allData?.data?.platform?.content_boxes[0].icon,
      headeing: heading || allData?.data?.platform?.content_boxes[0].headeing,

      text: text || allData?.data?.platform?.content_boxes[0].text,
    });
    const body = {
      platform: {
        heading: allData?.data?.platform?.heading,
        content_boxes: [...allData?.data?.platform?.content_boxes],
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
      <Card.Header as="h5">
        {allData?.data?.platform?.content_boxes[0].headeing}
      </Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.platform?.content_boxes[0].icon}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.platform?.content_boxes[0].headeing}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.platform?.content_boxes[0].text}
              aria-label="Example text with button addon"
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

export default One;
