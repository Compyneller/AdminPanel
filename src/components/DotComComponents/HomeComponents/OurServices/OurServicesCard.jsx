import React, { useContext, useState } from "react";
import Heading from "./Heading";
import { Row, Col, Card, InputGroup, Form, Button } from "react-bootstrap";
import Text from "./Text";
import { Data } from "../../../../Context/DataContext";
import axios from "axios";
import Toastify from "toastify-js";

const OurServicesCard = ({ items, index }) => {
  const { homepage } = useContext(Data);
  const [text, setText] = useState("");
  const [myIndex, setMyIndex] = useState("");

  const handleSubmit = async (e, index) => {
    e.preventDefault();
    homepage?.data?.services?.list.splice(index, 1, text);
    const body = {
      _id: "homepage",
      services: {
        heading: homepage?.data?.services?.heading,
        text: homepage?.data?.services?.text,
        list: [...homepage?.data?.services?.list],
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
    <Card className="shadow-sm" style={{ height: "100%" }}>
      <Card.Header as="h5">{items}</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e, index)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
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

export default OurServicesCard;
