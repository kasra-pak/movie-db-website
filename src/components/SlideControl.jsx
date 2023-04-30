import React from "react";
import LeftArrow from "@/images/home/left-arrow.svg";
import RightArrow from "@/images/home/right-arrow.svg";

export default function SlideControl({ variant, handleClick }) {
  return (
    <button
      onClick={() => handleClick()}
      className={`absolute top-1/3 w-8 fill-gray-200 opacity-90 ${
        variant === "backward" ? "left-1 sm:left-3" : "right-1 sm:right-3"
      } z-10 rounded-full p-0.5 transition-colors hover:bg-gray-200 hover:fill-secondary xs:w-10 sm:w-12 md:w-14`}
    >
      {variant === "backward" ? <LeftArrow /> : <RightArrow />}
    </button>
  );
}
