import React from "react";
import { convertToHour } from "@/utils/NumberUtils";

import Stars from "./Stars";
import ListTogglerButtons from "@/components/Shared/ListTogglerButtons";

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
          <div className='absolute right-[7%] top-0 w-1/5 cursor-pointer'></div>
        </div>

        <div className='ml-auto w-8/12'>
          <Stars score={data.score.toFixed(1)} />

          <div className='my-2.5'>
            <h1 className='scroller truncate text-sm-3xl font-semibold capitalize hover:overflow-x-scroll'>
              {data.title}
            </h1>
            <p className='text-xs tracking-wider opacity-80 xs:text-sm'>
              {data.tagline}
            </p>
          </div>

          <div className='grid h-16 grid-cols-[1fr,_auto] items-center gap-2 text-slate-300'>
            <div className='flex items-center gap-x-2'>
              <p className='text-sm'>{firstAndLastRelease}</p>
              {Runtime && (
                <>
                  <div>•</div>
                  <p className='w-max text-sm'>{Runtime}</p>
                </>
              )}
              {media === "tv" && (
                <>
                  <div>•</div>
                  <p className='w-max text-sm'>{numberOfEpisodes}</p>
                </>
              )}
            </div>
            <div className='row-start-2 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider opacity-80'>
              {data.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className='rounded-md border border-primary px-1 py-px'
                >
                  {genre}
                </span>
              ))}
            </div>

            <ListTogglerButtons
              mediaData={{ id: data.id, type: media, title: data.title }}
              tooltipPosition='left'
              direction='col'
              className='row-span-2 flex h-full w-5 flex-col xs:w-6'
            />
          </div>
        </div>
      </div>
    </>
  );
}
