import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";
const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <MdCatchingPokemon size="30px" />
        <h1>Catch'Em All</h1>
      </div>

      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeClassName="nav-active"
          >
            Codex
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/collection"
            exact
            className="nav-link"
            activeClassName="nav-active"
          >
            My Collection
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
