import React from 'react'
import Navbar from '../components/Navbar';
import Trends from '../components/Trends'
import SearchBar from '../components/SearchBar'
import Populars from '../components/Populars';
import TopRatedItems from '../components/TopRatedItems';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='bg-secondary'>
        <Trends />
        <SearchBar />
        <Populars />
        <TopRatedItems />
      </main>
  </>
  )
}