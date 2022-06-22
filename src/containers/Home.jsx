import React from 'react'
import Navbar from '../components/Navbar';
import Trends from '../components/Trends'
import SearchBarTemp from '../components/SearchBarTemp'
import Populars from '../components/Populars';
import TopRatedItems from '../components/TopRatedItems';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='bg-secondary'>
        <Trends />
        <div className='hidden max-w-md justify-center mx-auto md:flex'>
          <SearchBarTemp />
        </div>
        <Populars />
        <TopRatedItems />
      </main>
  </>
  )
}