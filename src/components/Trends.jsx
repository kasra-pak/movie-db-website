import React, { useState, useEffect } from 'react'
import { getTrendingItems } from '../api/functions'
import ImageSlider from '../components/ImageSlider'


export default function Trends() {
  const [trends, setTrends] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    getTrendingItems().then(items => setTrends(items))
  }, [])

  return(
    trends && <section>
      <ImageSlider
        data={trends}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      {/* <div className='absolute inset-0 top-1/3 bg-gradient-to-t	from-gray-800 '></div> */}
      {/* <div className="absolute top-1/2">
        <h1 className='text-gray-100 text-xl'>{trends[activeSlide].title}</h1>
      </div> */}
    </section>
  )
}