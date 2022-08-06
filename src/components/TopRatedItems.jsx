import React, { useState, useEffect } from "react";
import Scroller from "./Scroller";
import { getTopRatedItems } from "../api/functions";
import FadingLine from "./FadingLine";
import SlideButton from "./SlideButton";
import LoadingImg from "../images/loading/loading.svg";

export default function TopRatedItems() {
  const [loading, setLoading] = useState(true);
  const [mediaType, setMediaType] = useState("movie");
  const [topRatedItems, setTopRatedItems] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTopRatedItems(mediaType).then(items => {
      setTopRatedItems(items);
      setLoading(false);
    });
  }, [mediaType]);

  return (
    <section className='bg-secondary text-gray-100 mt-4 p-4 sm:p-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-sm-3xl text-slate-200 font-semibold tracking-wider'>
          Top Rated
        </h2>
        <a
          href='#'
          className='text-xs font-semibold tracking-wider text-orange-600 border-primary px-2 py-1 rounded-l-full hover:text-slate-200 hover:bg-gradient-to-r hover:from-orange-600 hover:border hover:border-r-0 xs:text-base xs:px-3'
        >
          Show All
        </a>
      </div>

      <FadingLine />

      <SlideButton
        id='top_rated_slider'
        leftText='movie'
        rightText='tv'
        toggle={setMediaType}
      />

      {loading ? (
        <div className='h-72 flex justify-center items-center'>
          <LoadingImg className='fill-primary w-12 mx-auto' />
        </div>
      ) : (
        <Scroller data={topRatedItems} />
      )}
    </section>
  );
}
