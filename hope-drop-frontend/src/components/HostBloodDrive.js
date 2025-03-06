// src/components/HostBloodDrive.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const HostBloodDrive = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    reason: '',
    location: '',
    countryTown: '',
    desiredDate: '',
    isStudent: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/host-blood-drive', formData); // Removed unused 'response'
      alert('Blood drive registration successful!');
      navigate('/');
    } catch (error) {
      alert('Error registering blood drive.');
      console.error(error);
    }
  };

  return (
    <Container>
      <h2>Host a Blood Drive</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastName" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" name="phoneNumber" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Reason for Hosting</Form.Label>
          <Form.Control as="textarea" name="reason" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name="location" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country/Town</Form.Label>
          <Form.Control type="text" name="countryTown" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Desired Date</Form.Label>
          <Form.Control type="date" name="desiredDate" onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Are you a student?"
            name="isStudent"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="danger">Submit</Button>
      </Form>
    </Container>
  );
};

export default HostBloodDrive;