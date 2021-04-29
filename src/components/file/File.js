import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import Font from "react-font";
import ReadMe from "../readme/ReadMe";
import "./File.css";

function File({ item }) {
  const [fileOpen, setFile] = useState(false);

  const handleFileVisability = () => {
    setFile(!fileOpen);
  };

  const handleDoubleClick = () => {
    console.log(fileOpen);
    handleFileVisability();
  };

  const renderFile = (file) => {
    switch (file) {
      case "readMe":
        return <ReadMe handler={handleFileVisability} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={item.class} onDoubleClick={handleDoubleClick}>
        <IconContext.Provider value={{ color: "white", size: "75px" }}>
          {item.icon}
        </IconContext.Provider>
        <br />
        <Font className="name" family="Press Start 2P">
          {item.name}
        </Font>
      </div>
      {fileOpen === true ? renderFile(item.file) : null}
    </div>
  );
}

export default File;
