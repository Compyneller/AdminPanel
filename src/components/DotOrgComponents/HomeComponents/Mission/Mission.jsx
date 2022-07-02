import React, { useContext, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

import axios from "axios";
import Toastify from "toastify-js";
import { Data } from "../../../../Context/DataContext";
const Mission = () => {
  const { orgHomepage } = useContext(Data);
  const [heading, setHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "orgHomepage",
      mission: {
        heading: orgHomepage?.data?.mission?.heading,
        text: heading,
        image: orgHomepage?.data?.mission?.image,
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
    }
  };
  return (
    <Card className="shadow-sm">
      <Card.Header as="h5">Edit Mission</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={orgHomepage?.data?.mission?.text}
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

export default Mission;
