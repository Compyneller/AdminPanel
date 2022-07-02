import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Data } from "../../../Context/DataContext";

import OurServicesCardComponent from "./OurServicesCardComponent";

const OurorgServicesCard = () => {
  const { orgServices } = useContext(Data);

  return (
    <Row>
      {orgServices?.data?.content_boxes?.map((items, index) => {
        return (
          <Col sm={12} md={6} lg={4} key={index}>
            <OurServicesCardComponent items={items} index={index} />
          </Col>
        );
      })}
    </Row>
  );
};

export default OurorgServicesCard;
