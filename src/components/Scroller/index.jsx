import React from 'react'
import MovieCard from './MovieCard'

export default function Scroller({ data }) {
  return (
    <div className='flex gap-4 pt-3 pb-8 px-1 overflow-x-scroll xs:pt-6'>
      {data.map(item => (
        <MovieCard key={item.id} data={item} />
      ))}
    </div>
  )
}