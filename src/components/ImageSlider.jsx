import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { preventOverflow } from "../utils/NumberUtils";
import ScoreCircle from "../components/ScoreCircle";
import SlideControl from "./SlideControl";

export default function ImageSlider({ data, activeSlide, setActiveSlide }) {
  const slider = useRef();

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      slider.current.childNodes.forEach((child, idx) => {
        if (idx !== activeSlide) child.classList.add("opacity-0");
        else child.classList.remove("opacity-0");
      });

      setActiveSlide(prevSlide => preventOverflow(prevSlide + 1, data.length));
    }, 6000);

    return () => clearInterval(sliderTimer);
  });

  function handleSkip(direction) {
    if (direction === "backward")
      setActiveSlide(prevSlide => preventOverflow(prevSlide - 1, data.length));
    else
      setActiveSlide(prevSlide => preventOverflow(prevSlide + 1, data.length));
  }

  return (
    <div ref={slider} className='overflow-hidden'>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`${
            activeSlide !== idx ? "h-0 opacity-0" : ""
          } inset-0 transition-opacity`}
        >
          <div className='relative'>
            <SlideControl skip={handleSkip} direction='backward' />
            <SlideControl skip={handleSkip} direction='forward' />
            <Link
              className='cursor-pointer'
              to={`/detail/${item.media}/${item.id}`}
            >
              <img
                src={item.backdrop}
                className='w-full max-h-[80vh] object-cover'
                aria-hidden='true'
              />
              <div className='absolute inset-0 top-1/3 bg-gradient-to-t	from-gray-800'></div>
              <div className='absolute top-1/2 w-full text-gray-100 p-4 sm:p-6'>
                <p className=' font-bold tracking-wide text-sm-3xl capitalize truncate sm:text-3xl'>
                  {item.title}
                </p>
                <div className='grid grid-cols-[1fr_auto] items-center my-2 xs:gap-2'>
                  <div className='flex flex-wrap h-5 gap-1 text-xs font-medium tracking-wider text-slate-200 opacity-90 overflow-hidden xs:text-sm xs:gap-2'>
                    {item.genres.map((genre, idx) => (
                      <p key={idx} className='capitalize'>{`${genre}${
                        idx === item.genres.length - 1 ? "" : " |"
                      }`}</p>
                    ))}
                  </div>
                  <div className='text-xs w-8 self-start xs:font-semibold xs:text-sm xs:w-12 xs:row-span-2 sm:w-16 sm:self-center'>
                    <ScoreCircle score={item.score.toFixed(1)} />
                  </div>
                  <p className='max-w-md hidden text-sm xs:line-clamp-2 xs:block sm:line-clamp-4'>
                    {item.overview}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
