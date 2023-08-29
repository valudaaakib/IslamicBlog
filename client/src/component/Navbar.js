import React from "react";
import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full header-topbar-main">
        <div className="header-topbar-sections">
          <div>
            <i className="fa-solid fa-phone me-2"></i>
            <span>Phone: 73832 94925</span>
          </div>
          <div>
            <i className="fa-solid fa-envelope me-2"></i>
            <span>Email: ahmadpadarwala4@gmail.com</span>
          </div>
        </div>
        <div className="header-topbar-sections">
          <span>Follow us: </span>
          <span className="topbar-icons">
            <NavLink to="/" className="topbar-icon-link">
              <i className="fa-brands fa-facebook-f"></i>
            </NavLink>
            <NavLink to="/" className="topbar-icon-link">
              <i className="fa-brands fa-x-twitter"></i>
            </NavLink>
            <NavLink to="/" className="topbar-icon-link">
              <i className="fa-brands fa-linkedin-in"></i>
            </NavLink>
            <NavLink to="/" className="topbar-icon-link">
              <i className="fa-brands fa-instagram"></i>
            </NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
