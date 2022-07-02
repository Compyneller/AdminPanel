import React, { useContext, useState } from "react";
import { Data } from "../../../../Context/DataContext";
import Toastify from "toastify-js";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
import axios from "axios";

const Heading = () => {
  const { homepage } = useContext(Data);
  const [heading, setHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "homepage",
      why: {
        heading: heading,
        text: homepage?.data?.why?.text,
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
    <Card>
      <Card.Header as="h5">
        {` Edit ${homepage?.data?.why?.heading} heading`}
      </Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={homepage?.data?.why?.heading}
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

export default Heading;
