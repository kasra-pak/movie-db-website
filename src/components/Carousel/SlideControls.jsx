import React, { useEffect, useRef } from "react";
import Arrow from "@/images/home/arrow.svg";
import Star from "@/images/home/star.svg";
import { preventOverflow } from "@/utils/NumberUtils";

const SlideControls = ({
  data,
  setActiveSlideIndex,
  activeSlideIndex,
  slideCount,
  skipToPrev,
  skipToNext,
}) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const nodeRefElement = nodeRef.current;
    const childHeight =
      nodeRefElement.children[0].getBoundingClientRect().height;
    nodeRefElement.style.height = `${3 * childHeight}px`;
    nodeRefElement.style.tranform = `translateY(-${2.5 * childHeight}px)`;
    nodeRefElement.scroll(0, childHeight);

    const focusedIndex = Math.floor(slideCount / 2);

    nodeRefElement.childNodes.forEach((child, idx) => {
      const x = Math.abs(focusedIndex - activeSlideIndex);
      const temp = Math.abs(slideCount - x);

      let trans = 0;

      if (activeSlideIndex <= focusedIndex) {
        if (idx <= temp - 1) {
          trans = x;
        } else {
          trans = x - slideCount;
        }
      } else {
        if (idx < x) {
          trans = temp;
        } else {
          trans = -1 * (slideCount - temp);
        }
      }

      child.style.transform = `translateY(${trans * childHeight}px)`;
      // console.log(
      //   `index: ${idx}, active: ${activeSlideIndex}, focusedIndex: ${focusedIndex}, temp: ${temp}, x: ${x}, trans: ${trans}`
      // );
    });
  }, [activeSlideIndex, slideCount]);

  return (
    <>
      <div className='absolute bottom-4 right-4 z-10 flex items-center rounded-lg bg-eigengrau p-0.5 text-center text-sm font-semibold text-white backdrop-blur-[6px] sm:bottom-6 sm:right-6 lg:hidden xl:bottom-14'>
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

      {/* bigger screens controller  */}
      <div
        ref={nodeRef}
        className='absolute right-8 top-1/2 z-10 hidden overflow-y-hidden lg:block'
      >
        {data.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveSlideIndex(idx)}
            className={`${
              activeSlideIndex === idx
                ? "bg-white/[.08] backdrop-blur-[6px]"
                : ""
            } flex w-52 cursor-pointer select-none items-center gap-3 rounded-2xl border border-transparent p-3.5 text-white transition-transform`}
          >
            <div className='aspect-square w-12 shrink-0 overflow-hidden rounded-full'>
              <img src={item.poster} alt={item.title} />
            </div>

            <div className='space-y-1 truncate'>
              <p className='truncate font-barlow text-lg/snug font-semibold'>
                {item.title}
              </p>

              <p className='flex items-start gap-1.5'>
                <Star className='w-4 fill-[#FFAB00]' />
                <span className='text-xs/normal font-semibold opacity-60'>
                  {item.score.toFixed(1)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const neighbors = (idx, len) => {
  const lower = preventOverflow(idx - 1, len);
  const upper = preventOverflow(idx + 1, len);

  return [lower, idx, upper];
};

export default SlideControls;
