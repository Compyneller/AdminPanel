import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Card, InputGroup, Form } from "react-bootstrap";
import { Data } from "../../../Context/DataContext";
import Toastify from "toastify-js";

const MyCardComponent = ({ items, index }) => {
  const { orgServices } = useContext(Data);

  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async (e, index) => {
    e.preventDefault();
    orgServices?.data?.box_container.splice(index, 1, {
      heading: heading || orgServices?.data?.box_container[index].heading,
      main_text: text || orgServices?.data?.box_container[index].main_text,
      sub_text: subText || orgServices?.data?.box_container[index].sub_text,
      background_image:
        image || orgServices?.data?.box_container[index].background_image,
    });
    const body = {
      _id: "service",
      box_container: [...orgServices?.data?.box_container],
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
              placeholder={items.main_text}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.sub_text}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={subText}
              onChange={(e) => setSubText(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.background_image}
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

export default MyCardComponent;
