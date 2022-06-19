import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getDetail } from "../api/functions"
import Navbar from "../components/Navbar";

export default function Detail() {
  const [data, setData] = useState(null)
  const {media, id} = useParams()

  useEffect(() => {
    getDetail(media, id).then(data => setData(data))
  }, [])

  console.log(data)

  return (
    <>
      <Navbar />
      {data &&
      <div className="text-3xl">
        {data.title}
      </div>}
    </>
  )
}