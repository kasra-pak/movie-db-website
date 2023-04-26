import React, { useState, useEffect } from "react";
import { preventOverflow } from "../utils/NumberUtils";

const NewCarousel = ({ data }) => {
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
    <div className='relative aspect-[16/9]'>
      {data.map((item, idx) => (
        <div
          key={item.id}
          style={{ backgroundImage: `url(${item.backdrop})` }}
          className={`absolute inset-0 bg-cover bg-center text-white ${
            activeSlideIndex === idx ? "opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className='absolute inset-0 bg-black/10 bg-gradient-to-b from-white/0 to-black to-80%'></div>
          <div className='absolute inset-0 flex flex-col justify-end gap-2 p-6'>
            <p className='text-2xl font-bold'>{item.title}</p>
            <div className='flex gap-1'>
              {item.genres.map((genre, idx) =>
                idx === item.genres.length - 1 ? (
                  <p key={idx} className='capitalize'>
                    {genre}
                  </p>
                ) : (
                  <>
                    <p key={idx} className='capitalize'>
                      {genre}
                    </p>
                    <span>|</span>
                  </>
                )
              )}
            </div>
            <p className='line-clamp-1'>{item.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCarousel;
