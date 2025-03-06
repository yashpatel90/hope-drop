// src/components/SignIn.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5001/api/auth/signin', formData);

      // Save the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to the profile page
      navigate('/profile');
    } catch (error) {
      // Log the error for debugging
      console.error('Error during sign-in:', error);

      // Display a user-friendly error message
      if (error.response) {
        // The request was made and the server responded with a status code
        setError(error.response.data.message || 'Invalid credentials.');
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from the server. Please check if the backend is running.');
      } else {
        // Something happened in setting up the request
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Container>
      <h2>Sign In</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;