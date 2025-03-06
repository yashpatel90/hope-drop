// src/components/HeroSection.js
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleDonateNow = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/donate-blood');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to Hope Drop</h1>
            <p>
              Your blood can save lives. Schedule your next donation today and make a difference.
            </p>
            <Button variant="danger" size="lg" onClick={handleDonateNow}>
              Donate Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;