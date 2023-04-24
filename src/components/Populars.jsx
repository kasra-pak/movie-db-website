import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAsync from "../hooks/AsyncHooks";
import { getPopularItems } from "../api/functions";

import Scroller from "./Scroller";
import FadingLine from "./Shared/FadingLine";
import SlideButton from "./Shared/SlideButton";
import LoadingImg from "../images/loading/loading.svg";

export default function Populars() {
  const { isLoading, data, run } = useAsync();
  const [mediaType, setMediaType] = useState("movie");

  useEffect(() => {
    run(getPopularItems(mediaType).then(items => items.slice(0, 6)));
  }, [mediaType, run]);

  return (
    <section className='mt-4 bg-secondary p-4 text-gray-100 sm:p-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-sm-3xl font-semibold tracking-wider text-slate-200'>
          Popular
        </h2>
        <Link
          to={`/all/popular/${mediaType}`}
          className='rounded-l-full border-primary px-2 py-1 text-xs font-semibold tracking-wider text-orange-600 hover:border hover:border-r-0 hover:bg-gradient-to-r hover:from-orange-600 hover:text-slate-200 xs:px-3 xs:text-base'
        >
          Show All
        </Link>
      </div>

      <FadingLine />

      <SlideButton
        id='popular_slider'
        leftText='movie'
        rightText='tv'
        toggle={setMediaType}
      />

      {isLoading ? (
        <div className='flex h-72 items-center justify-center'>
          <LoadingImg className='mx-auto w-12 fill-primary' />
        </div>
      ) : (
        <Scroller data={data} />
      )}
    </section>
  );
}
