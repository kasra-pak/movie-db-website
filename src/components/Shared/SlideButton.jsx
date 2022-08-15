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
      } text-xs flex justify-around border border-primary rounded-full max-w-fit gap-5 transition-colors xs:text-base ${
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
            ? "text-slate-200 font-semibold"
            : "text-orange-600"
        } px-2 py-1 shrink-0 tracking-wider uppercase cursor-pointer xs:px-2.5`}
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
            ? "text-slate-200 font-semibold"
            : "text-orange-600"
        } w-full grow px-2 py-1 tracking-wider uppercase cursor-pointer xs:px-2.5`}
      >
        {rightText}
      </label>
    </div>
  );
}

export default SlideButton;
