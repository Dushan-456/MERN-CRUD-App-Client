import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Users from "./Components/Users/Users";
import Settings from "./Components/Settings/Settings";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import UserProfile from "./Components/UserProfile/UserProfile";
import AddUser from "./Components/AddUser/AddUser";
import EditUser from "./Components/EditUser/EditUser";

function App() {
   return (
      <BrowserRouter>
         <div className="app_body">
            <div className="main_container">
               <div className="left_side">
                  <SideNavBar />
               </div>
               <div className="right_side">
                  <Routes>
                     <Route path="/" element={<Dashboard />} />
                     <Route path="/users" element={<Users />} />
                     <Route path="/settings" element={<Settings />} />
                     <Route path="/products" element={<Products />} />
                     <Route path="/categories" element={<Categories />} />
                     <Route path="/profile/:id" element={<UserProfile />} />
                     <Route path="/update/:id" element={<EditUser />} />
                     <Route path="/users/add" element={<AddUser />} />

                  </Routes>
               </div>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
