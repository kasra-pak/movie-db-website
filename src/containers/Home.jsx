import React from 'react'
import Navbar from '../components/Navbar';
import Trends from '../components/Trends'
import StickySearchBar from '../components/SearchBar/StickySearchBar'
import Populars from '../components/Populars';
import TopRatedItems from '../components/TopRatedItems';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='bg-secondary'>
        <Trends />
        <StickySearchBar />
        <Populars />
        <TopRatedItems />
      </main>
      <Footer />
  </>
  )
}