import axios from "axios";
import React, { useContext, useState } from "react";
import { Card, InputGroup, Button, Form } from "react-bootstrap";
import { Data } from "../../../../Context/DataContext";
import Toastify from "toastify-js";

const SocialsLinks = () => {
  const { orgHomepage } = useContext(Data);
  const [twitter, setTwitter] = useState("");
  const [medium, setMedium] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "orgHomepage",
      footer: {
        Address: orgHomepage?.data?.footer?.Address,
        District: orgHomepage?.data?.footer?.District,
        Municipality: orgHomepage?.data?.footer?.Municipality,
        Parish: orgHomepage?.data?.footer?.Parish,
        twitter: twitter || orgHomepage?.data?.footer?.twitter,
        medium: medium || orgHomepage?.data?.footer?.medium,
        linkedin: linkedin || orgHomepage?.data?.footer?.linkedin,
      },
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
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  return (
    <Card style={{ height: "100%" }}>
      <Card.Header as="h5">Edit Socials Links</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Twitter</InputGroup.Text>
            <Form.Control
              placeholder={orgHomepage?.data?.footer?.twitter}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Medium</InputGroup.Text>
            <Form.Control
              placeholder={orgHomepage?.data?.footer?.medium}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Linkedin</InputGroup.Text>
            <Form.Control
              placeholder={orgHomepage?.data?.footer?.linkedin}
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
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

export default SocialsLinks;
