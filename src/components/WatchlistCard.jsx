import React from "react";
import { useMediaWatchlist } from "@/hooks/ListHooks";

const WatchlistCard = ({ data }) => {
  const [, , addToWatchlist] = useMediaWatchlist(data.id);

  const markAsWatched = () => {
    addToWatchlist({
      media: data.media,
      watchedDate: Date.now(),
      title: data.title,
    });
  };

  return (
    <div className='flex gap-5 rounded-lg border border-lostAtSee/[0.24] p-5'>
      <div className='shrink-0 overflow-hidden rounded-lg'>
        <img src={data.poster} alt={data.title} className='w-20' />
      </div>

      <div className='flex w-full flex-col'>
        <p className='h-full'>
          <span className='font-semibold text-midnightExpress'>
            {data.title}
          </span>
          <br />
          <span className='text-sm capitalize text-nightRendezvous'>
            {data.media}
          </span>
        </p>

        <button
          onClick={markAsWatched}
          className='w-max self-end rounded-lg bg-midnightExpress px-2 py-1 text-[13px] font-bold text-white '
        >
          Mark as Watched
        </button>
      </div>
    </div>
  );
};

export default WatchlistCard;
