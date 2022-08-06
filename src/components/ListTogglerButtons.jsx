import React from "react";
import Tooltip from "./Tooltip";

import Minus from "../images/list-togglers/minus.svg";
import Plus from "../images/list-togglers/plus.svg";
import Check from "../images/list-togglers/check.svg";
import Clapper from "../images/list-togglers/clapper.svg";
import { useMediaWatchlist } from "../hooks/ListHooks";

function ListTogglerButtons({
  mediaData,
  className,
  direction,
  tooltipPosition = "bottom",
}) {
  const [state, userData, addToWatchlist, removeFromWatchlist] =
    useMediaWatchlist(mediaData.id);

  const toolTips = {
    notAdded: "Add to watchlist",
    added: "Mark as watched",
    watched: "Mark as unwatched",
    dismiss: "Remove from list",
  };

  const dismiss = () => removeFromWatchlist(mediaData.id);

  const changeState = () => {
    if (state === "notAdded" || state === "watched") {
      addToWatchlist({
        media: mediaData.type,
        watchedDate: null,
        title: mediaData.title,
      });
    } else if (state === "added") {
      addToWatchlist({
        media: mediaData.type,
        watchedDate: Date.now(),
        title: mediaData.title,
      });
    }
  };

  return Object.keys(userData).length ? (
    <div
      className={`${className} ${
        state === "notAdded" ? "justify-center" : "justify-around"
      }`}
    >
      <Tooltip
        position={tooltipPosition}
        label={toolTips[state]}
        className={`${direction === "row" ? "h-full" : "w-full"}`}
      >
        <button
          aria-label={toolTips[state]}
          onClick={changeState}
          className={`block bg-slate-300 aspect-square ${
            direction === "row" ? "h-full" : "w-full"
          } p-1 rounded-full shadow-lg xs:p-1.5`}
        >
          {state === "notAdded" && <Plus className='fill-green-700' />}
          {state === "added" && <Check className='fill-emerald-900' />}
          {state === "watched" && <Clapper className='fill-zinc-900' />}
          <span className='sr-only'>{toolTips[state]}</span>
        </button>
      </Tooltip>

      <Tooltip
        position={tooltipPosition}
        label={toolTips.dismiss}
        className={`${direction === "row" ? "h-full" : "w-full"}`}
      >
        <button
          onClick={dismiss}
          aria-label={toolTips.dismiss}
          aria-hidden={state === "notAdded"}
          className={`bg-slate-300 aspect-square ${
            direction === "row" ? "h-full" : "w-full"
          } p-1 rounded-full shadow-lg xs:p-1.5 ${
            state === "notAdded" ? "hidden" : "block"
          }`}
        >
          <Minus className='fill-rose-600' />
          <span className='sr-only'>{toolTips.dismiss}</span>
        </button>
      </Tooltip>
    </div>
  ) : null;
}

export default ListTogglerButtons;
