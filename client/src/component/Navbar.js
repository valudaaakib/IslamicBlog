import React from "react";
import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header-topbar-main">
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

      <header>
        <nav className="fixed w-full bg-white shadow-md px-10">
          <div className="flex items-center px-6 py-4 justify-between">
            <div className="flex items-center space-x-4">
              <NavLink to="/">
                <img
                  src={require("../assets/image/logo.webp")}
                  alt="logo"
                  width="144px"
                  height="auto"
                />
              </NavLink>
            </div>
            <ul className="flex space-x-6">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Services</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
            <div>
              <NavLink to="/" className="navbar-button">
                Wants To Visit?
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
