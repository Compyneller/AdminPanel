import React, { useContext, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

import axios from "axios";
import Toastify from "toastify-js";
import { Data } from "../../../../Context/DataContext";
const Vision = () => {
  const { orgHomepage } = useContext(Data);
  const [heading, setHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "orgHomepage",
      vision: {
        heading: orgHomepage?.data?.vision?.heading,
        text: heading,
        image: orgHomepage?.data?.vision?.image,
      },
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
      <Card.Header as="h5">Edit Vision</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={orgHomepage?.data?.vision?.text}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
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

export default Vision;
