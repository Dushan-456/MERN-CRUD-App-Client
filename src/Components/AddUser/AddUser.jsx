import React, { useState } from 'react';
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
  <div className="add_user_left">
    
  </div>
  
  </>
    // <div>
    //         <Container maxWidth="sm" sx={{ mt: 5 }}>
    //   <Typography variant="h4" gutterBottom>
    //     Add New User
    //   </Typography>
      
    //   <form onSubmit={handleSubmit}>

    //     <Grid container spacing={5}>
    //       <Grid item xs={12} sm={6}>
    //         <TextField
    //           label="First Name"
    //           name="firstName"
    //           value={formData.firstName}
    //           onChange={handleChange}
    //           fullWidth
    //           required
    //         />
    //       </Grid>

    //       <Grid item xs={12} sm={6}>
    //         <TextField
    //           label="Last Name"
    //           name="lastName"
    //           value={formData.lastName}
    //           onChange={handleChange}
    //           fullWidth
    //           required
    //         />
    //       </Grid>

    //       <Grid item xs={12}>
    //         <FormControl fullWidth required>
    //           <InputLabel>Gender</InputLabel>
    //           <Select
    //             name="gender"
    //             value={formData.gender}
    //             onChange={handleChange}
    //             label="Gender"
    //           >
    //             <MenuItem value="Male">Male</MenuItem>
    //             <MenuItem value="Female">Female</MenuItem>
    //             <MenuItem value="Other">Other</MenuItem>
    //           </Select>
    //         </FormControl>
    //       </Grid>

    //       <Grid item xs={12} sm={6}>
    //         <TextField
    //           type="date"
    //           label="Date of Birth"
    //           name="dob"
    //           value={formData.dob}
    //           onChange={handleChange}
    //           fullWidth
    //           InputLabelProps={{ shrink: true }}
    //           required
    //         />
    //       </Grid>

    //       <Grid item xs={12} sm={6}>
    //         <TextField
    //           label="Age"
    //           name="age"
    //           type="number"
    //           value={formData.age}
    //           onChange={handleChange}
    //           fullWidth
    //           required
    //         />
    //       </Grid>

    //       <Grid item xs={12}>
    //         <TextField
    //           label="Mobile Number"
    //           name="mobile"
    //           value={formData.mobile}
    //           onChange={handleChange}
    //           fullWidth
    //           required
    //         />
    //       </Grid>

    //       <Grid item xs={12}>
    //         <TextField
    //           label="LinkedIn"
    //           name="linkedin"
    //           value={formData.linkedin}
    //           onChange={handleChange}
    //           fullWidth
    //           placeholder="https://linkedin.com/in/username"
    //         />
    //       </Grid>

    //       <Grid item xs={12}>
    //         <Stack direction="row" spacing={2} alignItems="center">
    //           <Avatar
    //             src={preview}
    //             alt="Preview"
    //             sx={{ width: 80, height: 80 }}
    //           />
    //           <Button
    //             variant="contained"
    //             component="label"
    //           >
    //             Upload Profile Picture
    //             <input
    //               hidden
    //               accept="image/*"
    //               type="file"
    //               onChange={handleImageChange}
    //             />
    //           </Button>
    //         </Stack>
    //       </Grid>

    //       <Grid item xs={12}>
    //         <Button variant="contained" fullWidth type="submit">
    //           Submit
    //         </Button>
    //       </Grid>
    //     </Grid>
    //   </form>
    // </Container>
    // </div>
  );
};

export default AddUser;
