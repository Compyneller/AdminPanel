import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Data } from "../../Context/DataContext";
import SocialLinksCard from "./SocialLinksCard";

const SocialsLinks = () => {
  const { inrd } = useContext(Data);

  return (
    <Row xs={1} md={2} lg={4} className="g-3">
      {inrd?.data?.footer?.follow?.value?.map((items, index) => {
        return (
          <Col key={index}>
            <SocialLinksCard items={items} index={index} />
          </Col>
        );
      })}
    </Row>
  );
};

export default SocialsLinks;
