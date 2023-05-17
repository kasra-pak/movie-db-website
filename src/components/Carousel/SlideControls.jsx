import React from "react";
import Arrow from "@/images/home/arrow.svg";

const SlideControls = ({
  activeSlideIndex,
  slideCount,
  skipToPrev,
  skipToNext,
}) => {
  return (
    <div className='absolute bottom-4 right-4 flex items-center rounded-lg bg-eigengrau p-0.5 text-center text-sm font-semibold text-white backdrop-blur-[6px]'>
      <button
        className='w-7 hover:rounded-full hover:bg-nightRendezvous1'
        onClick={skipToPrev}
      >
        <Arrow className='-scale-x-100 fill-current opacity-50 hover:opacity-100' />
      </button>
      <span className='min-w-[3ch]'>
        {activeSlideIndex + 1}/{slideCount}
      </span>
      <button
        className='w-7 hover:rounded-full hover:bg-nightRendezvous1'
        onClick={skipToNext}
      >
        <Arrow className='fill-current opacity-50 hover:opacity-100' />
      </button>
    </div>
  );
};

export default SlideControls;
