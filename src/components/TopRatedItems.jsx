import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopRatedItems } from "@/api/functions";
import useAsync from "@/hooks/AsyncHooks";

import Scroller from "@/components/Scroller";
import Tabs from "@/components/Shared/Tabs";
import LoadingImg from "@/images/loading/loading.svg";

const allMediaTypes = ["movie", "tv"];

export default function TopRatedItems() {
  const { isLoading, data, run } = useAsync();
  const [mediaType, setMediaType] = useState("movie");

  useEffect(() => {
    run(getTopRatedItems(mediaType).then(items => items.slice(0, 6)));
  }, [mediaType, run]);

  return (
    <section className='mt-4 p-4 sm:p-6'>
      <div className='flex items-center justify-between'>
        <h2 className='tfont-barlow text-midnightExpres text-2xl font-bold'>
          Top Rated
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

      <div className='mb-4 mt-8 flex items-end justify-between'>
        <Tabs
          names={allMediaTypes}
          active={mediaType}
          setActive={setMediaType}
        />

        <span className='space-x-2'>
          <button className='rounded-full p-2 hover:bg-nightRendezvous1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              viewBox='0 0 32 32'
              className='w-5 rotate-180 fill-current'
            >
              <path d='M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z' />
            </svg>
          </button>

          <button className='rounded-full p-2 hover:bg-nightRendezvous1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              viewBox='0 0 32 32'
              className='w-5 fill-current'
            >
              <path d='M22 16 12 26l-1.4-1.4 8.6-8.6-8.6-8.6L12 6z' />
            </svg>
          </button>
        </span>
      </div>

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
