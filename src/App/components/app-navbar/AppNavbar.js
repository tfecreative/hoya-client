import React from "react";
import { NavLink } from "react-router-dom";
import "./AppNavbar.scss";

function AppNavbar() {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-menu__item">
          <NavLink
            to="/"
            exact={true}
            className="navbar-menu-link"
            activeClassName="is-active"
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-menu__item">
          <NavLink
            to="/garden"
            className="navbar-menu-link"
            activeClassName="is-active"
          >
            Garden
          </NavLink>
        </li>
        <li className="navbar-menu__item">
          <NavLink
            to="/about"
            className="navbar-menu-link"
            activeClassName="is-active"
          >
            About
          </NavLink>
        </li>
        <li className="navbar-menu__item">
          <NavLink
            to="/sign-up"
            className="navbar-menu-link"
            activeClassName="is-active"
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNavbar;
