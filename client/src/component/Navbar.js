import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
          <div className="lg:flex block items-center lg:px-6 py-4 justify-between">
            <div>
              <NavLink to="/">
                <img
                  src={require("../assets/image/logo.webp")}
                  alt="logo"
                  width="144px"
                  height="auto"
                />
              </NavLink>
            </div>
            <ul
              className={`lg:space-x-6 lg:space-y-0 space-y-2 lg:mt-0 mt-5 font-semibold tracking-wider navbar-menu lg:flex ${
                openMenu ? "" : "hidden"
              }`}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="lg:block hidden">
              <NavLink to="/" id="navbar-button">
                Wants To Visit?
              </NavLink>
            </div>
            <div className="toggle-btn">
              <button
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
