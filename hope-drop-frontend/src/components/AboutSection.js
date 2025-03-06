import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const AboutSection = () => {
  return (
    <Container className="about-section">
      <Row>
        <Col md={6}>
          <h2>About Hope Drop</h2>
          <p>
            Hope Drop is a platform dedicated to making blood donation simple, secure, and accessible for everyone. Our mission is to connect donors with those in need and ensure a steady supply of blood for hospitals and patients.
          </p>
        </Col>
        <Col md={6}>
          <img src="./assets/about-image.jpg" alt="About Hope Drop" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;