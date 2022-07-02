import React, { useContext, useState } from "react";
import { Data } from "../../../../Context/DataContext";
import { Row, Col } from "react-bootstrap";
import ValuesCard from "./ValuesCard";

const Values = () => {
  const { orgHomepage } = useContext(Data);

  return (
    <Row className="g-3">
      {orgHomepage?.data?.services?.content_boxes?.map((items, index) => {
        return (
          <Col sm={12} md={6} lg={3} key={index}>
            <ValuesCard items={items} index={index} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Values;
