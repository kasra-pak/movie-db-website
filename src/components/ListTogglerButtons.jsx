import React from "react";
import Tooltip from "./Tooltip";

import Minus from "../images/list-togglers/minus.svg";
import Plus from "../images/list-togglers/plus.svg";
import Check from "../images/list-togglers/check.svg";
import Clapper from "../images/list-togglers/clapper.svg";
import { useMediaWatchlist } from "../hooks/ListHooks";

function ListTogglerButtons({
  mediaId,
  className,
  direction,
  tooltipPosition = "bottom",
}) {
  const [state, userData, addToWatchlist, removeFromWatchlist] =
    useMediaWatchlist(mediaId);

  const toolTips = {
    notAdded: "Add to watchlist",
    added: "Mark as watched",
    watched: "Mark as unwatched",
    dismiss: "Remove from list",
  };

  const dismiss = () => removeFromWatchlist(mediaId);

  const changeState = () => {
    if (state === "notAdded") {
      addToWatchlist({ id: mediaId, watchedDate: null });
    } else if (state === "added") {
      addToWatchlist({ id: mediaId, watchedDate: Date.now() });
    } else if (state === "watched") {
      addToWatchlist({ id: mediaId, watchedDate: null });
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
