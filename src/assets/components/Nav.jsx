import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.svg";
import EventIcon from "../images/icon/Event-icon.svg";

const Nav = () => {
  return (
    <nav className="nav-center">
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
        <span>Ventixe</span>
      </div>

      <div className="events-container">
        <img src={EventIcon} className="event-icon" alt="An event ticket" />
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Events
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
