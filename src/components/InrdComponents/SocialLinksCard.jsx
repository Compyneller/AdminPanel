import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Card, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Data } from "../../Context/DataContext";
import Toastify from "toastify-js";

const SocialLinksCard = ({ items, index }) => {
  const { inrd } = useContext(Data);
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const handleSubmit = async (e, index) => {
    e.preventDefault();
    console.log(index);
    inrd?.data?.footer?.follow?.value.splice(index, 1, {
      text: text || inrd?.data?.footer?.follow?.value[index].text,
      link: link || inrd?.data?.footer?.follow?.value[index].link,
    });
    const body = {
      footer: {
        follow: {
          value: [...inrd?.data?.footer?.follow?.value],
        },
      },
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
      <Card.Header as="h5">{items.text}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e, index)}>
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
              placeholder={items.link}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={link}
              onChange={(e) => setLink(e.target.value)}
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

export default SocialLinksCard;
