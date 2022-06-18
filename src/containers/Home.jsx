import React from 'react'
import Trends from '../components/Trends'
import SearchBar from '../components/SearchBar'
import Populars from '../components/Populars';

export default function Home() {
  return (
    <main className='bg-secondary'>
      <Trends />
      <SearchBar />
      <Populars />
    </main>
  )
}