import React from 'react'
import StarImg from '../images/home/star.svg'

export default function Stars({ score }) {
  const stars = []
  const decimal = score % 1
  let decimal_flag = true

  for(let i = 1; i <= 10; i++) {
    if (i < score) {
      stars.push(<StarImg key={i} className="fill-primary w-2.5" />)
    } else if (decimal_flag) {
      stars.push(<StarImg key={i} className="fill-slate-500 w-2.5" />)
      decimal_flag = false
    } else {
      stars.push(<StarImg key={i} className="fill-slate-500 w-2.5" />)
    }
  }

  return (
    <div className="w-full flex flex-wrap justify-between">
      <div className='flex gap-0.5'>
        {stars}
      </div>
      <p className='text-slate-300 text-xs tracking-wider font-semibold w-max'>{score} / 10</p>
    </div>
  )
}