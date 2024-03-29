import React from "react";

function TabTitle({ content, active, toggleActive }) {
  const statusClasses =
    active === content
      ? "bg-midnightExpress text-slate-200 shadow-[rgba(234,88,12,.2)] shadow-md hover:bg-[rgba(234,88,12,.95)] hover:shadow-lg hover:shadow-[rgba(234,88,12,.2)]"
      : "hover:bg-slate-700";

  return (
    <button
      onClick={() => toggleActive(content)}
      className={`shrink-0 rounded-md px-2 py-1 text-xs font-semibold tracking-wide text-midnightExpress transition-[background-color,_color,_box-shadow] xs:text-base ${statusClasses}`}
    >
      <h2 className='capitalize'>{content}</h2>
    </button>
  );
}

export default TabTitle;

// active classes: border-b-0 border-2
// de-active classes: border-b-2
