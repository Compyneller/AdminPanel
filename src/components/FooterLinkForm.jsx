import axios from "axios";
import React, { useContext, useState } from "react";
import {
  Card,
  Col,
  Row,
  InputGroup,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import { Data } from "../Context/DataContext";
import Toastify from "toastify-js";
const FooterLinkForm = ({ item, index, idx }) => {
  const { allData } = useContext(Data);
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = async (e, index, idx) => {
    e.preventDefault();
    console.log(index, idx);
    allData?.data?.faqs[index]?.content_boxes.splice(idx, 1, {
      link: link || allData?.data?.faqs[index]?.content_boxes[idx].link,
      text: text || allData?.data?.faqs[index]?.content_boxes[idx].text,
    });

    const body = {
      faqs: [...allData?.data?.faqs],
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
    <form
      action=""
      className="mb-3"
      onSubmit={(e) => handleSubmit(e, index, idx)}
    >
      <Row className="g-3">
        <Col>
          <Badge className="mb-1" bg="danger">
            Link
          </Badge>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={item.link}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col>
          <Badge className="mb-1 text-dark" bg="warning">
            Link Text
          </Badge>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={item.text}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Button type="submit" variant="dark">
        Submit
      </Button>
    </form>
  );
};

export default FooterLinkForm;
