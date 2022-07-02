import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Card, Col, Row, InputGroup, Form } from "react-bootstrap";
import { Data } from "../../../../Context/DataContext";
import SocialsLinks from "./SocialsLinks";
import Toastify from "toastify-js";

const Address = () => {
  const { orgHomepage } = useContext(Data);
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [mun, setMun] = useState("");
  const [parish, setParish] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      _id: "orgHomepage",
      footer: {
        Address: address || orgHomepage?.data?.footer?.Address,
        District: district || orgHomepage?.data?.footer?.District,
        Municipality: mun || orgHomepage?.data?.footer?.Municipality,
        Parish: parish || orgHomepage?.data?.footer?.parish,
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
    }
  };
  return (
    <Row className="g-3">
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header as="h5">Edit Address</Card.Header>
          <Card.Body>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                <Form.Control
                  placeholder={orgHomepage?.data?.footer?.Address}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">District</InputGroup.Text>
                <Form.Control
                  placeholder={orgHomepage?.data?.footer?.District}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  Municipality
                </InputGroup.Text>
                <Form.Control
                  placeholder={orgHomepage?.data?.footer?.Municipality}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={mun}
                  onChange={(e) => setMun(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Parish</InputGroup.Text>
                <Form.Control
                  placeholder={orgHomepage?.data?.footer?.Parish}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={parish}
                  onChange={(e) => setParish(e.target.value)}
                />
              </InputGroup>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </form>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6}>
        <SocialsLinks />
      </Col>
    </Row>
  );
};

export default Address;
