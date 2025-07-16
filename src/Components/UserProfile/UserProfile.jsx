import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
   Typography,
   Card,
   Button,
   Avatar,
   CircularProgress,
} from "@mui/material";
import "./UserProfile.css";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteUserModal from "../Users/DeleteUserModal";
import EdituserModal from "../Users/EdituserModal";
import API from "../../assets/api";

function UserProfile() {
   const BASE_URL = import.meta.env.VITE_BASE_URL;

   const { id } = useParams();
   const [user, setUser] = useState(null); // User data
   const [loading, setLoading] = useState(true); // Loading state
   const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
   const [openEditModal, setopenEditModal] = React.useState(false);
   const [selectedUser, setSelectedUser] = React.useState(null);

   const navigate = useNavigate();

   //  Trigger delete modal
   const handleDelete = (user) => {
      setSelectedUser(user);
      setOpenDeleteModal(true);
   };
   const handleEdit = (user) => {
      setSelectedUser(user);
      setopenEditModal(true);
   };
   //  Confirm delete logic
   const confirmDelete = (id) => {
      console.log("Confirmed delete user ID:", id);
      // TODO: Make delete API call here
      setOpenDeleteModal(false);
   };
   const confirmEdit = (id) => {
      console.log("Confirmed edit user ID:", id);
      // TODO: Make delete API call here
      setopenEditModal(false);
      navigate(`/update/${id}`);
   };

   //  Fetch user data from API
   const fetchUserProfile = async () => {
      try {
         const res = await API.get(`/user/${id}`);
         setUser(res.data.data);
      } catch (error) {
         console.error("Error fetching userr Details:", error);
      } finally {
         setLoading(false);
      }
   };
   useEffect(() => {
      //  API call

      fetchUserProfile();
   }, [id]);

   if (loading) {
      return (
         <div className="profile_loading">
            <CircularProgress color="success" />;
         </div>
      );
   }

   if (!user) {
      return (
         <div style={{ textAlign: "center", fontSize: 30, marginTop: 100 }}>
            User not found.
         </div>
      );
   }

   return (
      <>
         <div className="profile">
            <div className="profile_left">
               <Avatar
                  alt={user.first_name}
                  src={`${BASE_URL}/uploads/${user.profilePicture}`}
                  sx={{
                     width: 300,
                     height: 300,
                     fontSize: 138,
                     margin: "0 auto 1rem",
                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
               />
               <div>
                  <IconButton
                     sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
                     color="primary"
                     onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(user);
                     }}>
                     <EditIcon />
                  </IconButton>
                  <IconButton
                     sx={{
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        marginLeft: "10px",
                     }}
                     color="error"
                     onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(user); // Pass full user
                     }}>
                     <DeleteIcon />
                  </IconButton>
               </div>

               <Typography variant="h4">
                  <b>
                     {user.first_name} {user.last_name}
                  </b>
               </Typography>
               <Typography variant="body1" color="text.secondary">
                  <b>Email:</b> {user.gmail}
               </Typography>
            </div>
            <div className="profile_right">
               <div className="content">
                  <Typography variant="h5">Personal Details</Typography> <br />
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>First Name:</b> {user.first_name}{" "}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>Last Name:</b> {user.last_name}{" "}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>Designation:</b> {user.designation}{" "}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>Gender:</b> {user.gender}{" "}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>Date Of Birth:</b> {user.dob}{" "}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>Age:</b> {user.age}{" "}
                  </Typography>
               </div>
               <div className="content">
                  <Typography variant="h5">Contact Details</Typography>
                  <br />
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>Email:</b> {user.gmail}{" "}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>Address:</b> {user.address}{" "}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                     {" "}
                     <b>Mobile Number:</b> {user.mobile}{" "}
                  </Typography>
                  <br />
                  <Button
                     variant="contained"
                     component="a"
                     href={user.fb_profile}
                     target="_blank"
                     rel="noopener noreferrer">
                     Facebook
                  </Button>
               </div>
            </div>
         </div>
         <DeleteUserModal
            open={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
            onConfirm={confirmDelete}
            user={selectedUser}
         />
         <EdituserModal
            open={openEditModal}
            onClose={() => setopenEditModal(false)}
            onConfirm={confirmEdit}
            user={selectedUser}
         />
      </>
   );
}

export default UserProfile;
