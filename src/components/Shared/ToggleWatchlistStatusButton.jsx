import React from "react";
import { useMediaWatchlist } from "@/hooks/ListHooks";

const ToggleWatchlistStatusButton = ({ id, title, media }) => {
  const [state, userData, addToWatchlist, removeFromWatchlist] =
    useMediaWatchlist(id);

  const changeState = () => {
    if (state === "notAdded") {
      addToWatchlist({
        media: media,
        watchedDate: null,
        title: title,
      });
    } else {
      removeFromWatchlist(id);
    }
  };

  return (
    <div className='absolute inset-x-2 top-2 rounded-lg bg-eigengrau text-sm font-semibold text-white backdrop-blur-[6px]'>
      <button
        onClick={changeState}
        className='flex w-full items-center justify-center p-1.5 opacity-70 hover:bg-nightRendezvous1 hover:opacity-100'
      >
        {state === "notAdded" ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='w-5 fill-current'
          >
            <path d='M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='w-5 fill-current'
          >
            <path d='M20.61 5.207a1 1 0 0 1 .183 1.403l-10 13a1 1 0 0 1-1.5.097l-5-5a1 1 0 0 1 1.414-1.414l4.195 4.195L19.207 5.39a1 1 0 0 1 1.403-.183Z' />
          </svg>
        )}
        <p>Watchlist</p>
      </button>
    </div>
  );
};

export default ToggleWatchlistStatusButton;
