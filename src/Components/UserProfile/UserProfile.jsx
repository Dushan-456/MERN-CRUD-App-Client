import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Avatar, CircularProgress } from '@mui/material';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null); // User data
  const [loading, setLoading] = useState(true); // Loading state

  // Example: Fetch user data from API or local mock
  useEffect(() => {
    // Simulate an API call with mock data
    setTimeout(() => {
      const mockUser = {
        _id: id,
        name: 'Dushan',
        gmail: 'dushan@mail.lk',
        age: 25,
        address: 'Matara',
        image:
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000',
      };
      setUser(mockUser);
      setLoading(false);
    }, 1000); // Simulate 1 second delay
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Card sx={{ maxWidth: 500, margin: '2rem auto', padding: 2 }}>
      <CardContent style={{ textAlign: 'center' }}>
        <Avatar
          alt={user.name}
          src={user.image}
          sx={{ width: 100, height: 100, margin: '0 auto 1rem' }}
        />
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          Email: {user.gmail}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Age: {user.age}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Address: {user.address}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserProfile;
