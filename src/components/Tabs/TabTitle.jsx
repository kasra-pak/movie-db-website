import React from "react";

function TabTitle({ content, active, toggleActive }) {
  const statusClasses =
    active === content
      ? "text-primary shadow-[0_2px_0_-1px_rgb(31,41,55)]"
      : "border-secondary hover:border-primary";

  return (
    <button
      onClick={() => toggleActive(content)}
      className={`shrink-0 border-primary border  border-b-0 rounded-t-sm py-1.5 px-4 ${statusClasses}`}
    >
      <h2 className='capitalize'>{content}</h2>
    </button>
  );
}

export default TabTitle;

// active classes: border-b-0 border-2
// de-active classes: border-b-2
