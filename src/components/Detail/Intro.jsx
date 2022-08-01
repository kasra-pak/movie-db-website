import React from "react";
import { convertToHour } from "../../utils/NumberUtils";

import Stars from "./Stars";
import ListTogglerButtons from "../ListTogglerButtons";
// import BookmarkImg from "../../images/mobile-menu/bookmark.svg";

export default function Intro({ media, data }) {
  const Runtime = convertToHour(data.runtime);

  const numberOfEpisodes = `${data.episodes_num} Episode${
    data.episodes_num > 1 ? "s" : ""
  }`;

  const firstAndLastRelease =
    media === "movie"
      ? data.release
      : `${data.first_air} - ${data.in_production ? "" : data.last_air}`;

  return (
    <>
      <div className='relative'>
        <img src={data.backdrop} alt={data.title} />
        <div className='absolute inset-0 bg-gradient-to-t from-secondary'></div>
      </div>

      <div className='relative p-4'>
        <div className='absolute bottom-0 left-[5%] w-3/12 shadow-lg'>
          <img src={data.poster} alt={data.title} className='rounded-md' />
          <div className='absolute w-1/5 top-0 right-[7%] cursor-pointer'></div>
        </div>

        <div className='w-8/12 ml-auto'>
          <Stars score={data.score.toFixed(1)} />

          <div className='my-2.5'>
            <h1 className='scroller text-sm-3xl font-semibold capitalize truncate hover:overflow-x-scroll'>
              {data.title}
            </h1>
            <p className='text-xs tracking-wider opacity-80 xs:text-sm'>
              {data.tagline}
            </p>
          </div>

          <div className='text-slate-300 h-16 grid grid-cols-[1fr,_auto] items-center gap-2'>
            <div className='flex gap-x-2 items-center'>
              <p className='text-sm'>{firstAndLastRelease}</p>
              {Runtime && (
                <>
                  <div>•</div>
                  <p className='text-sm w-max'>{Runtime}</p>
                </>
              )}
              {media === "tv" && (
                <>
                  <div>•</div>
                  <p className='text-sm w-max'>{numberOfEpisodes}</p>
                </>
              )}
            </div>
            <div className='row-start-2 flex flex-wrap gap-2 text-xs uppercase font-semibold tracking-wider opacity-80'>
              {data.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className='px-1 py-px border border-primary rounded-md'
                >
                  {genre}
                </span>
              ))}
            </div>

            <ListTogglerButtons
              mediaId={data.id}
              tooltipPosition='left'
              direction='col'
              className='flex flex-col h-full row-span-2 w-5 xs:w-6'
            />
          </div>
        </div>
      </div>
    </>
  );
}
