
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Navabar() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

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
              <NavLink to="/create">Creatte</NavLink>
            </li>
            <li>
              <NavLink to="/logout">logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navabar