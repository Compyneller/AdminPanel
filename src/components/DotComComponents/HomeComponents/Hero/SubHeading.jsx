import React, { useContext, useState } from "react";
import { Card, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { Data } from "../../../../Context/DataContext";
import axios from "axios";
import Toastify from "toastify-js";

const SubHeading = () => {
  const { homepage } = useContext(Data);
  const [mainHeading, setMainHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "homepage",
      sub_text: mainHeading,
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
      <Card.Header as="h5">Edit Sub Heading</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={homepage?.data?.sub_text}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={mainHeading}
              onChange={(e) => setMainHeading(e.target.value)}
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

export default SubHeading;
