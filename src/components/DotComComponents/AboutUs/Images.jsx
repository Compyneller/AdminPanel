import React, { useContext, useState } from "react";
import { Card, InputGroup, Button, Form } from "react-bootstrap";
import axios from "axios";
import Toastify from "toastify-js";
import { Data } from "../../../Context/DataContext";

const Images = () => {
  const { about } = useContext(Data);
  const [heading, setHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    about?.data?.images.splice(0, 1, heading);
    const body = {
      _id: "about",
      images: [...about?.data?.images],
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
      <Card.Header as="h5">Edit Images</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Image Link"
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

export default Images;
