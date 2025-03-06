import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PromotionSection = () => {
  return (
    <Container className="promotion-section">
      <h2>Why Donate Blood?</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Save Lives</Card.Title>
              <Card.Text>
                Every donation can save up to 3 lives. Your contribution matters!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Health Benefits</Card.Title>
              <Card.Text>
                Donating blood reduces the risk of heart disease and improves overall health.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Community Impact</Card.Title>
              <Card.Text>
                Join a community of lifesavers and make a difference in your area.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PromotionSection;