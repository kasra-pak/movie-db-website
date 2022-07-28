import React, { useState } from "react";
import Tooltip from "./Tooltip";

import Minus from "../images/list-togglers/minus.svg";
import Plus from "../images/list-togglers/plus.svg";
import Check from "../images/list-togglers/check.svg";
import Clapper from "../images/list-togglers/clapper.svg";

function ListTogglerButtons({ className }) {
  const [state, setState] = useState("notAdded");

  const toolTips = {
    notAdded: "Add to watchlist",
    added: "Mark as watched",
    watched: "Mark as unwatched",
    dismiss: "Remove from list",
  };

  const dismiss = () => setState("notAdded");

  const changeState = () =>
    setState(prevState => {
      if (prevState === "notAdded") return "added";
      else if (prevState === "added") return "watched";
      else if (prevState === "watched") return "added";
    });

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <Tooltip label={toolTips[state]}>
        <button
          aria-label={toolTips[state]}
          onClick={changeState}
          className={`bg-slate-300 p-1 rounded-full aspect-square w-full shadow-lg xs:p-1.5`}
        >
          {state === "notAdded" && <Plus className='fill-green-700' />}
          {state === "added" && <Check className='fill-emerald-900' />}
          {state === "watched" && <Clapper className='fill-zinc-900' />}
          <span className='sr-only'>{toolTips[state]}</span>
        </button>
      </Tooltip>

      <Tooltip label={toolTips.dismiss} hidden={state === "notAdded"}>
        <button
          onClick={dismiss}
          aria-label={toolTips.dismiss}
          aria-hidden={state === "notAdded"}
          className={`bg-slate-300 p-1 rounded-full aspect-square w-full shadow-lg xs:p-1.5 ${
            state === "notAdded" ? "invisible" : "visible"
          }`}
        >
          <Minus className='fill-rose-600' />
          <span className='sr-only'>{toolTips.dismiss}</span>
        </button>
      </Tooltip>
    </div>
  );
}

export default ListTogglerButtons;
