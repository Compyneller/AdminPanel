import React, { useContext, useState } from "react";
import { Data } from "../../../../Context/DataContext";
import { Card, InputGroup, Form, Button } from "react-bootstrap";
import Toastify from "toastify-js";
import axios from "axios";

const Card3 = () => {
  const { homepage } = useContext(Data);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    homepage?.data?.about?.content_boxes.splice(1, 1, {
      heading: heading,
      text: text,
    });
    const body = {
      _id: "homepage",
      about: {
        sub_text: homepage?.data?.about?.sub_text,
        content_boxes: [...homepage?.data?.about?.content_boxes],
      },
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
    <Card className="shadow-sm">
      <Card.Header></Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={homepage?.data?.about?.content_boxes[1]?.heading}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={homepage?.data?.about?.content_boxes[1]?.text}
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

export default Card3;
