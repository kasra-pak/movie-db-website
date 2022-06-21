import React, { useState, useEffect } from "react"
import Scroller from "./Scroller";
import { getTopRatedItems } from "../api/functions";
import LoadingImg from '../images/loading/loading.svg'

export default function TopRatedItems() {
  const [loading, setLoading] = useState(true)
  const [mediaType, setMediaType] = useState('movie')
  const [topRatedItems, setTopRatedItems] = useState(null)

  useEffect(() => {
    setLoading(true)
    getTopRatedItems(mediaType).then(items => {
      setTopRatedItems(items)
      setLoading(false)
    })
  }, [mediaType])

  function handleMediaChange(event) {
    setMediaType(event.target.value)
  }

  return (
    <section className="bg-secondary text-gray-100 mt-4 p-4">

      <div className="flex justify-between items-center">
        <h2 className="text-sm-3xl text-slate-200 font-semibold tracking-wider">Top Rated</h2>
        <a href="#" className="text-xs font-semibold tracking-wider text-orange-600 px-2 py-1 rounded-l-full hover:text-slate-200 hover:bg-gradient-to-r hover:from-orange-600 xs:text-base xs:px-3">
          Show All
        </a>
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-transparent h-1 w-full my-2 rounded-l-sm xs:mb-4"></div>

      <div
        onChange={handleMediaChange}
        className={`from-orange-600 ${mediaType === 'movie' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} text-xs flex justify-around rounded-full max-w-fit gap-5 transition-colors xs:text-base ${mediaType === 'movie' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}`}
      >
        <input id="top_movie" type="radio" value="movie" name="media-type" className="hidden"/>
        <label htmlFor="top_movie" className={`${mediaType === 'movie' ? 'text-slate-200 font-semibold' : 'text-orange-600'} px-2 py-1 shrink-0 tracking-wider uppercase cursor-pointer xs:px-2.5`}>Movie</label>
        <input id="top_tv" type="radio" value="tv" name="media-type" className="hidden"/>
        <label htmlFor="top_tv" className={`${mediaType === 'tv' ? 'text-slate-200 font-semibold' : 'text-orange-600'} w-full grow px-2 py-1 tracking-wider uppercase cursor-pointer xs:px-2.5`}>Tv</label>
      </div>
      
      {loading ?
        <div className="h-72 flex justify-center items-center">
          <LoadingImg className="fill-primary w-12 mx-auto" />
        </div> :
        <Scroller data={topRatedItems} /> 
      }
    </section>
  )
}