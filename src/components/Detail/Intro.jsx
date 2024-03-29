import React from "react";
import { convertToHour, convertToKilo } from "@/utils/NumberUtils";
import { useMediaWatchlist } from "@/hooks/ListHooks";
import Star from "@/images/home/star.svg";
import Clock from "@/images/home/clock.svg";
import CamRecorder from "@/images/home/cam-recorder.svg";

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
        <img
          src={data.backdrop}
          alt={data.title}
          className='max-h-screen w-full object-cover'
        />

        <div className='absolute inset-0 bg-black/10 bg-gradient-to-b from-white/0 to-black to-90%'></div>

        <div className='absolute inset-x-0 bottom-0 mx-auto flex h-2/3 max-h-96 max-w-6xl items-end gap-8 p-4 sm:p-6 lg:pb-10'>
          <div className='aspect-[2/3] h-full overflow-hidden rounded-lg border border-white shadow-multi'>
            <img src={data.poster} alt={data.title} className='h-full' />
          </div>

          <div className='hidden grow text-white lg:block'>
            <h1 className='font-barlow text-2xl font-bold capitalize min-[600px]:text-[1.625rem] min-[900px]:text-3xl xl:text-[2rem]'>
              {data.title}
            </h1>
            {data.tagline && (
              <p className='mt-3 text-xs tracking-wider opacity-80 xs:text-sm'>
                {data.tagline}
              </p>
            )}

            <div className='mt-6 flex items-end text-sm text-white'>
              <div className='grow space-y-7'>
                <div className='flex gap-x-10'>
                  <div className='flex items-baseline gap-2'>
                    <Star className='w-5 self-start fill-[#FFAB00]' />
                    {data.scoreCount === 0 ? (
                      <p className='font-barlow'>Be the first one to vote</p>
                    ) : (
                      <>
                        <p className='font-barlow text-white/60'>
                          <span className='text-[17px] font-semibold text-white'>
                            {data.scoreAverage.toFixed(1)}
                          </span>
                          {"/10"}
                        </p>

                        <p className='text-white/60'>
                          {data.scoreCount &&
                            `(${convertToKilo(data.scoreCount)} votes)`}
                        </p>
                      </>
                    )}
                  </div>

                  <div className='flex items-center gap-2'>
                    <CamRecorder className='w-4 fill-current' />

                    <p>{firstAndLastRelease}</p>
                  </div>

                  <div className='flex items-center gap-2 text-white'>
                    <Clock className='w-4 fill-current' />

                    {data.media === "tv" && (
                      <p className='w-max'>{numberOfEpisodes}</p>
                    )}

                    {Runtime && <p className='w-max'>{Runtime}</p>}
                  </div>
                </div>

                <div className='flex flex-wrap gap-2 text-xs font-bold capitalize opacity-80'>
                  {data.genres.map((genre, idx) => (
                    <span
                      key={idx}
                      className='inline-flex h-6 cursor-default items-center rounded-md bg-white/[0.16] px-2 text-white'
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div className='inline-flex flex-col gap-y-4 text-sm font-semibold text-white'>
                <button
                  className='rounded-lg bg-midnightExpress px-5 py-2 hover:bg-nightfall'
                  onClick={changeState}
                >
                  {state === "notAdded" && "Add to Watchlist"}
                  {state === "added" && "Mark as Watched"}
                  {state === "watched" && "Mark as Unwatched"}
                </button>

                <button
                  className='rounded-lg bg-rose-600 px-5 py-2 hover:bg-rose-500'
                  onClick={() => removeFromWatchlist(data.id)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto my-6 max-w-6xl p-4 text-midnightExpress sm:p-6 lg:hidden'>
        <div className='mb-6 sm:mb-8'>
          <h1 className='font-barlow text-2xl font-bold capitalize min-[600px]:text-[1.625rem] min-[900px]:text-3xl xl:text-[2rem]'>
            {data.title}
          </h1>
          {data.tagline && (
            <p className='mt-2 text-xs tracking-wider opacity-80 xs:text-sm'>
              {data.tagline}
            </p>
          )}
        </div>

        <div className='space-y-6 text-sm text-midnightExpress sm:space-y-7'>
          <div className='flex flex-col gap-x-10 gap-y-6 sm:flex-row'>
            <div className={`flex items-baseline gap-2`}>
              <Star className='w-5 self-start fill-[#FFAB00]' />
              {data.scoreCount === 0 ? (
                <p className='font-barlow'>Be the first one to vote</p>
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

            <div className='flex items-center gap-2'>
              <CamRecorder className='w-4 fill-current' />

              <p>{firstAndLastRelease}</p>
            </div>

            <div className='flex items-center gap-2 text-midnightExpress'>
              <Clock className='w-4 fill-current' />

              {data.media === "tv" && (
                <p className='w-max'>{numberOfEpisodes}</p>
              )}

              {Runtime && <p className='w-max'>{Runtime}</p>}
            </div>
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
            className='grow basis-5/12 rounded-lg bg-midnightExpress px-5 py-2 hover:bg-nightfall'
            onClick={changeState}
          >
            {state === "notAdded" && "Add to Watchlist"}
            {state === "added" && "Mark as Watched"}
            {state === "watched" && "Mark as Unwatched"}
          </button>

          <button
            className='grow basis-5/12 rounded-lg bg-rose-600 px-5 py-2 hover:bg-rose-500'
            onClick={() => removeFromWatchlist(data.id)}
          >
            Remove from Watchlist
          </button>
        </div>
      </div>
    </>
  );
}
