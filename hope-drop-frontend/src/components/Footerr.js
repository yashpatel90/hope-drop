import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@hopedrop.com</p>
            <p>Phone: +1 234 567 890</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/donate-blood">Donate Blood</a></li>
              <li><a href="/host-blood-drive">Host a Blood Drive</a></li>
              <li><a href="/about-us">About Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul>
              <li><button onClick={() => window.location.href = 'https://facebook.com'}>Facebook</button></li>
              <li><button onClick={() => window.location.href = 'https://twitter.com'}>Twitter</button></li>
              <li><button onClick={() => window.location.href = 'https://instagram.com'}>Instagram</button></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;