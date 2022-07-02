import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { Data } from "../Context/DataContext";
import Toastify from "toastify-js";
const AboutUsHeading = () => {
  const { allData } = useContext(Data);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      about: {
        heading: input,
        text: allData?.data?.about?.text,
      },
    };
    const { data } = await axios.post(
      "http://34.207.41.229:4100/fincritic/updatehomepage",
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
      <Card.Header as="h5">Heading</Card.Header>
      <Card.Body>
        <form action="" className="w-100" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.about?.heading}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </InputGroup>
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default AboutUsHeading;
