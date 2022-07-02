import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Data } from "../Context/DataContext";
import Toastify from "toastify-js";
const ClearMyDoubtsHeading = () => {
  const [heading, setHeading] = useState("");
  const { allData } = useContext(Data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    allData?.data?.faqs.splice(0, 1, {
      heading: heading,
      content_boxes: [...allData?.data?.faqs[0].content_boxes],
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
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder={allData?.data?.faqs[0]?.heading}
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
  );
};

export default ClearMyDoubtsHeading;
