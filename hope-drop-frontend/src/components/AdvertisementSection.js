import React from 'react';
import { Container } from 'react-bootstrap';

const AdvertisementSection = () => {
  return (
    <Container className="advertisement-section">
      <h2>Our Partners</h2>
      <div className="ads">
        <img src="partner1.png" alt="Partner 1" />
        <img src="partner2.png" alt="Partner 2" />
        <img src="partner3.png" alt="Partner 3" />
      </div>
    </Container>
  );
};

export default AdvertisementSection;