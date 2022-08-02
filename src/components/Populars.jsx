import React, { useState, useEffect } from "react";
import Scroller from "./Scroller";
import { getPopularItems } from "../api/functions";
import FadingLine from "./FadingLine";
import SlideButton from "./SlideButton";
import LoadingImg from "../images/loading/loading.svg";

export default function Populars() {
  const [loading, setLoading] = useState(true);
  const [mediaType, setMediaType] = useState("movie");
  const [populars, setPopulars] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPopularItems(mediaType).then(items => {
      setPopulars(items);
      setLoading(false);
    });
  }, [mediaType]);

  function handleMediaChange(event) {
    setMediaType(event.target.value);
  }

  return (
    <section className='bg-secondary text-gray-100 mt-4 p-4 sm:p-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-sm-3xl text-slate-200 font-semibold tracking-wider'>
          Popular
        </h2>
        <a
          href='#'
          className='text-xs font-semibold tracking-wider text-orange-600 border-primary px-2 py-1 rounded-l-full hover:text-slate-200 hover:bg-gradient-to-r hover:from-orange-600 hover:border hover:border-r-0 xs:text-base xs:px-3'
        >
          Show All
        </a>
      </div>

      <FadingLine />

      <SlideButton leftText='movie' rightText='tv' toggle={setMediaType} />

      {loading ? (
        <div className='h-72 flex justify-center items-center'>
          <LoadingImg className='fill-primary w-12 mx-auto' />
        </div>
      ) : (
        <Scroller data={populars} />
      )}
    </section>
  );
}
