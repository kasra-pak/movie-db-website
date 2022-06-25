import React, { useState, useEffect } from 'react'
import { getCast } from '../../api/functions'
import LoadingImg from '../../images/loading/loading.svg'

export default function Cast({ media, id}) {
  const [loading, setLoading] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const [cast, setCast] = useState(null)

  useEffect(() => {
    getCast(media, id).then(data => {
      setCast(data)
      setLoading(false)
    })
  }, [])

  function toggleShowMore() {
    setShowMore(prevState => !prevState)
  }

  let castEl
  if (!loading) {
    castEl = cast.map((item, idx) => (
      <div key={idx} className="bg-slate-700 flex items-center gap-3 rounded-lg overflow-hidden shadow-md">
        <img src={item.profile} alt={item.name} className='w-20' />
        <p>
          <span className='text-slate-100 font-semibold tracking-wider'>{item.name}</span>
          <br />
          <span className="text-slate-300">
            as
            <br />
            {item.character}
          </span>
        </p>
      </div>
    ))
  }

  console.log(cast)

  return (
    loading ?
      <div className="aspect[9/5] flex justify-center items-center">
        <LoadingImg className="w-12 fill-primary" />
      </div> :

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
        {showMore ? castEl : castEl.slice(0, 6)}

        {cast.length > 6 &&
          <button
          onClick={toggleShowMore}
          className='bg-orange-500 capitalize font-semibold tracking-wider min-w-max w-1/4 max-w-xs justify-self-center col-span-full px-4 py-1  rounded-lg shadow-md hover:bg-primary'>
            {showMore ? 'show less' : 'show more'}
          </button>
        }
      </div>
    
  )
}