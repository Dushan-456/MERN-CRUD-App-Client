import React, { useState } from 'react';
import "./AddUser.css";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  Stack
} from '@mui/material';

const AddUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    age: '',
    mobile: '',
    linkedin: '',
    profilePicture: null
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePicture: file }));

      // Preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Send formData to API (e.g., with FormData object)
  };

  return (
    <>
     <form onSubmit={handleSubmit}>
  <div className='add_user'>
  <div className="add_user_left">
          <Typography variant="h4" gutterBottom>
        Add New User
      </Typography>
      <div className="input">
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
        
        
      </div>

      <div className="input">
            <FormControl fullWidth required>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="Gender"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              type="date"
              label="Date of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
            />
             <TextField
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              fullWidth
              required
            />
      </div>
      <div className="input">
             <Button variant="contained" fullWidth type="submit">
              Add New User
            </Button>
      </div>
    

  </div>
  <div className="add_user_right">

              <Grid item xs={12}>
            <Stack direction="column" spacing={2} alignItems="center">
              <Avatar
                src={preview}
                alt="Preview"
                sx={{ width: 250, height: 250 }}
              />
              <Button
                variant="contained"
                component="label"
              >
                Upload Profile Picture
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleImageChange}
                />
              </Button>
            </Stack>
          </Grid>

  </div>
  </div>
  </form>
    </>

  );
};

export default AddUser;
