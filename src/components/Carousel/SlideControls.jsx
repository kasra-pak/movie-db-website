import React from "react";

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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          viewBox='0 0 32 32'
          className='-scale-x-100 fill-current opacity-50 hover:opacity-100'
        >
          <path d='M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z' />
        </svg>
      </button>
      <span className='min-w-[3ch]'>
        {activeSlideIndex + 1}/{slideCount}
      </span>
      <button
        className='w-7 hover:rounded-full hover:bg-nightRendezvous1'
        onClick={skipToNext}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          viewBox='0 0 32 32'
          className='fill-current opacity-50 hover:opacity-100'
        >
          <path d='M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z' />
        </svg>
      </button>
    </div>
  );
};

export default SlideControls;
