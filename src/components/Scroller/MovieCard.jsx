import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "@/utils/DateUtils";
import ToggleWatchlistStatusButton from "@/components/Shared/ToggleWatchlistStatusButton";
import Star from "@/images/home/star.svg";

export default function MovieCard({ data, className }) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl shadow-multi ${className}`}
    >
      <div className='relative aspect-[2/3] w-full overflow-hidden'>
        <img src={data.poster} alt={data.title} />
        <ToggleWatchlistStatusButton
          id={data.id}
          title={data.title}
          media={data.media}
        />
      </div>

      <div className='flex-grow p-2 xs:p-4'>
        <p className='truncate text-sm text-nightRendezvous'>
          {new Intl.ListFormat("en-GB", {
            style: "long",
            type: "conjunction",
          }).format(data.genres)}
        </p>
        <Link
          to={`/detail/${data.media}/${data.id}`}
          className='mt-2 line-clamp-2 text-lg font-semibold text-midnightExpress underline-offset-1 hover:underline'
        >
          {data.title}
        </Link>
      </div>

      <span className='block h-px border-b border-dashed border-lostAtSee/[0.24]'></span>

      <div className='flex items-center justify-between p-4'>
        {data.date && (
          <p className='text-sm text-lostAtSee'>{parseDate(data.date)}</p>
        )}

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
}
