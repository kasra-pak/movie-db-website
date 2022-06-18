import React from 'react'
import Star from '../../images/home/star.svg'

export default function({ data }) {

  let scoreColor;
  if (data.score >= 8)
    scoreColor = 'text-green-500 border-green-500'
  else if (data.score >= 6 )
    scoreColor = 'text-lime-500 border-lime-500'
  else if (data.score >= 4 )
    scoreColor = 'text-orange-500 border-orange-500'
  else 
    scoreColor = 'text-red-500 border-red-500'

  return (
    <div className='bg-slate-700 text-slate-200 rounded-md w-36 shrink-0 shadow-lg overflow-hidden hover:shadow-xl hover:scale-[102%] xs:w-52 sm:w-64 '>
      <div className='relative'>
        <img className='w-full rounded-md' src={data.poster} alt={data.title} />
        <div className="absolute inset-0 top-3/4 bg-gradient-to-t	from-slate-700"></div>
        <div className={`flex items-center gap-0.5 absolute bottom-0 left-2 border ${scoreColor} rounded-md px-1 xs:gap-1.5 xs:px-1.5 xs:py-0.5`}>
          <Star className="w-2.5 xs:w-3.5 fill-yellow-500" />
          <span className='text-xs font-semibold xs:text-base'>{data.score}</span>
        </div>
      </div>
      <div className='p-2 xs:mt-2'>
        <h3 className='text-xs-2xl font-bold tracking-wider capitalize truncate xs:font-semibold xs:tracking-wide'>
          {data.title}
        </h3>
      </div>
    </div>
  )
}