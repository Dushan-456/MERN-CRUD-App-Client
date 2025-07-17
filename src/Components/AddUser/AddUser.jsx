import React, { useState } from "react";
import "./AddUser.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
   Typography,
   TextField,
   Button,
   Grid,
   FormControl,
   InputLabel,
   Select,
   Box,
   Alert ,
   MenuItem,
   Avatar,
   Stack,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import API from "../../assets/api";

const AddUser = () => {
   // const [formData, setFormData] = useState({
   //    firstName: "",
   //    lastName: "",
   //    gender: "",
   //    dob: "",
   //    age: "",
   //    mobile: "",
   //    linkedin: "",
   //    profilePicture: null,
   // });
   const [successDialogOpen, setSuccessDialogOpen] = useState(false);
   // const [errorMessage, setErrorMessage] = useState("");

   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      dob: "",
      designation: "",
      mobile: "",
      gmail: "",
      age: "",
      gender: "",
      fb_profile: "",
      address: "",
      profilePicture: null,
   });

   const [preview, setPreview] = useState(null);
   const [serverError, setServerError] = useState('');


   const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
         ...prev,
         [name]: value,
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
      // console.log("Form submitted:", formData);
      sendRequest();
      // .then(navigate(`/users`))
   };

   // const sendRequest = async () => {
   //    try {
   //       const res = await API.post("/user/add-user", {
   //          first_name: formData.first_name,
   //          last_name: formData.last_name,
   //          dob: formData.dob,
   //          designation: formData.designation,
   //          mobile: formData.mobile,
   //          gmail: formData.gmail,
   //          age: formData.age,
   //          gender: formData.gender,
   //          fb_profile: formData.fb_profile,
   //          address: formData.address,
   //          image: formData.image,

   //       });

   //       console.log("User added:", res.data);
   //       setSuccessDialogOpen(true);
   //    } catch (error) {
   //       console.error(
   //          "Error adding user:",
   //          error.response?.data || error.message
   //       );
   //       // Optionally, show error message to the user
   //    }
   // };
   const sendRequest = async () => {
      try {
         const form = new FormData();
         form.append("first_name", formData.first_name);
         form.append("last_name", formData.last_name);
         form.append("dob", formData.dob);
         form.append("designation", formData.designation);
         form.append("mobile", formData.mobile);
         form.append("gmail", formData.gmail);
         form.append("age", formData.age);
         form.append("gender", formData.gender);
         form.append("fb_profile", formData.fb_profile);
         form.append("address", formData.address);
         form.append("profilePicture", formData.profilePicture);

         const res = await API.post("/user/add-user", form, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         });

         console.log("User added:", res.data);
         setSuccessDialogOpen(true);
      } catch (error) {
         console.error(
            "Error adding user:",
            error.response?.data || error.message
         );
        setServerError(error.response.data.error || "Something went wrong");

      }
   };

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="add_user">

               <div className="add_user_left">
                  <Typography variant="h4" gutterBottom>
                     Add New User
                  </Typography>
               {  serverError && <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error">{serverError}</Alert>
                     </Stack>}
                  <div className="input">
                     <TextField
                        label="First Name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        fullWidth
                        required
                     />
                     <TextField
                        label="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        fullWidth
                        required
                     />
                  </div>
                  <div className="input">
                     <TextField
                        label="Gmail"
                        name="gmail"
                        value={formData.gmail}
                        onChange={handleChange}
                        fullWidth
                        required
                     />
                  </div>
                  <div className="input">
                     <TextField
                        label="Designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        fullWidth
                        required
                     />
                     <TextField
                        label="Mobile Number"
                        name="mobile"
                        value={formData.mobile}
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
                           label="Gender">
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
                     <TextField
                        label="Addess"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        fullWidth
                     />
                  </div>
                  <div className="input">
                     <TextField
                        label="Facebook Profile Link"
                        name="fb_profile"
                        required
                        value={formData.fb_profile}
                        onChange={handleChange}
                        fullWidth
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
                           size="small"
                           variant="outlined"
                           component="label"
                           startIcon={<CloudUploadIcon />}>
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

         <Dialog
            open={successDialogOpen}
            onClose={() => {
               setSuccessDialogOpen(false);
               navigate("/users");
            }}>
            {/* Centered Icon */}
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
               }}>
               <CheckCircleIcon
                  sx={{
                     width: 50,
                     height: 50,
                     color: "#02ab32",
                  }}
               />
            </Box>

            <DialogTitle sx={{ textAlign: "center" }}>User Added</DialogTitle>

            <DialogContent
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: 4,
               }}>
               <p>The user has been added successfully!</p>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
               <Button
                  onClick={() => {
                     setSuccessDialogOpen(false);
                     navigate("/users");
                  }}
                  autoFocus
                  variant="contained">
                  OK
               </Button>
            </DialogActions>
         </Dialog>
      </>
   );
};

export default AddUser;
