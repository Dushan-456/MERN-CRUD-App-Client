import React from "react";
import UsersTable from "./UsersTable";
import "./Users.css";
import Button from '@mui/material/Button';
import { Link  } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function Users() {
   return (
      <div>
         <div className="users_header">
            <h2>All Users List</h2>
            <Link to="/users/add" style={{ textDecoration: "none" }}>
               <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
                  Add New User
               </Button>
            </Link>
         </div>
         <UsersTable />
      </div>
   );
}

export default Users;
