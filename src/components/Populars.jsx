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
        <h2 className='font-barlow text-2xl font-bold text-midnightExpress'>
          Popular
        </h2>
        <Link
          to={`/all/popular/${mediaType}`}
          className='inline-flex gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-midnightExpress hover:bg-lostAtSee1'
        >
          View All
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              viewBox='0 0 32 32'
              className='w-5 fill-current'
            >
              <path d='M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z' />
            </svg>
          </span>
        </Link>
      </div>

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
