import React from "react";
import Draggable from "react-draggable";
import "./ReadMe.css";

function ReadMe({ handler }) {
  return (
    <div className="readme">
      <Draggable
        handle="#handle"
        bounds={{ top: -25, left: -285, right: 285, bottom: 85 }}
      >
        <div className="readme-window window">
          <div class="title-bar" id="handle">
            <div class="title-bar-text">README.MD</div>
            <div class="title-bar-controls">
              <button
                aria-label="Close"
                onClick={handler}
                className="window-btn"
              ></button>
            </div>
          </div>
          <div class="window-body">
            <p>There's so much room for activities!</p>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default ReadMe;
