import React from 'react'
import { useSearchContext } from '../contexts/SearchContext'
import LoadingImg from '../images/loading/loading.svg'

export default function SearchResult() {
  const { results, searching } = useSearchContext()
  const jobs = {
    'acting': 'actor',
    'directing': 'director',
    'writing': 'writer',
  }
  console.log(results)

  return (
    searching ? 

    <div className="aspect-[9/5] flex justify-center items-center">
      <LoadingImg className="fill-primary w-12 mx-auto" />
    </div> :

    <div className='max-w-md mx-auto flex flex-col gap-4 p-4'>
      {results && results.map((item, idx) => (
        <div className='bg-secondary flex items-center gap-3 rounded-md shadow-md overflow-hidden' key={idx}>
          <img src={item.picture} alt={item.title} className="w-12" />
          <div className='text-gray-100 capitalize'>
            <h3 className='font-semibold tracking-wider'>{item.title}</h3>
            <p className='text-slate-400'>
              {item.media === 'person' ? jobs[item.known_for.toLowerCase()] : item.release}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}