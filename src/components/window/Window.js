import React from "react";
import ReadMe from "../readme/ReadMe";
import Navbar from "../navbar/Navbar";
import "./Window.css";

function Window() {
  return (
    <div className="window">
      <Navbar />
      <ReadMe />
    </div>
  );
}

export default Window;
