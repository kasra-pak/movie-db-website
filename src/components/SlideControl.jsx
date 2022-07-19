import React from "react";
import LeftArrow from "../images/home/left-arrow.svg";
import RightArrow from "../images/home/right-arrow.svg";

export default function SlideControl({ variant, handleClick }) {
  return (
    <button
      onClick={() => handleClick()}
      className={`w-8 fill-gray-200 opacity-90 absolute top-1/3 ${
        variant === "backward" ? "left-1 sm:left-3" : "right-1 sm:right-3"
      } p-0.5 rounded-full z-10 transition-colors hover:bg-gray-200 hover:fill-secondary xs:w-10 sm:w-12 md:w-14`}
    >
      {variant === "backward" ? <LeftArrow /> : <RightArrow />}
    </button>
  );
}
