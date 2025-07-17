import React, { useEffect, useState } from "react";
import "./EditUser.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
   MenuItem,
   Avatar,
   Stack,
} from "@mui/material";
import API from "../../assets/api";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
   const [successDialogOpen, setSuccessDialogOpen] = useState(false);
   // const [errorMessage, setErrorMessage] = useState("");

   const navigate = useNavigate();

   const { id } = useParams();

   const [user, setUser] = useState(null);
   const [preview, setPreview] = useState(null); // Preview image state
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

   // FETCH user data and update formData + image preview
   useEffect(() => {
      const fetchUserProfile = async () => {
         try {
            const res = await API.get(`/user/${id}`);
            const userData = res.data.data;
            setUser(userData);

            setFormData({
               first_name: userData.first_name || "",
               last_name: userData.last_name || "",
               dob: userData.dob || "",
               designation: userData.designation || "",
               mobile: userData.mobile || "",
               gmail: userData.gmail || "",
               age: userData.age || "",
               gender: userData.gender || "",
               fb_profile: userData.fb_profile || "",
               address: userData.address || "",
               profilePicture: userData.profilePicture || null,
            });

            const baseUrl = import.meta.env.VITE_BASE_URL;
            setPreview(`${baseUrl}/uploads/${userData.profilePicture}`);
         } catch (error) {
            console.error("Error fetching user details:", error);
         }
      };

      fetchUserProfile();
   }, [id]);

   //  Handle input changes
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   // Handle image input and preview
   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setFormData((prev) => ({ ...prev, profilePicture: file }));

         const reader = new FileReader();
         reader.onloadend = () => {
            setPreview(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   //  Handle form submit and send formData
   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const updatedData = new FormData();

         // Append all fields
         updatedData.append("first_name", formData.first_name);
         updatedData.append("last_name", formData.last_name);
         updatedData.append("dob", formData.dob);
         updatedData.append("designation", formData.designation);
         updatedData.append("mobile", formData.mobile);
         updatedData.append("gmail", formData.gmail);
         updatedData.append("age", formData.age);
         updatedData.append("gender", formData.gender);
         updatedData.append("fb_profile", formData.fb_profile);
         updatedData.append("address", formData.address);

         // Only append profile picture if it’s a file (not a string URL)
         if (formData.profilePicture instanceof File) {
            updatedData.append("profilePicture", formData.profilePicture);
         }

         const res = await API.put(`/user/update-user/${id}`, updatedData);
         console.log("User updated successfully:", res.data);

         setSuccessDialogOpen(true);
      } catch (error) {
         console.error("Update failed:", error.response?.data || error.message);
      }
   };

   //  Prevent rendering until user data is loaded
   if (!user) return <div>Loading user data...</div>;

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="add_user">
               <div className="add_user_left">
                  <Typography variant="h4" gutterBottom>
                     Update {formData.first_name}
                  </Typography>

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
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        fullWidth
                        required
                     />
                  </div>

                  <div className="input">
                     <TextField
                        label="Facebook Profile Link"
                        name="fb_profile"
                        value={formData.fb_profile}
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
                           alt={formData.first_name}
                           
                           sx={{ width: 250,fontSize: 138, height: 250 }}
                        />
                        <Button
                           size="small"
                           variant="outlined"
                           component="label"
                           startIcon={<CloudUploadIcon />}>
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

         <Dialog
            open={successDialogOpen}
            onClose={() => {
               setSuccessDialogOpen(false);
               navigate(`/profile/${id}`);
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

            <DialogTitle sx={{ textAlign: "center" }}>User Updated</DialogTitle>

            <DialogContent
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: 4,
               }}>
               <p>The user has been updated successfully!</p>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
               <Button
                  onClick={() => {
                     setSuccessDialogOpen(false);
                     navigate(`/profile/${id}`);
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

export default EditUser;
