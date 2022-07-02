import React, { useContext, useState } from "react";
import { Data } from "../../../../Context/DataContext";
import { Card, InputGroup, Form, Button } from "react-bootstrap";
import Toastify from "toastify-js";
import axios from "axios";

const Card1 = () => {
  const { homepage } = useContext(Data);
  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "homepage",
      about: {
        sub_text: text,
        content_boxes: [...homepage?.data?.about?.content_boxes],
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
    <Card style={{ height: "100%" }} className="shadow-sm">
      <Card.Header></Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={homepage?.data?.about?.sub_text}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={text}
              onChange={(e) => setText(e.target.value)}
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

export default Card1;
