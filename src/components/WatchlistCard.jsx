import React from "react";
import { Link } from "react-router-dom";
import { useMediaWatchlist } from "@/hooks/ListHooks";
import TrashBin from "@/images/home/trash-bin.svg";

const WatchlistCard = ({ data }) => {
  const [, , addToWatchlist, removeFromWatchlist] = useMediaWatchlist(data.id);

  const toggleWatched = () => {
    data.watchedDate
      ? addToWatchlist({
          media: data.media,
          watchedDate: null,
          title: data.title,
        })
      : addToWatchlist({
          media: data.media,
          watchedDate: Date.now(),
          title: data.title,
        });
  };

  return (
    <div className='flex max-w-xl gap-5 rounded-lg border border-lostAtSee/[0.24] p-5'>
      <div className='shrink-0 overflow-hidden rounded-lg'>
        <img src={data.poster} alt={data.title} className='w-20' />
      </div>

      <div className='flex w-full flex-col'>
        <div className='flex grow items-start'>
          <div className='grow space-y-1'>
            <Link
              to={`/detail/${data.media}/${data.id}`}
              className='font-semibold text-midnightExpress underline-offset-1 hover:underline sm:text-lg'
            >
              {data.title}
            </Link>

            <p className='text-sm capitalize text-nightRendezvous'>
              {data.media}
            </p>
          </div>

          <button
            className='rounded-full p-2 hover:bg-nightRendezvous1'
            onClick={removeFromWatchlist}
          >
            <TrashBin className='w-5' />
          </button>
        </div>

        <button
          onClick={toggleWatched}
          className='w-max self-end rounded-lg bg-midnightExpress px-2 py-1 text-[13px] font-bold text-white'
        >
          {data.watchedDate ? "Mark as Unwatched" : "Mark as Watched"}
        </button>
      </div>
    </div>
  );
};

export default WatchlistCard;
