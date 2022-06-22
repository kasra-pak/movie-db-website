import React, { useRef, useState } from "react"
import { Link } from 'react-router-dom'
import { useSearchContext } from "../contexts/SearchContext"

import Logo from "../images/navbar/logo.svg"
import Hamburger from "../images/navbar/hamburger.svg"
import Search from "../images/navbar/search.svg"
import Close from "../images/navbar/close.svg"
import Tv from "../images/mobile-menu/tv.svg"
import Movie from "../images/mobile-menu/movie.svg"
import Bookmark from "../images/mobile-menu/bookmark.svg"
import Login from "../images/mobile-menu/login.svg"

export default function Navbar() {
  const { searchTerm, setSearchTerm, searchBarOpen, setSearchBarOpen } = useSearchContext()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const searchInput = useRef()

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState)
  }

  function handleSearchBtnClick() {
    setSearchBarOpen(prevState => !prevState)
    setMobileMenuOpen(false)
    if (!searchBarOpen) searchInput.current.focus()
  }

  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <nav className="bg-gray-800 text-gray-100 text-xl font-semibold tracking-wider flex justify-between items-center p-4 sm:text-2xl sm:p-6 md:tracking-wide">

      {/* Hamburger button */}
      <button
        className="relative z-30 w-10 sm:w-14 md:hidden"
        aria-controls="mobile-menu"
        aria-expanded={mobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? 
          <Close className="w-full stroke-primary fill-primary" aria-hidden="true" /> :
          <Hamburger className="w-full stroke-primary" aria-hidden="true" />
        }
        
      </button>

      {/* Logo */}
      <a href="#" className={`flex gap-x-2.5 items-center ${searchBarOpen ? 'z-0' : 'z-30'} transition-all`}>
        <div className="w-7 sm:w-8">
          <Logo className='fill-primary' />
        </div>
        <p className="text-4xl font-semibold space text-primary">
          M<span className="hidden sm:inline">OVIE </span>DB
        </p>
      </a>

      {/* Links */}
      <ul
        id="mobile-menu"
        className={`bg-inherit absolute inset-0 z-20 right-1/4 flex flex-col gap-10 py-32 px-4 transition-transform sm:py-40 sm:px-6 sm:gap-12 md:static md:flex-row md:gap-x-1 md:p-0 md:translate-x-0 overflow-hidden ${mobileMenuOpen ? '' : '-translate-x-full'}`}
      >
        <li className="nav-link">
          <a href="#" className="block p-2 sm:p-3">
            <Movie className="inline-block fill-primary w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden" aria-hidden="true" />
            Movies</a>
        </li>
        <li className="nav-link">
          <a href="#" className="block p-2 sm:p-3">
            <Tv className="inline-block fill-primary w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden" aria-hidden="true" />
            TV Shows</a>
        </li>
        <li className="nav-link">
          <a href="#" className="block p-2 sm:p-3">
            <Bookmark className="inline-block fill-primary w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden" aria-hidden="true" />
            Watch List</a>
        </li>
        <li className="nav-link md:hidden text-primary">
          <Link to="/login" className="block p-2 sm:p-3">
            <Login className="inline-block fill-primary w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden" aria-hidden="true" />
            Login</Link>
        </li>
      </ul>

teasjj;<aside>
  
</aside>
      {/* Search bar */}
      <div className={`${searchBarOpen ? 'z-30' : 'z-0'} absolute inset-x-0 px-4 transition-all sm:px-6 md:hidden`}>
        <label htmlFor="search-input" className="sr-only">search bar</label>
        <input
          className={`${searchBarOpen ? '' : 'scale-x-0 -translate-x-5'} w-full bg-gray-100 text-gray-900 p-2 sm:p-4 rounded-full origin-right transition-transform`}
          ref={searchInput}
          type="search"
          id="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>

      {/* Search button */}
      <button
        className={`w-10 bg-gray-800 border-gray-100 rounded-full z-30 aspect-square transition-all sm:w-14 md:hidden ${searchBarOpen ? 'border-2' : ''}`}
        aria-controls="search-input"
        aria-expanded={searchBarOpen}
        onClick={handleSearchBtnClick}
      >
        <Search className="w-full stroke-primary fill-gray-800" aria-hidden="true"/>
      </button>

      {/* logIn button */}
      <Link to="/login" className="hidden md:block text-gray-900 bg-primary px-3 py-1 rounded-md">
        Log In
      </Link>
    </nav>
  )
}