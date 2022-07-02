import React, { useContext, useState } from "react";
import { Card, InputGroup, Button, Form } from "react-bootstrap";
import { Data } from "../../../Context/DataContext";
import axios from "axios";
import Toastify from "toastify-js";

const Text = () => {
  const { about } = useContext(Data);
  const [heading, setHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "about",
      sub_heading: heading,
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
    <Card className="shadow-sm w-100">
      <Card.Header as="h5">Edit About Us Sub Heading</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={about?.data?.sub_heading}
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

export default Text;
