import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getDetail } from "../api/functions"

import Navbar from "../components/Navbar";
import Intro from "../components/Detail/Intro";
import Cast from "../components/Detail/Cast";

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
          <Intro media={media} data={data} />

          <div className="text-gray-100 p-4">
            <h1 className="text-xs-2xl font-semibold tracking-wider capitalize">storyline</h1>
            <div className="bg-gradient-to-r from-orange-600 to-transparent h-1 w-full my-2 rounded-l-sm xs:mb-4"></div>
            <p>{data.overview}</p>
          </div>

          <Cast></Cast>
        </main>}
    </>
  )
}