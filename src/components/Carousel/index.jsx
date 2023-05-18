import React, { useState, useEffect } from "react";
import { preventOverflow } from "@/utils/NumberUtils";
import Slide from "./Slide";
import SlideControls from "./SlideControls";

const Carousel = ({ data }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const slideShow = setInterval(skipToNextSlide, 6000);
    return () => clearInterval(slideShow);
  });

  function skipToPrevSlide() {
    setActiveSlideIndex(prevIndex =>
      preventOverflow(prevIndex - 1, data.length)
    );
  }

  function skipToNextSlide() {
    setActiveSlideIndex(prevIndex =>
      preventOverflow(prevIndex + 1, data.length)
    );
  }

  return (
    <div className='relative aspect-[16/9] max-h-screen w-full'>
      <div className='relative bottom-0 mx-auto h-full w-full max-w-6xl bg-black'>
        <SlideControls
          data={data}
          activeSlideIndex={activeSlideIndex}
          slideCount={data.length}
          skipToNext={skipToNextSlide}
          skipToPrev={skipToPrevSlide}
        />
      </div>

      {data.map((item, idx) => (
        <Slide
          key={item.id}
          slideIndex={idx}
          activeSlideIndex={activeSlideIndex}
          data={item}
        />
      ))}
    </div>
  );
};

export default Carousel;
