import React from "react";
import { Link } from "react-router-dom";
import ArrowLine from "@/images/home/arrow-line.svg";

const Slide = ({ slideIndex, activeSlideIndex, data }) => {
  return (
    <div
      key={data.id}
      style={{ backgroundImage: `url(${data.backdrop})` }}
      className={`absolute inset-0 bg-cover bg-center text-white ${
        activeSlideIndex === slideIndex ? "opacity-100" : "h-0 opacity-0"
      }`}
    >
      <div className='absolute inset-0 bg-black/10 bg-gradient-to-b from-white/0 to-black to-80%'></div>
      <div className='absolute inset-0 flex flex-col justify-end gap-2 p-6'>
        <p className='text-2xl font-bold'>{data.title}</p>
        {/* <div className='flex gap-1'>
          {data.genres.map((genre, idx) =>
            idx === data.genres.length - 1 ? (
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
        </div> */}
        <p className='line-clamp-1 text-sm'>{data.overview}</p>
        <Link
          to={`/detail/${data.media}/${data.id}`}
          className='mt-4 flex gap-2 text-xs font-bold uppercase opacity-70 hover:underline hover:opacity-100'
        >
          view more
          <ArrowLine className='w-4 fill-current' />
        </Link>
      </div>
    </div>
  );
};

export default Slide;
