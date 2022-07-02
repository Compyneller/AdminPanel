import React, { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Data } from "../../Context/DataContext";
import OurTrustedWalletCardComponent from "./OurTrustedWalletCardComponent";

const OurTrustedWalletCard = () => {
  const { inrd } = useContext(Data);

  return (
    <Row className="g-3">
      {inrd?.data?.wallet?.conten_boxes?.map((items, index) => {
        return (
          <Col sm={12} md={6} lg={3} key={index}>
            <OurTrustedWalletCardComponent items={items} index={index} />
          </Col>
        );
      })}
    </Row>
  );
};

export default OurTrustedWalletCard;
