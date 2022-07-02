import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Data } from "../../../Context/DataContext";

import MyCardComponent from "./MyCardComponent";

const MyCard = () => {
  const { orgServices } = useContext(Data);

  return (
    <Row>
      {orgServices?.data?.box_container?.map((items, index) => {
        return (
          <Col sm={12} md={6} lg={4} key={index}>
            <MyCardComponent items={items} index={index} />
          </Col>
        );
      })}
    </Row>
  );
};

export default MyCard;
