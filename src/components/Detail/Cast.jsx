import React, { useState, useEffect, useRef, useCallback } from "react";
import { getCast } from "../../api/functions";
import useAsync from "../../hooks/AsyncHooks";
import LoadingImg from "../../images/loading/loading.svg";
import Spinner from "../../images/loading/spinner.svg";

export default function Cast({ media, id }) {
  const { isLoding, isSuccess, data, run } = useAsync();

  const [passed, setPassed] = useState(false);
  const initialLimit = 6;
  const [limit, setLimit] = useState(initialLimit);
  const castElRef = useRef();

  useEffect(() => {
    run(getCast(media, id));
  }, [id, media, run]);

  useEffect(() => {
    if (passed) {
      setTimeout(() => {
        setLimit(prevLimit =>
          prevLimit + 10 < data.length ? prevLimit + 10 : data.length
        );
      }, 1000);
    }
  }, [data, passed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleScroll = useCallback(() => {
    const castElBottom = castElRef.current.getBoundingClientRect().bottom;

    if (window.innerHeight > castElBottom) {
      if (!passed) {
        console.log("here");

        setPassed(true);
      }
    } else {
      setPassed(false);
    }
  }, [passed]);

  function collapseList() {
    setLimit(initialLimit);
    window.scrollTo(0, castElRef.current.getBoundingClientRect().bottom);
  }

  let castEl;
  if (isSuccess) {
    castEl = data.map((item, idx) => (
      <div
        key={idx}
        className='flex items-center gap-3 overflow-hidden rounded-lg bg-slate-700 shadow-md'
      >
        <img src={item.profile} alt={item.name} className='w-20' />
        <p>
          <span className='font-semibold tracking-wider text-slate-100'>
            {item.name}
          </span>
          <br />
          <span className='text-slate-300'>
            as
            <br />
            {item.character}
          </span>
        </p>
      </div>
    ));
  }

  if (isLoding) {
    return (
      <div className='aspect[9/5] flex items-center justify-center'>
        <LoadingImg className='w-12 fill-primary' />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div
        ref={castElRef}
        className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4'
      >
        {castEl.slice(0, limit)}

        {data.length > initialLimit && data.length > limit && (
          <div className='col-span-full justify-self-center'>
            <Spinner className='w-12 animate-spin fill-primary' />
          </div>
        )}

        {limit === data.length && limit > initialLimit && (
          <button
            onClick={collapseList}
            className='col-span-full w-1/4 min-w-max max-w-xs justify-self-center rounded-lg bg-orange-500 px-4 py-1 font-semibold capitalize  tracking-wider shadow-md hover:bg-primary'
          >
            collapse all
          </button>
        )}
      </div>
    );
  }
}
