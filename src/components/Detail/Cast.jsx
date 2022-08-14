import React, { useState, useEffect, useRef } from "react";
import { getCast } from "../../api/functions";
import LoadingImg from "../../images/loading/loading.svg";
import Spinner from "../../images/loading/spinner.svg";

export default function Cast({ media, id }) {
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  const [passed, setPassed] = useState(false);
  const initialLimit = 6;
  const [limit, setLimit] = useState(initialLimit);
  const castElRef = useRef();

  useEffect(() => {
    getCast(media, id).then(data => {
      setCast(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (passed) {
      setTimeout(() => {
        setLimit(prevLimit =>
          prevLimit + 10 < cast.length ? prevLimit + 10 : cast.length
        );
      }, 1000);
    }
  }, [passed]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const castElBottom = castElRef.current.getBoundingClientRect().bottom;

    if (window.innerHeight > castElBottom) {
      if (!passed) {
        console.log("here");

        setPassed(true);
      }
    } else {
      setPassed(false);
    }
  }

  function collapseList() {
    setLimit(initialLimit);
    window.scrollTo(0, castElRef.current.getBoundingClientRect().bottom);
  }

  let castEl;
  if (!loading) {
    castEl = cast.map((item, idx) => (
      <div
        key={idx}
        className='bg-slate-700 flex items-center gap-3 rounded-lg overflow-hidden shadow-md'
      >
        <img src={item.profile} alt={item.name} className='w-20' />
        <p>
          <span className='text-slate-100 font-semibold tracking-wider'>
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

  return loading ? (
    <div className='aspect[9/5] flex justify-center items-center'>
      <LoadingImg className='w-12 fill-primary' />
    </div>
  ) : (
    <div
      ref={castElRef}
      className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4'
    >
      {castEl.slice(0, limit)}

      {cast.length > initialLimit && cast.length > limit && (
        <div className='col-span-full justify-self-center'>
          <Spinner className='w-12 fill-primary animate-spin' />
        </div>
      )}

      {limit === cast.length && limit > initialLimit && (
        <button
          onClick={collapseList}
          className='bg-orange-500 capitalize font-semibold tracking-wider min-w-max w-1/4 max-w-xs justify-self-center col-span-full px-4 py-1  rounded-lg shadow-md hover:bg-primary'
        >
          collapse all
        </button>
      )}
    </div>
  );
}
