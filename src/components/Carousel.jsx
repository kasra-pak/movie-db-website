import React, { cloneElement, useState, useEffect } from "react";
import { preventOverflow } from "../utils/NumberUtils";
import SlideControl from "./SlideControl";

export default function Carousel({ className, children }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const slideShow = setInterval(skipToNextSlide, 6000);
    return () => clearInterval(slideShow);
  });

  function skipToPrevSlide() {
    setActiveSlideIndex(prevIndex =>
      preventOverflow(prevIndex - 1, children.length)
    );
  }

  function skipToNextSlide() {
    setActiveSlideIndex(prevIndex =>
      preventOverflow(prevIndex + 1, children.length)
    );
  }

  const slides = children.map((child, idx) => {
    const hidden = activeSlideIndex === idx ? "opacity-100" : "opacity-0 h-0";

    const config = {
      ...child.props,
      className: `${
        child.props.className ?? ""
      } ${hidden} absolute inset-0 overflow-hidden`,
    };

    return cloneElement(child, config);
  });

  return (
    <div className={`${className} w-full relative aspect-[16/9]`}>
      {slides}
      <SlideControl variant='backward' handleClick={skipToPrevSlide} />
      <SlideControl variant='forward' handleClick={skipToNextSlide} />
    </div>
  );
}
