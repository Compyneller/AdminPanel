import React, { useContext, useState } from "react";
import { Data } from "../../Context/DataContext";
import Toastify from "toastify-js";
import axios from "axios";
import { Button, InputGroup, Form, Card } from "react-bootstrap";

const MidStripCard = ({ items, index }) => {
  const { inrd } = useContext(Data);
  const [bold, setBold] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e, index) => {
    e.preventDefault();
    inrd?.data?.content_boxes.splice(index, 1, {
      bold_text: bold || inrd?.data?.content_boxes[index]?.bold_text,
      text: text || inrd?.data?.content_boxes[index]?.text,
    });
    const body = {
      content_boxes: [...inrd?.data?.content_boxes],
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
  };
  return (
    <Card>
      <Card.Header as="h5">{items.bold_text}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e, index)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.bold_text}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={bold}
              onChange={(e) => setBold(e.target.value)}
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
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default MidStripCard;
