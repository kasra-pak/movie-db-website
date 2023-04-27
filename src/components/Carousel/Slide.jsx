import React from "react";

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
        <a
          href='#'
          className='mt-4 flex gap-2 text-xs font-bold uppercase opacity-70 hover:underline hover:opacity-100'
        >
          view more
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            viewBox='0 0 24 24'
            className='w-4 fill-current'
          >
            <path d='M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2Z' />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Slide;
