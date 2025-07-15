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
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

function SideNavBar() {
   const location = useLocation();

   return (
      <>
         <Typography variant="h5" textAlign="center" mb={4} fontWeight="bold">
            MERN CRUD APP
         </Typography>

         <List>


            <ListItemButton
               component={Link}
               to="/"
               selected={location.pathname === "/"}
               sx={{
                  bgcolor: location.pathname === "/" ? 'black' : 'transparent',
                  color: location.pathname === "/" ? 'red' : 'black',
                  '&:hover': {
                     bgcolor: location.pathname === "/" ? 'error.dark' : 'grey.100',
                  },
               }}
            >
               <ListItemIcon sx={{ color: location.pathname === "/" ? "red" : "black" }}>
                  <PeopleIcon />
               </ListItemIcon>
               <ListItemText primary="Dashboard" />
            </ListItemButton>

            

            <ListItemButton
               component={Link}
               to="/users"
               selected={location.pathname === "/users"}
               sx={{
                  bgcolor: location.pathname === "/users" ? 'black' : 'transparent',
                  color: location.pathname === "/users" ? 'red' : 'black',
                  '&:hover': {
                     bgcolor: location.pathname === "/users" ? 'error.dark' : 'grey.100',
                  },
               }}
            >
               <ListItemIcon sx={{ color: location.pathname === "/users" ? "red" : "black" }}>
                  <PeopleIcon />
               </ListItemIcon>
               <ListItemText primary="Users" />
            </ListItemButton>


            <ListItemButton
               component={Link}
               to="/products"
               selected={location.pathname === "/products"}
               sx={{
                  bgcolor: location.pathname === "/products" ? 'black' : 'transparent',
                  color: location.pathname === "/products" ? 'red' : 'black',
                  '&:hover': {
                     bgcolor: location.pathname === "/products" ? 'error.dark' : 'grey.100',
                  },
               }}
            >
               <ListItemIcon sx={{ color: location.pathname === "/products" ? "red" : "black" }}>
                  <ShoppingCartIcon />
               </ListItemIcon>
               <ListItemText primary="Products" />
            </ListItemButton>


            <ListItemButton
               component={Link}
               to="/categories"
               selected={location.pathname === "/categories"}
               sx={{
                  bgcolor: location.pathname === "/categories" ? 'black' : 'transparent',
                  color: location.pathname === "/categories" ? 'red' : 'black',
                  '&:hover': {
                     bgcolor: location.pathname === "/categories" ? 'error.dark' : 'grey.100',
                  },
               }}
            >
               <ListItemIcon sx={{ color: location.pathname === "/categories" ? "red" : "black" }}>
                  <CategoryIcon />
               </ListItemIcon>
               <ListItemText primary="Categories" />
            </ListItemButton>



    


            <ListItemButton
               component={Link}
               to="/settings"
               selected={location.pathname === "/settings"}
               sx={{
                  bgcolor: location.pathname === "/settings" ? 'black' : 'transparent',
                  color: location.pathname === "/settings" ? 'red' : 'black',
                  '&:hover': {
                     bgcolor: location.pathname === "/settings" ? 'error.dark' : 'grey.100',
                  },
               }}
            >
               <ListItemIcon sx={{ color: location.pathname === "/settings" ? "red" : "black" }}>
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
