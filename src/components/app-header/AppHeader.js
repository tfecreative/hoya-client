import React from "react";
import "./AppHeader.scss";
import logo from "hoya-plant.png";

function AppHeader() {
  return (
    <div className="app-header">
      <h1 className="app-title">HOYA</h1>
      <img className="hoya-plant" src={logo} alt="Hoya Logo"></img>
    </div>
  );
}

export default AppHeader;
