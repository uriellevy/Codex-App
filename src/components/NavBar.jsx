import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <h1>Pokemon App</h1>
      <ul className="nav-menu">
        <li className="nav-item">home</li>
        <li className="nav-item">my collection</li>
      </ul>
    </nav>
  );
};

export default NavBar;
