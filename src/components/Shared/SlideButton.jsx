import React, { useState } from "react";

function SlideButton({
  leftText = "left",
  rightText = "right",
  activeSide,
  id = `${leftText}_${rightText}_slider`,
  toggle,
  className = "",
}) {
  const [state, setState] = useState(activeSide || leftText);

  const handleChange = event => {
    setState(event.target.value);
    toggle(event.target.value);
  };

  return (
    <div
      onChange={handleChange}
      className={`from-orange-600 ${
        state === leftText ? "bg-gradient-to-r" : "bg-gradient-to-l"
      } flex max-w-fit justify-around gap-5 rounded-full border border-primary text-xs transition-colors xs:text-base ${
        state === leftText ? "bg-gradient-to-r" : "bg-gradient-to-l"
      } ${className}`}
    >
      <input
        id={`${id}_${leftText}_input`}
        type='radio'
        value={leftText}
        name='media-type'
        className='hidden'
      />
      <label
        htmlFor={`${id}_${leftText}_input`}
        className={`${
          state === leftText
            ? "font-semibold text-slate-200"
            : "text-orange-600"
        } shrink-0 cursor-pointer px-2 py-1 uppercase tracking-wider xs:px-2.5`}
      >
        {leftText}
      </label>
      <input
        id={`${id}_${rightText}_input`}
        type='radio'
        value={rightText}
        name='media-type'
        className='hidden'
      />
      <label
        htmlFor={`${id}_${rightText}_input`}
        className={`${
          state === rightText
            ? "font-semibold text-slate-200"
            : "text-orange-600"
        } w-full grow cursor-pointer px-2 py-1 uppercase tracking-wider xs:px-2.5`}
      >
        {rightText}
      </label>
    </div>
  );
}

export default SlideButton;
