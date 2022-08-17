import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopRatedItems } from "../api/functions";
import useAsync from "../hooks/AsyncHooks";

import Scroller from "./Scroller";
import FadingLine from "./Shared/FadingLine";
import SlideButton from "./Shared/SlideButton";
import LoadingImg from "../images/loading/loading.svg";

export default function TopRatedItems() {
  const { isLoading, data, run } = useAsync();
  const [mediaType, setMediaType] = useState("movie");

  useEffect(() => {
    run(getTopRatedItems(mediaType).then(items => items.slice(0, 6)));
  }, [mediaType, run]);

  return (
    <section className='bg-secondary text-gray-100 mt-4 p-4 sm:p-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-sm-3xl text-slate-200 font-semibold tracking-wider'>
          Top Rated
        </h2>
        <Link
          to={`/all/top/${mediaType}`}
          className='text-xs font-semibold tracking-wider text-orange-600 border-primary px-2 py-1 rounded-l-full hover:text-slate-200 hover:bg-gradient-to-r hover:from-orange-600 hover:border hover:border-r-0 xs:text-base xs:px-3'
        >
          Show All
        </Link>
      </div>

      <FadingLine />

      <SlideButton
        id='top_rated_slider'
        leftText='movie'
        rightText='tv'
        toggle={setMediaType}
      />

      {isLoading ? (
        <div className='h-72 flex justify-center items-center'>
          <LoadingImg className='fill-primary w-12 mx-auto' />
        </div>
      ) : (
        <Scroller data={data} />
      )}
    </section>
  );
}
