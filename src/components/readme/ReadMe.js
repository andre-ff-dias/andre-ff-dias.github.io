import React, { useState } from "react";
import { GoFileBinary } from "react-icons/go";
import { IconContext } from "react-icons/lib";
import Font from "react-font";
import "./ReadMe.css";

function ReadMe() {
  const [fileOpen, setFile] = useState(false);

  const handleFileVisability = () => {
    setFile(!fileOpen);
  };

  const handleDoubleClick = () => {
    if (!fileOpen) {
      handleFileVisability();
    }
  };

  return (
    <div className="readme">
      <div className="file" onDoubleClick={handleDoubleClick}>
        <IconContext.Provider value={{ color: "white", size: "75px" }}>
          <GoFileBinary />
        </IconContext.Provider>
        <br />
        <Font className="name" family="Press Start 2P">
          readme.md
        </Font>
      </div>
      {fileOpen === true ? (
        <div className="file-window" onClick={handleFileVisability}>
          Something about me
        </div>
      ) : null}
    </div>
  );
}

export default ReadMe;
