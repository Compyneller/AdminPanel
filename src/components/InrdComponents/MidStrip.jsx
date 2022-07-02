import React, { useContext } from "react";
import { Data } from "../../Context/DataContext";
import { Row, Col } from "react-bootstrap";
import MidStripCard from "./MidStripCard";

const MidStrip = () => {
  const { inrd } = useContext(Data);
  return (
    <Row className="g-3">
      {inrd?.data?.content_boxes?.map((items, index) => {
        return (
          <Col sm={12} md={6} lg={3} key={index}>
            <MidStripCard items={items} index={index} />
          </Col>
        );
      })}
    </Row>
  );
};

export default MidStrip;
