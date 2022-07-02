import React, { useContext, useState } from "react";
import { Data } from "../../../../Context/DataContext";
import { Card, InputGroup, Form, Button } from "react-bootstrap";
import Heading from "./Heading";
import Text from "./Text";
import axios from "axios";
import Toastify from "toastify-js";

const Why = () => {
  const { homepage } = useContext(Data);
  const [textEdit, setTextEdit] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "homepage",
      footer: {
        text_banner: {
          text: textEdit,
        },
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
    <Card className="shadow-sm">
      <Card.Header as="h3">{homepage?.data?.why.heading}</Card.Header>
      <Card.Body>
        <Heading />
        <br />
        <Text />
        <br />
        <Card>
          <Card.Header as="h5">
            {`Edit ${homepage?.data?.footer?.text_banner?.text}`}
          </Card.Header>
          <Card.Body>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder={homepage?.data?.footer?.text_banner?.text}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={textEdit}
                  onChange={(e) => setTextEdit(e.target.value)}
                />
              </InputGroup>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </form>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default Why;
