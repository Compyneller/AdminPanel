import React, { useContext, useState } from "react";
import Toastify from "toastify-js";
import axios from "axios";
import { Card, InputGroup, Button, Form } from "react-bootstrap";
import { Data } from "../../../../Context/DataContext";
const Linkedin = () => {
  const { homepage } = useContext(Data);
  const [link, setLink] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "homepage",
      footer: {
        linkedin: link,
        twitter: homepage?.data?.footer?.twitter,
        medium: homepage?.data?.footer?.medium,
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
      <Card.Header as="h5">Edit Linkedin</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={homepage?.data?.footer?.linkedin}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={link}
              onChange={(e) => setLink(e.target.value)}
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

export default Linkedin;
