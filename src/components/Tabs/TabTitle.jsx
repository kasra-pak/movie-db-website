import React from "react";

function TabTitle({ content, active, toggleActive }) {
  const statusClasses =
    active === content
      ? "bg-primary text-slate-200 shadow-[rgba(234,88,12,.2)] shadow-md hover:bg-[rgba(234,88,12,.95)] hover:shadow-lg hover:shadow-[rgba(234,88,12,.2)]"
      : "hover:bg-slate-700";

  return (
    <button
      onClick={() => toggleActive(content)}
      className={`text-xs text-primary font-semibold tracking-wide shrink-0 rounded-md px-2 py-1 xs:text-base transition-[background-color,_color,_box-shadow] ${statusClasses}`}
    >
      <h2 className='capitalize'>{content}</h2>
    </button>
  );
}

export default TabTitle;

// active classes: border-b-0 border-2
// de-active classes: border-b-2
