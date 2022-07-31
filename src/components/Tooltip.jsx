import React from "react";

function Tooltip({ children, label, hidden, className }) {
  return (
    <div className={`tooltip-container relative ${className ? className : ""}`}>
      <span className={`tooltip ${hidden ? "hidden" : ""}`}>{label}</span>
      {children}
    </div>
  );
}

export default Tooltip;
