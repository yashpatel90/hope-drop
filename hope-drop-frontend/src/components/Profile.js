// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch user profile data
        const userResponse = await api.get('/auth/profile');
        setUser(userResponse.data);

        // Fetch donation history
        const donationsResponse = await api.get('/donations');
        setDonations(donationsResponse.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        alert('Error fetching profile data. Please try again.');
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  if (!user) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <h2>Your Profile</h2>
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phoneNumber}</p>
      <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
      <p><strong>Donor ID:</strong> {user.donorId || 'N/A'}</p>

      <h3>Donation History</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Donation ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Hospital</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.donationId}>
              <td>{donation.donationId}</td>
              <td>{donation.donationDate}</td>
              <td>{donation.donationType}</td>
              <td>{donation.hospitalName}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

export default Profile;