import React, { useContext, useState } from "react";
import Toastify from "toastify-js";
import axios from "axios";
import { Row, Card, InputGroup, Button, Form, Col } from "react-bootstrap";
import { Data } from "../../Context/DataContext";

const OurTrustedWalletCardComponent = ({ items, index }) => {
  const { inrd } = useContext(Data);
  const [subHeading, setSubHeading] = useState("");
  const [subText, setSubText] = useState("");
  const [icon, setIcon] = useState("");
  const [link, setLink] = useState("");
  const handleSubmit = async (e, index) => {
    e.preventDefault();
    inrd?.data?.wallet?.conten_boxes.splice(index, 1, {
      icon: icon || inrd?.data?.wallet?.conten_boxes[index]?.icon,
      heading: subHeading || inrd?.data?.wallet?.conten_boxes[index]?.heading,
      text: subText || inrd?.data?.wallet?.conten_boxes[index]?.text,
      link: link || inrd?.data?.wallet?.conten_boxes[index]?.link,
    });
    const body = {
      wallet: {
        heading: inrd?.data?.wallet?.heading,
        text: inrd?.data?.wallet?.text,
        conten_boxes: [...inrd?.data?.wallet?.conten_boxes],
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
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <Card>
      <Card.Header as="h5">{items.heading}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e, index)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.icon}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.heading}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={subHeading}
              onChange={(e) => setSubHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.text}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={subText}
              onChange={(e) => setSubText(e.target.value)}
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

export default OurTrustedWalletCardComponent;
