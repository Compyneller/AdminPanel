import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Card, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Data } from "../../Context/DataContext";
import Toastify from "toastify-js";
import OurTrustedWalletCard from "./OurTrustedWalletCard";

const OurTrustedWallet = () => {
  const { inrd } = useContext(Data);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e, index) => {
    e.preventDefault();

    const body = {
      wallet: {
        heading: heading || inrd?.data?.wallet?.heading,
        text: text || inrd?.data?.wallet?.text,
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
  };
  return (
    <Card>
      <Card.Header as="h5">{inrd?.data?.wallet?.heading}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={inrd?.data?.wallet?.heading}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={inrd?.data?.wallet?.text}
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
        <br />
        <br />
        <OurTrustedWalletCard />
      </Card.Body>
    </Card>
  );
};

export default OurTrustedWallet;
