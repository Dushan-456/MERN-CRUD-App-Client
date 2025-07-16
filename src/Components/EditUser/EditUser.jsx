import React, { useEffect, useState } from 'react';
import "./EditUser.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
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
import API from '../../assets/api';
import { useParams } from 'react-router-dom';



const EditUser = () => {

  const { id } = useParams();
    const [user, setUser] = useState(null); // User data
  
  //  Fetch user data from API 
   const fetchUserProfile = async () => {
   try {
      const res = await API.get(`/user/${id}`);
      setUser(res.data.data);
   } catch (error) {
      console.error("Error fetching userr Details:", error);
   } 
  //  finally {
  //     setLoading(false); 
  //  }
};

const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  gender: '',
  dob: '',
  age: '',
  mobile: '',
  linkedin: '',
  profilePicture: ''
});


  useEffect(() => {  
     fetchUserProfile();
  }, [id]);


  useEffect(() => {
  if (user) {
    setFormData({
      firstName: user.name,
      lastName: user.name,
      gender: 'Male',
      dob: '2025-01-02',
      age: user.age,
      mobile: '',
      linkedin: '',
      profilePicture: user.name || ''
    });
    setPreview(user.image || '');
  }
}, [user]);

  const [preview, setPreview] = useState(null);

  useEffect(() => {
  if (user && user.image) {
    setPreview(user.image);
  }
}, [user]);

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

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const updatedData = new FormData();
    updatedData.append('name', formData.firstName);
    updatedData.append('gmail', formData.lastName);
    updatedData.append('age', formData.age);
    updatedData.append('gender', formData.gender);
    updatedData.append('dob', formData.dob);
    updatedData.append('linkedin', formData.linkedin);
    updatedData.append('mobile', formData.mobile);
    if (formData.profilePicture instanceof File) {
      updatedData.append('image', formData.profilePicture);
    }

    const res = await API.put(`/user/update-user/${id}`, updatedData);
    console.log("User updated:", res.data);
    // Show success or redirect
  } catch (error) {
    console.error("Update failed:", error.response?.data || error.message);
  }
};


  return (
    <>
     <form onSubmit={handleSubmit}>
  <div className='add_user'>
  <div className="add_user_left">
          <Typography variant="h4" gutterBottom>
        Update {formData.firstName}
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
            Update User
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
              size="small"
              variant="outlined"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Change Profile Picture
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

export default EditUser;
