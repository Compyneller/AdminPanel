import axios from "axios";
import React, { useContext, useState } from "react";
import { Data } from "../../Context/DataContext";
import Toastify from "toastify-js";
import { Card, InputGroup, Form, Button } from "react-bootstrap";

const HowToBuySell = () => {
  const { inrd } = useContext(Data);
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      buysell: {
        heading: heading || inrd?.data?.buysell?.heading,
        text: text || inrd?.data?.buysell?.text,
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
      <Card.Header as="h5">{inrd?.data?.buysell?.heading}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={inrd?.data?.buysell?.heading}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={inrd?.data?.buysell?.text}
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

export default HowToBuySell;
