import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "@/utils/DateUtils";

export default function MovieCard({ data }) {
  return (
    <div className='flex w-5/12 shrink-0 flex-col overflow-hidden rounded-lg shadow-multi'>
      <div className='aspect-[2/3] w-full'>
        <img src={data.poster} alt={data.title} />
      </div>
      <div className='flex-grow p-2'>
        <p className='line-clamp-1 text-sm text-nightRendezvous'>
          {new Intl.ListFormat("en-GB", {
            style: "long",
            type: "conjunction",
          }).format(data.genres)}
        </p>
        <Link
          to={`/detail/${data.media}/${data.id}`}
          className='line-clamp-2 text-lg font-semibold text-midnightExpress underline-offset-1 hover:underline'
        >
          {data.title}
        </Link>
      </div>

      <span className='block h-px border-b border-dashed border-lostAtSee/[0.24]'></span>

      <div className='flex items-center justify-between p-2'>
        <p className='text-sm text-lostAtSee'>{parseDate(data.date)}</p>

        <div
          className={`flex items-center gap-0.5 xs:gap-1.5 xs:px-1.5 xs:py-0.5`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            viewBox='0 0 32 32'
            className='w-4 fill-[#FFAB00]'
          >
            <path d='m16 2-4.55 9.22-10.17 1.47 7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13 7.36-7.17-10.17-1.48Z' />
          </svg>
          <p className='font-barlow text-sm/none font-semibold text-midnightExpress'>
            {data.score.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
}
