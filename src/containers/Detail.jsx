import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { convertToHour } from "../utils/NumberUtils";
import { getDetail } from "../api/functions"

import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import BookmarkImg from '../images/mobile-menu/bookmark.svg'
import LoadingImg from '../images/loading/loading.svg'

export default function Detail() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const {media, id} = useParams()

  useEffect(() => {
    getDetail(media, id).then(data => {
      setData(data)
      setLoading(false)
    })
    
  }, [])

  console.log(data)

  return (
    <>
      <Navbar />
      {loading ?
        <main className="min-h-[90vh] flex justify-center items-center">
          <LoadingImg className="w-12 fill-primary" />
        </main> :
        
        <main className="bg-secondary text-gray-100">
          <div className="relative">
            <img src={data.backdrop} alt={data.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary"></div>
          </div>
          
          <div className="relative p-4">
            <div className="absolute bottom-0 left-[5%] w-3/12">
              <img src={data.poster} alt={data.title} className="rounded-md" />
              <div className="absolute w-1/6 top-0 right-[7%] cursor-pointer hover:fill-primary">
                <BookmarkImg  />
              </div>
            </div>

            <div className="w-8/12 ml-auto">

              <Stars score={data.score} />

              <div className="my-2.5">
                <h1 className="text-sm-3xl font-semibold capitalize truncate">{data.title}</h1>
                <p className="text-xs opacity-80 xs:text-sm">{data.tagline}</p>
              </div>

              <div className="flex gap-1.5 items-center">
                <p className="text-sm text-slate-300">{data.release.split('-')[0]}</p>
                <div className="text-slate-300">•</div>
                <p className="text-sm text-slate-300 w-max">{convertToHour(data.runtime)}</p>
              </div>

            </div>
          </div>

          <div className="text-gray-100 p-4">
            <h1 className="text-xs-2xl font-semibold tracking-wider capitalize">storyline</h1>
            <div className="bg-gradient-to-r from-orange-600 to-transparent h-1 w-full my-2 rounded-l-sm xs:mb-4"></div>
            <p>{data.overview}</p>
          </div>
        </main>}
    </>
  )
}