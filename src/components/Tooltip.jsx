import React from "react";

function Tooltip({ children, label, hidden }) {
  return (
    <div className={`tooltip-container relative `}>
      <span className={`tooltip ${hidden ? "hidden" : ""}`}>{label}</span>
      {children}
    </div>
  );
}

export default Tooltip;
