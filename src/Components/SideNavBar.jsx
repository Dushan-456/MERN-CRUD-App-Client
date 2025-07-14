import React from "react";
import {
   Box,
   List,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";

function SideNavBar() {
   return (
      <>
         <Typography variant="h5" textAlign="center" mb={4} fontWeight="bold">
            MERN CRUD
         </Typography>

         <List>
            <ListItemButton component={Link} to="/">
               <ListItemIcon sx={{ color: "white" }}>
                  <DashboardIcon />
               </ListItemIcon>
               <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton component={Link} to="/users">
               <ListItemIcon sx={{ color: "white" }}>
                  <PeopleIcon />
               </ListItemIcon>
               <ListItemText primary="Users" />
            </ListItemButton>

            <ListItemButton component={Link} to="/products">
               <ListItemIcon sx={{ color: "white" }}>
                  <ShoppingCartIcon />
               </ListItemIcon>
               <ListItemText primary="Products" />
            </ListItemButton>

            <ListItemButton component={Link} to="/categories">
               <ListItemIcon sx={{ color: "white" }}>
                  <CategoryIcon />
               </ListItemIcon>
               <ListItemText primary="Categories" />
            </ListItemButton>

            <ListItemButton component={Link} to="/settings">
               <ListItemIcon sx={{ color: "white" }}>
                  <SettingsIcon />
               </ListItemIcon>
               <ListItemText primary="Settings" />
            </ListItemButton>
         </List>
         <p>Developed by Dushan</p>
      </>
   );
}

export default SideNavBar;
