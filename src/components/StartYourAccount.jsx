import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import { Data } from "../Context/DataContext";
import One from "./One";
import Three from "./Three";
import Two from "./Two";
import Toastify from "toastify-js";

const StartYourAccount = () => {
  const { allData } = useContext(Data);
  const [heading, setHeading] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      platform: {
        heading: heading,
        content_boxes: [...allData?.data?.platform?.content_boxes],
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
      <Card.Header as="h3">{allData?.data?.platform?.heading}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.platform?.heading}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </form>
        <br />
        <Row className="g-3">
          <Col sm={12} lg={4}>
            <One />
          </Col>
          <Col sm={12} lg={4}>
            <Two />
          </Col>
          <Col sm={12} lg={4}>
            <Three />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default StartYourAccount;
