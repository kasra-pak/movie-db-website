import React from "react";
import { convertToHour, convertToKilo } from "@/utils/NumberUtils";

import { useMediaWatchlist } from "@/hooks/ListHooks";

export default function Intro({ data }) {
  const [state, userData, addToWatchlist, removeFromWatchlist] =
    useMediaWatchlist(data.id);
  const Runtime = convertToHour(data.runtime);

  const numberOfEpisodes = `${data.episodes_num} Episode${
    data.episodes_num > 1 ? "s" : ""
  }`;

  const firstAndLastRelease =
    data.media === "movie"
      ? data.release
      : `${data.first_air} - ${data.in_production ? "" : data.last_air}`;

  const changeState = () => {
    if (state === "notAdded" || state === "watched") {
      addToWatchlist({
        media: data.media,
        watchedDate: null,
        title: data.title,
      });
    } else if (state === "added") {
      addToWatchlist({
        media: data.media,
        watchedDate: Date.now(),
        title: data.title,
      });
    }
  };

  return (
    <>
      <div className='relative'>
        <img src={data.backdrop} alt={data.title} />
        <div className='absolute inset-0 bg-black/10 bg-gradient-to-b from-white/0 to-black/50'></div>
        <img
          src={data.poster}
          alt={data.title}
          className='absolute bottom-2 left-2 aspect-[2/3] h-4/6 rounded-md border border-white'
        />
      </div>

      <div className='p-4 text-midnightExpress'>
        <div className='my-8'>
          <h1 className='font-barlow text-2xl font-bold capitalize'>
            {data.title}
          </h1>
          <p className='mt-2 text-xs tracking-wider opacity-80 xs:text-sm'>
            {data.tagline}
          </p>
        </div>

        <div className='space-y-6 text-sm'>
          <div
            className={`flex items-baseline gap-1 xs:gap-1.5 xs:px-1.5 xs:py-0.5`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              viewBox='0 0 32 32'
              className='w-5 self-start fill-[#FFAB00]'
            >
              <path d='m16 2-4.55 9.22-10.17 1.47 7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13 7.36-7.17-10.17-1.48Z' />
            </svg>
            {data.scoreCount === 0 ? (
              <p className='font-barlow text-midnightExpress'>
                Be the first one to vote
              </p>
            ) : (
              <>
                <p className='font-barlow text-nightRendezvous'>
                  <span className='text-[17px] font-semibold text-midnightExpress'>
                    {data.scoreAverage.toFixed(1)}
                  </span>
                  {"/10"}
                </p>

                <p className='text-nightRendezvous'>
                  {data.scoreCount &&
                    `(${convertToKilo(data.scoreCount)} votes)`}
                </p>
              </>
            )}
          </div>

          <div className='flex items-center gap-1 text-midnightExpress'>
            <svg
              viewBox='10 10 57 57'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              className='w-5 fill-current'
            >
              <path d='M50.448 17.781a3.167 3.167 0 0 1 3.798 2.373l1.78 7.714L19 36.417l-1.781-7.714a3.167 3.167 0 0 1 2.373-3.798l30.856-7.124ZM53.834 57H22.166A3.167 3.167 0 0 1 19 53.833V36.417h38v17.416A3.167 3.167 0 0 1 53.834 57Z' />
            </svg>

            <p>{firstAndLastRelease}</p>
          </div>

          <div className='flex items-center gap-1 text-midnightExpress'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              viewBox='0 0 32 32'
              className='w-5 fill-current'
            >
              <path d='M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z' />
              <path d='M20.59 22 15 16.41V7h2v8.58l5 5.01L20.59 22z' />
            </svg>

            {data.media === "tv" && <p className='w-max'>{numberOfEpisodes}</p>}

            {Runtime && <p className='w-max'>{Runtime}</p>}
          </div>

          <div className='flex flex-wrap gap-2 text-xs font-bold capitalize opacity-80'>
            {data.genres.map((genre, idx) => (
              <span
                key={idx}
                className='inline-flex h-6 cursor-default items-center rounded-md bg-lostAtSee/[0.16] px-2 text-midnightExpress'
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className='mt-8 flex max-w-md flex-col gap-3 text-sm font-semibold text-white min-[400px]:flex-row'>
          <button
            className='grow basis-5/12 rounded-lg bg-midnightExpress px-5 py-2'
            onClick={changeState}
          >
            {state === "notAdded" && "Add to Watchlist"}
            {state === "added" && "Mark as Watched"}
            {state === "watched" && "Mark as Unwatched"}
          </button>

          <button
            className='grow basis-5/12 rounded-lg bg-rose-600 px-5 py-2'
            onClick={() => removeFromWatchlist(data.id)}
          >
            Remove from Watchlist
          </button>
        </div>
      </div>
    </>
  );
}
