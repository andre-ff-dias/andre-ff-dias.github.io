import React from "react";
import "./Navbar.css";
import Font from "react-font";

function Navbar() {
  return (
    <div className="navbar">
      <div className="btns">
        <div className="btn">
          <span className="btn-txt">
            <Font family="Press Start 2P">Portfolio</Font>
          </span>
        </div>
        <div className="btn">
          <span className="btn-txt">
            <Font family="Press Start 2P">Social</Font>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
