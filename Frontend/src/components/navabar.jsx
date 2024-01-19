
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Navabar() {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const logoutHandel = async (e) =>{
    e.preventDefault();
    try {
      // Make a request to the Laravel logout endpoint
      const response = await axios.post('http://127.0.0.1:8000/api/logout');
      if(response.data.message == "Logged out successfully"){
        navigate("/")

    }
      // console.log(response.data.message);
  }catch (error) {
      // console.error(error.response.data);
  }

  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
         logo
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
                <i class="fa-solid fa-bars"></i>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all">All Products</NavLink>
            </li>
            <li>
              <NavLink to="/create">Add Prodcuts</NavLink>
            </li>
            <li>
              <NavLink onClick={logoutHandel}>logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navabar