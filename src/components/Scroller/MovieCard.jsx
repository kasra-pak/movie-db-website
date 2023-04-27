import React from "react";
import { Link } from "react-router-dom";
import ListTogglerButtons from "../Shared/ListTogglerButtons";
import Star from "../../images/home/star.svg";
import { parseDate } from "../../utils/DateUtils";

export default function MovieCard({ data }) {
  let scoreColor;
  if (data.score >= 8) scoreColor = "text-green-500 border-green-500";
  else if (data.score >= 6) scoreColor = "text-lime-500 border-lime-500";
  else if (data.score >= 4) scoreColor = "text-yellow-500 border-yellow-500";
  else scoreColor = "text-red-500 border-red-500";

  return (
    <div className='flex w-5/12 shrink-0 flex-col overflow-hidden rounded-lg shadow-multi'>
      <div className='aspect-[2/3] w-full'>
        <img src={data.poster} alt={data.title} />
      </div>
      <div className='flex-grow p-2'>
        <div className='flex flex-wrap gap-1 text-nightRendezvous'>
          <p>Drama</p>
          <p>Comedy</p>
        </div>
        <p className='line-clamp-2 text-lg font-semibold text-midnightExpress'>
          {data.title}
        </p>
      </div>

      <span className='m block h-px border-b border-dashed border-lostAtSee/[0.24]'></span>

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

// <div className='show-toggle-btns relative shadow-lg transition-transform hover:scale-[101%] hover:shadow-xl'>
// <Link
//   to={`/detail/${data.media}/${data.id}`}
//   className='block w-36 rounded-md bg-slate-700 text-slate-200  xs:w-52 sm:w-64'
// >
//   <div className='relative'>
//     <img
//       className='w-full rounded-md'
//       src={data.poster}
//       alt={data.title}
//     />
//     <div className='absolute inset-0 top-3/4 bg-gradient-to-t	from-slate-700'></div>
//     <div
//       className={`absolute bottom-0 left-2 flex items-center gap-0.5 border ${scoreColor} rounded-md px-1 xs:gap-1.5 xs:px-1.5 xs:py-0.5`}
//     >
//       <Star className='w-2.5 fill-yellow-500 xs:w-3.5' />
//       <span className='text-xs font-semibold xs:text-base'>
//         {data.score.toFixed(1)}
//       </span>
//     </div>
//   </div>
//   <div className='p-2 pb-4 xs:mt-2 xs:pb-6 sm:pb-8'>
//     <h3 className='truncate text-xs-2xl font-bold capitalize tracking-wider xs:font-semibold xs:tracking-wide'>
//       {data.title}
//     </h3>
//   </div>
// </Link>
// <ListTogglerButtons
//   mediaData={{ id: data.id, type: data.media, title: data.title }}
//   tooltipPosition='top'
//   direction='row'
//   className='list-toggler-btns absolute -bottom-3 flex h-5 w-full items-center transition-opacity xs:h-7 sm:-bottom-4 sm:h-8'
// />
// </div>
