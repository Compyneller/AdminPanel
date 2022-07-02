import React, { useContext, useState } from "react";
import { Card, Row, Form, InputGroup, Col, Button } from "react-bootstrap";
import axios from "axios";
import { Data } from "../Context/DataContext";
import Toastify from "toastify-js";

const NewTrader = () => {
  const { allData } = useContext(Data);
  const [icon, setIcon] = useState("");
  const [subheading, setSubheading] = useState("");
  const [heading, setHeading] = useState("");
  const [subIcon, setSubIcon] = useState("");
  const [subText, setSubText] = useState("");
  const [subIcon2, setSubIcon2] = useState("");
  const [subText2, setSubText2] = useState("");
  const [subIcon3, setSubIcon3] = useState("");
  const [subText3, setSubText3] = useState("");

  // ====================================================
  // ====================================================
  // ====================================================
  // ====================================================
  // ====================================================
  // ====================================================
  // ====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    allData?.data?.trading?.content_boxes.splice(0, 1, {
      icon: icon || allData?.data?.trading?.content_boxes[0]?.icon,
      sub_heading:
        subheading || allData?.data?.trading?.content_boxes[0]?.sub_heading,
      heading: heading || allData?.data?.trading?.content_boxes[0]?.heading,
      link: "Join Us Now",
      info_content: [
        {
          icon:
            subIcon ||
            allData?.data?.trading?.content_boxes[0]?.info_content[0].icon,
          text:
            subText ||
            allData?.data?.trading?.content_boxes[0]?.info_content[0].text,
        },
        {
          icon:
            subIcon2 ||
            allData?.data?.trading?.content_boxes[0]?.info_content[1].icon,
          text:
            subText2 ||
            allData?.data?.trading?.content_boxes[0]?.info_content[1].text,
        },
        {
          icon:
            subIcon3 ||
            allData?.data?.trading?.content_boxes[0]?.info_content[1].icon,
          text:
            subText3 ||
            allData?.data?.trading?.content_boxes[0]?.info_content[1].text,
        },
      ],
    });
    const body = {
      trading: {
        content_boxes: [...allData?.data?.trading?.content_boxes],
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
      <Card.Header as="h5">New Trader?</Card.Header>
      <Card.Body>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.trading?.content_boxes[0]?.icon}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={
                allData?.data?.trading?.content_boxes[0]?.sub_heading
              }
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={allData?.data?.trading?.content_boxes[0]?.heading}
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </InputGroup>
          <Card.Header as="h5" className="mb-3">
            Sub Content
          </Card.Header>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder={
                    allData?.data?.trading?.content_boxes[0]?.info_content[0]
                      .icon
                  }
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value={subIcon}
                  onChange={(e) => setSubIcon(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder={
                    allData?.data?.trading?.content_boxes[0]?.info_content[0]
                      .text
                  }
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value={subText}
                  onChange={(e) => setSubText(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder={
                    allData?.data?.trading?.content_boxes[0]?.info_content[1]
                      .icon
                  }
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value={subIcon2}
                  onChange={(e) => setSubIcon2(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder={
                    allData?.data?.trading?.content_boxes[0]?.info_content[1]
                      .text
                  }
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value={subText2}
                  onChange={(e) => setSubText2(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder={
                    allData?.data?.trading?.content_boxes[0]?.info_content[1]
                      .icon
                  }
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value={subIcon3}
                  onChange={(e) => setSubIcon3(e.target.value)}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder={
                    allData?.data?.trading?.content_boxes[0]?.info_content[1]
                      .text
                  }
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  value={subText3}
                  onChange={(e) => setSubText3(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Row>
          <Button type="submit" variant="dark">
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default NewTrader;
