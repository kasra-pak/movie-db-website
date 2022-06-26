import React from 'react'
import Navbar from '../components/Navbar';
import Trends from '../components/Trends'
import StickySearchBar from '../components/SearchBar/StickySearchBar'
import Populars from '../components/Populars';
import TopRatedItems from '../components/TopRatedItems';
import Footer from '../components/Footer';
import { useSearchContext } from '../contexts/SearchContext';
import SearchResult from '../components/SearchResult';


export default function Home() {
  const { searchTerm, searchBarOpen } = useSearchContext()
  return (
    <>
      <Navbar />
      {searchBarOpen && searchTerm ?

        <main className='bg-slate-700'>
          <StickySearchBar />
          <SearchResult />
        </main> :

        <main className='bg-secondary'>
          <Trends />
          <StickySearchBar />
          <Populars />
          <TopRatedItems />
        </main>
      }
      <Footer />
    </>
  )
}