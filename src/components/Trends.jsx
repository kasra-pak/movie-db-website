import React, { useState, useEffect } from 'react'
import { getTrendingItems } from '../api/functions'
import ImageSlider from '../components/ImageSlider'
import LoadingImg from '../images/loading/loading.svg'


export default function Trends() {
  const [loading, setLoading] = useState(true)
  const [trends, setTrends] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    getTrendingItems().then(items => {
      setTrends(items)
      setLoading(false)
    })
  }, [])

  if (loading)
    return (
      <section className="aspect-[9/5] flex justify-center items-center">
        <LoadingImg className="fill-primary w-12 mx-auto" />
      </section>
    )

  return(
    trends && <section>
      <ImageSlider
        data={trends}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </section>
  )
}