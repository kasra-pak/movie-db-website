import React from 'react'
import { convertToHour } from "../../utils/NumberUtils"

import Stars from "../Stars";
import BookmarkImg from '../../images/mobile-menu/bookmark.svg'
import { data } from 'autoprefixer';

export default function Intro({ media, data }) {
  return (
    <>
      <div className="relative">
        <img src={data.backdrop} alt={data.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary"></div>
      </div>
      
      <div className="relative p-4">
        <div className="absolute bottom-0 left-[5%] w-3/12">
          <img src={data.poster} alt={data.title} className="rounded-md" />
          <div className="absolute w-1/5 top-0 right-[7%] cursor-pointer">
            <BookmarkImg className="fill-orange-300 stroke-primary stroke-[10px] hover:fill-primary" />
          </div>
        </div>

        <div className="w-8/12 ml-auto">

          <Stars score={(data.score).toFixed(1)} />

          <div className="my-2.5">
            <h1 className="text-sm-3xl font-semibold capitalize truncate">{data.title}</h1>
            <p className="text-xs tracking-wider opacity-80 xs:text-sm">{data.tagline}</p>
          </div>

          <div className="text-slate-300 flex flex-wrap gap-x-2.5 items-center">
            <p className="text-sm">
              {media === 'movie' ?
                data.release :
                `${data.first_air} - ${data.in_production ? '' : data.last_air}`
              }
            </p>
            <div>•</div>
            <p className="text-sm w-max">{convertToHour(data.runtime)}</p>
            {media === 'tv' &&
            <>
              <div>•</div>
              <p className="text-sm w-max">
                {`${data.episodes_num} Episode${data.episodes_num > 1 ? 's' : ''}`}
              </p>
            </>
            }
          </div>

        </div>
      </div>
    </>
  )
}