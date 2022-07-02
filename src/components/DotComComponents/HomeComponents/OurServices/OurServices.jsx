import React, { useContext } from "react";
import Heading from "./Heading";
import { Row, Col, Card } from "react-bootstrap";
import Text from "./Text";
import { Data } from "../../../../Context/DataContext";
import OurServicesCard from "./OurServicesCard";

const OurServices = () => {
  const { homepage } = useContext(Data);

  return (
    <Card className="shadow-sm">
      <Card.Header as="h3">
        {` Edit ${homepage?.data?.services?.heading}`}
      </Card.Header>
      <Card.Body>
        <Heading />
        <br />
        <Text />
        <br />
        <Row className="g-3">
          {homepage?.data?.services?.list?.map((items, index) => {
            return (
              <Col sm={12} md={6} lg={3} key={index}>
                <OurServicesCard items={items} index={index} />
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OurServices;
