import React from "react";
import "./AppNavbar.scss";

function AppNavbar() {
  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-menu__item">Garden</li>
        <li className="navbar-menu__item">Community</li>
        <li className="navbar-menu__item">About</li>
      </ul>
    </div>
  );
}

export default AppNavbar;
