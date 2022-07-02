import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, ListGroup } from "react-bootstrap";

const Dashboard = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.post(
        "http://34.207.41.229:4000/admin/getAllAdmin"
      );
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={4} className="g-3">
        {data?.data?.map((items, index) => {
          return (
            <Col key={index}>
              <Card bg="danger" text="light" style={{ height: "100%" }}>
                <Card.Header as="h5">{items.email_id}</Card.Header>
                <Card.Body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia, unde!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Dashboard;
