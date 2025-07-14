import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import SideNavBar from "./Components/SideNavBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Users from "./Components/Users/Users";
import Settings from "./Components/Settings/Settings";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";

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
                  </Routes>
               </div>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
