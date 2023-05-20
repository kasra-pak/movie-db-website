import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "@/firebase";
import { useMediaWatchlist } from "@/hooks/ListHooks";
import Plus from "@/images/home/plus.svg";
import Check from "@/images/home/check.svg";

const ToggleWatchlistStatusButton = ({ id, title, media }) => {
  const [user] = useAuthState(auth);
  const [state, userData, addToWatchlist, removeFromWatchlist] =
    useMediaWatchlist(id);
  const navigate = useNavigate();

  const changeState = () => {
    if (!user) return navigate("/login");

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
    <div className='absolute inset-x-2 top-2 rounded-lg bg-eigengrau text-sm font-semibold text-white backdrop-blur-[6px] md:inset-x-3 md:top-3'>
      <button
        onClick={changeState}
        className='flex w-full items-center justify-center p-1.5 opacity-70 hover:bg-nightRendezvous1 hover:opacity-100 md:p-2'
      >
        {state === "notAdded" ? (
          <Plus className='w-5 fill-current' />
        ) : (
          <Check className='w-5 fill-current' />
        )}
        <p>Watchlist</p>
      </button>
    </div>
  );
};

export default ToggleWatchlistStatusButton;
