import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <h1>Pokemon App</h1>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" exact>
            home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/collection" exact>
            my collection
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
