import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAsync from "@/hooks/AsyncHooks";
import { getPopularItems } from "@/api/functions";

import Scroller from "@/components/Scroller";
import Tabs from "@/components/Shared/Tabs";
import LoadingImg from "@/images/loading/loading.svg";
import Arrow from "@/images/home/arrow.svg";

const allMediaTypes = ["movie", "tv"];

export default function Populars() {
  const { isLoading, data, run } = useAsync();
  const [mediaType, setMediaType] = useState(allMediaTypes[0]);
  const scrollerRef = useRef(null);

  useEffect(() => {
    run(getPopularItems(mediaType).then(items => items.slice(0, 6)));
  }, [mediaType, run]);

  const scroll = direction => {
    const scrollerElement = scrollerRef?.current;
    const currentScrollPosition = scrollerElement.scrollLeft;
    const scrollAmount = Math.round(scrollerElement.offsetWidth / 2);
    const directionSign = direction === "right" ? 1 : -1;

    const scrollOptions = {
      top: 0,
      left: currentScrollPosition + directionSign * scrollAmount,
      behavior: "smooth",
    };

    scrollerElement.scroll(scrollOptions);
  };

  return (
    <section className='mt-4 p-4 sm:p-6'>
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
            <Arrow className='w-5 fill-current' />
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
          <button
            className='rounded-full p-2 hover:bg-nightRendezvous1'
            onClick={() => {
              scroll("left");
            }}
          >
            <Arrow className='w-5 rotate-180 fill-current' />
          </button>

          <button
            className='rounded-full p-2 hover:bg-nightRendezvous1'
            onClick={() => {
              scroll("right");
            }}
          >
            <Arrow className='w-5 fill-current' />
          </button>
        </span>
      </div>

      {isLoading ? (
        <div className='flex h-72 items-center justify-center'>
          <LoadingImg className='mx-auto w-12 fill-primary' />
        </div>
      ) : (
        <Scroller ref={scrollerRef} data={data} />
      )}
    </section>
  );
}
