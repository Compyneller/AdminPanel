import axios from "axios";
import React, { useContext, useState } from "react";
import { Card, Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { Data } from "../Context/DataContext";
import ClearMyDoubtsHeading from "./ClearMyDoubtsHeading";
import Toastify from "toastify-js";
import FooterLinkForm from "./FooterLinkForm";

const ClearMyDoubts = ({ items, index }) => {
  const { allData } = useContext(Data);

  const [heading, setHeading] = useState("");
  const handleSubmit = async (e, index) => {
    e.preventDefault();
    allData?.data?.faqs.splice(index, 1, {
      heading: heading || allData?.data?.faqs[index].heading,
      content_boxes: [...allData?.data?.faqs[index]?.content_boxes],
    });
    const body = {
      faqs: [[...allData?.data?.faqs]],
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
    <Card style={{ height: "100%" }}>
      <Card.Header as="h5">{items.heading}</Card.Header>
      <Card.Body>
        <form
          action=""
          className="mb-3"
          onSubmit={(e) => handleSubmit(e, index)}
        >
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={items.heading}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </form>
        {items?.content_boxes?.map((item, idx) => {
          return (
            <FooterLinkForm item={item} index={index} idx={idx} key={idx} />
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default ClearMyDoubts;
