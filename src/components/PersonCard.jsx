import React from "react";
import Star from "@/images/home/star.svg";

const jobs = {
  acting: "actor",
  directing: "director",
  writing: "writer",
};

const PersonCard = ({ data }) => {
  return (
    <div className='flex flex-col overflow-hidden rounded-xl shadow-multi'>
      <div className='aspect-[2/3] w-full overflow-hidden'>
        <img src={data.poster} alt={data.title} />
      </div>

      <div className='flex-grow p-2 xs:p-4'>
        <p className='truncate text-sm capitalize text-nightRendezvous'>
          {jobs[data.known_for.toLowerCase()]}
        </p>

        <p className='mt-2 line-clamp-2 text-lg font-semibold text-midnightExpress'>
          {data.title}
        </p>
      </div>

      <span className='block h-px border-b border-dashed border-lostAtSee/[0.24]'></span>

      <div className='flex items-center justify-between p-4'>
        {/* <p className='text-sm text-lostAtSee'>{parseDate(data.date)}</p> */}

        <div
          className={`ml-auto flex items-center gap-0.5 xs:gap-1.5 xs:px-1.5 xs:py-0.5`}
        >
          <Star className='w-4 fill-[#FFAB00]' />
          <p className='font-barlow text-sm/none font-semibold text-midnightExpress'>
            {data.score.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
