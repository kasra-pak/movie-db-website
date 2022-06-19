import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { preventOverflow } from '../utils/NumberUtils';
import ScoreCircle from '../components/ScoreCircle'
import SlideControl from "./SlideControl";


export default function ImageSlider({ data, activeSlide, setActiveSlide }) {
  const slider = useRef()

  useEffect(() => {

    const sliderTimer = setInterval(() => {
      slider.current.childNodes.forEach((child, idx) => {
        if (idx !== activeSlide)
          child.classList.add('opacity-0')
        else 
          child.classList.remove('opacity-0')
      })

      setActiveSlide(prevSlide => preventOverflow(prevSlide + 1, data.length))
    }, 6000);

    return () => clearInterval(sliderTimer)
    
  })

  function handleSkip(direction) {
    if (direction === 'backward') 
      setActiveSlide(prevSlide => preventOverflow(prevSlide - 1, data.length))
    else
      setActiveSlide(prevSlide => preventOverflow(prevSlide + 1, data.length))
  }

  return (
    <div ref={slider} className="overflow-hidden">
      {data.map((item, idx) => (
        <div key={idx} className={`${activeSlide !== idx ? 'h-0 opacity-0' : ''} inset-0 transition-opacity text`}>
          <div className="relative">
            <SlideControl
              skip={handleSkip}
              direction="backward"
            />
            <SlideControl
              skip={handleSkip}
              direction="forward"
            />
            <Link to={`/detail/${item.media}/${item.id}`}>
              <img src={item.backdrop} className="w-full max-h-[80vh] object-cover" aria-hidden='true' />
              <div className="absolute inset-0 top-1/3 bg-gradient-to-t	from-gray-800"></div>
              <div className="absolute top-1/2 p-4 w-full text-gray-100">
                <p className=' font-bold tracking-wide text-sm-3xl capitalize truncate sm:text-3xl'>{item.title}</p>
                <div className="flex justify-between items-center my-2">
                  <div className="flex flex-wrap h-5 gap-1 text-xs font-medium tracking-wider text-slate-200 opacity-90 overflow-hidden xs:text-sm xs:gap-2 ">
                    {item.genres.map((genre, idx) => (
                      <p key={idx} className="capitalize">{`${genre}${idx === item.genres.length - 1 ? '' : ' |'}`}</p>
                    ))}
                  </div>
                  <ScoreCircle score={item.score} />
                </div>
                <p className="max-w-md hidden text-sm xs:line-clamp-2 xs:block sm:line-clamp-4">{item.overview}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}