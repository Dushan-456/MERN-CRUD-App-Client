import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Avatar, CircularProgress } from '@mui/material';
import "./UserProfile.css";
import {IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteUserModal from '../Users/DeleteUserModal';
import EdituserModal from '../Users/EdituserModal';



function UserProfile() {
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
    }, 2000); // Simulate 1 second delay
  }, [id]);

  if (loading) {
    return <profile className="profile_loading">
        <CircularProgress color="success" />;
        </profile>
  }

  return (
    <>
    <div className="profile">
            <div className="profile_left">
                 <Avatar
           alt={user.name}
           src={user.image}
           sx={{ width: 300, height: 300, margin: '0 auto 1rem',boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
         />
         <div>
          <IconButton   
           sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
          color="primary" 
           onClick={(e) => {
             e.stopPropagation();
             handleEdit(user); }}
                              >
            <EditIcon />
         </IconButton>
         <IconButton 
         sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',marginLeft:'10px' }}
         color="error"
          onClick={(e) => {
             e.stopPropagation();
             handleDelete(user); // Pass full user
             }}
         >
             <DeleteIcon />
         </IconButton>
         </div>
         
         <Typography variant="h4">{user.name}</Typography>
         <Typography variant="body1" color="text.secondary">
           Email: {user.gmail}
        </Typography>
    </div>
    <div className="profile_right">
        <div className="content">
                        <Typography variant="h5">Personal Details</Typography> <br />
                        <Typography variant="body1" color="text.secondary"> First Name: {user.gmail} </Typography>
                        <Typography variant="body1" color="text.secondary"> Last Name: {user.gmail} </Typography>
                        <Typography variant="body1" color="text.secondary"> Gender: {user.gmail} </Typography>
                        <Typography variant="body1" color="text.secondary"> Date Of Birth: {user.gmail} </Typography>
                        <Typography variant="body1" color="text.secondary"> Age: {user.gmail} </Typography>
        </div>
        <div className="content">
            <Typography variant="h5">Contact Details</Typography><br />
             <Typography variant="body1" color="text.secondary"> Email: {user.gmail} </Typography>
                        <Typography variant="body1" color="text.secondary"> Mobile Number: {user.gmail} </Typography>
                        <Typography variant="body1" color="text.secondary"> Facebook: {user.gmail} </Typography>
                        <Typography variant="body1" color="text.secondary"> Linkdin: {user.gmail} </Typography>
            
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
