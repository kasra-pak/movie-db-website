import React, { useState, useEffect, useRef, useCallback } from "react";
import { getCast } from "@/api/functions";
import useAsync from "@/hooks/AsyncHooks";
import LoadingImg from "@/images/loading/loading.svg";
import Spinner from "@/images/loading/spinner.svg";

const initialLengthLimit = 6;

export default function Cast({ media, id }) {
  const { isLoding, isSuccess, data, run } = useAsync();
  const [passed, setPassed] = useState(false);
  const [limit, setLimit] = useState(initialLengthLimit);
  const castElRef = useRef();

  const collapseList = () => {
    setLimit(initialLengthLimit);
    window.scrollTo(0, castElRef.current.getBoundingClientRect().bottom);
  };

  const handleScroll = useCallback(() => {
    const castElBottom = castElRef.current.getBoundingClientRect().bottom;
    setPassed(!passed && window.innerHeight > castElBottom);
  }, [passed]);

  useEffect(() => {
    run(getCast(media, id));
  }, [id, media, run]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (passed) {
      setTimeout(() => {
        setLimit(prevLimit =>
          prevLimit + 10 < data.length ? prevLimit + 10 : data.length
        );
      }, 1000);
    }
  }, [data, passed]);

  if (isLoding) {
    return (
      <div className='aspect[9/5] flex items-center justify-center'>
        <LoadingImg className='w-6 fill-midnightExpress' />
      </div>
    );
  }

  if (isSuccess) {
    const castEl = data.map((item, idx) => (
      <div
        key={idx}
        className='flex items-start gap-5 rounded-lg border border-lostAtSee/[0.24] p-5'
      >
        <div className='overflow-hidden rounded-lg'>
          <img src={item.profile} alt={item.name} className='w-20' />
        </div>

        <p>
          <span className='font-semibold text-midnightExpress'>
            {item.name}
          </span>
          <br />
          <span className='text-sm text-nightRendezvous'>{item.character}</span>
        </p>
      </div>
    ));

    return (
      <div
        ref={castElRef}
        className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4'
      >
        {castEl.slice(0, limit)}

        {data.length > initialLengthLimit && data.length > limit && (
          <div className='col-span-full justify-self-center'>
            <Spinner className='w-6 animate-spin fill-midnightExpress' />
          </div>
        )}

        {limit === data.length && limit > initialLengthLimit && (
          <button
            onClick={collapseList}
            className='col-span-full w-1/4 min-w-max max-w-xs justify-self-center rounded-lg bg-midnightExpress px-2 py-1 text-sm font-semibold tracking-wider text-white shadow-md hover:bg-nightfall'
          >
            Collapse all
          </button>
        )}
      </div>
    );
  }
}
