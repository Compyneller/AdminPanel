import React, { useContext, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { Data } from "../../../Context/DataContext";
import axios from "axios";
import Toastify from "toastify-js";
const Hero = ({ id }) => {
  const { orgHomepage } = useContext(Data);
  const { orgServices } = useContext(Data);
  const myData =
    id === "homepage" ? orgHomepage : id === "service" ? orgServices : null;

  const [heading, setHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: id,
      main_text: heading,
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
      <Card.Header as="h5">Edit Heading</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={myData?.data?.main_text}
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

export default Hero;
