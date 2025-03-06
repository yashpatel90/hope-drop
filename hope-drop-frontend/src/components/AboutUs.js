import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2>About Us</h2>
          <p>
            Hope Drop is a platform dedicated to making blood donation simple, secure, and accessible for everyone.
            Our mission is to connect donors with those in need and ensure a steady supply of blood for hospitals and patients.
          </p>
          <h3>Our Team</h3>
          <p>
            We are a group of passionate individuals committed to saving lives through technology and community engagement.
          </p>
          <h3>Contact Us</h3>
          <p>
            Email: info@hopedrop.com<br />
            Phone: +1 234 567 890
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;