// src/components/DonateBlood.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const DonateBlood = () => {
  const [formData, setFormData] = useState({
    zipCode: '',
    country: '',
    donationType: 'whole-blood',
    startDate: '',
    endDate: '',
    distance: 10, // Default distance in miles
  });
  const [centers, setCenters] = useState([]);
  const [error, setError] = useState('');
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default map center (London)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Mock API call to find nearest centers (replace with a real API)
      const response = await axios.get('https://api.mockapi.io/centers', {
        params: {
          zipCode: formData.zipCode,
          country: formData.country,
          distance: formData.distance,
        },
      });

      // Update centers and map center
      setCenters(response.data);
      if (response.data.length > 0) {
        setMapCenter([response.data[0].latitude, response.data[0].longitude]);
      }
      setError('');
    } catch (error) {
      console.error('Error fetching centers:', error);
      setError('Unable to find donation centers. Please try again.');
    }
  };

  return (
    <Container>
      <h2>Donate Blood</h2>
      <Row>
        <Col md={6}>
          {/* Blood Donation Information */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Why Donate Blood?</Card.Title>
              <Card.Text>
                Blood donation is a simple, safe, and rewarding process that can save lives. Here’s what you need to know:
                <ul>
                  <li>You must be at least 18 years old.</li>
                  <li>You should weigh at least 110 pounds.</li>
                  <li>You must be in good health on the day of donation.</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Appointment Form */}
          <Form onSubmit={handleSearch}>
            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Donation Type</Form.Label>
              <Form.Control
                as="select"
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
                required
              >
                <option value="whole-blood">Whole Blood</option>
                <option value="plasma">Plasma</option>
                <option value="platelets">Platelets</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Distance (in miles)</Form.Label>
              <Form.Control
                type="number"
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                min="1"
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mt-3">
              Search
            </Button>
          </Form>

          {/* Display Locations in a Table */}
          {centers.length > 0 && (
            <div className="mt-4">
              <h4>Donation Centers</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Distance (miles)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {centers.map((center) => (
                    <tr key={center.id}>
                      <td>{center.name}</td>
                      <td>{center.address}</td>
                      <td>{center.distance}</td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => window.open(center.portalUrl, '_blank')}
                        >
                          Schedule Appointment
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Col>

        {/* Map */}
        <Col md={6}>
          {error && <Alert variant="danger">{error}</Alert>}
          {centers.length > 0 && (
            <>
              <h4>Map View</h4>
              <MapContainer center={mapCenter} zoom={13} style={{ height: '300px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {centers.map((center) => (
                  <Marker key={center.id} position={[center.latitude, center.longitude]}>
                    <Popup>
                      <strong>{center.name}</strong>
                      <br />
                      {center.address}
                      <br />
                      <Button
                        variant="link"
                        onClick={() => window.open(center.portalUrl, '_blank')}
                      >
                        Schedule Appointment
                      </Button>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DonateBlood;