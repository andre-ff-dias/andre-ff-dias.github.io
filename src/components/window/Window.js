import React from "react";
import Navbar from "../navbar/Navbar";
import { FileData } from "../file/FileData";
import "./Window.css";
import File from "../file/File";

function Window() {
  return (
    <div className="main-window" id="teste">
      <Navbar />
      {FileData.map((item, index) => {
        return <File item={item} key={index} />;
      })}
    </div>
  );
}

export default Window;
