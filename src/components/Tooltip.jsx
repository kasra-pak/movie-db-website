import React from "react";

function Tooltip({ children, label, position = "bottom", hidden, className }) {
  return (
    <div className={`tooltip-container relative ${className ? className : ""}`}>
      <span className={`tooltip ${position} ${hidden ? "hidden" : ""}`}>
        {label}
      </span>
      {children}
    </div>
  );
}

export default Tooltip;
