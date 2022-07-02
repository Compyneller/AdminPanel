import React, { useContext, useState } from "react";
import { Data } from "../../../../Context/DataContext";
import Toastify from "toastify-js";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
import axios from "axios";

const Text = () => {
  const { homepage } = useContext(Data);
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "homepage",
      why: {
        heading: homepage?.data?.why?.heading,
        text: text,
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
      <Card.Header as="h5">Edit Text</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={homepage?.data?.why?.text}
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

export default Text;
