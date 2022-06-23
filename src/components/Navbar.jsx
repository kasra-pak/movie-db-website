import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useSearchContext } from "../contexts/SearchContext"
import SearchBarTemp from "./SearchBarTemp"

import Logo from "../images/navbar/logo.svg"
import Hamburger from "../images/navbar/hamburger.svg"
import Close from "../images/navbar/close.svg"
import Tv from "../images/mobile-menu/tv.svg"
import Movie from "../images/mobile-menu/movie.svg"
import Bookmark from "../images/mobile-menu/bookmark.svg"
import Login from "../images/mobile-menu/login.svg"

export default function Navbar() {
  const { searchBarOpen } = useSearchContext()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (searchBarOpen && mobileMenuOpen)
      toggleMobileMenu() 
  }, [searchBarOpen])

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState)
  }

  return (
    <nav className="sticky top-0 z-40 bg-gray-800 text-gray-100 text-xl font-semibold tracking-wider flex justify-between items-center p-4 sm:text-2xl sm:p-6 md:tracking-wide">

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
        className={`bg-inherit absolute h-screen inset-0 z-20 right-1/4 right flex flex-col gap-10 py-32 px-4 transition-transform xs:right-1/3 sm:right-1/2 sm:py-40 sm:px-6 sm:gap-12 md:static md:h-auto md:flex-row md:gap-x-1 md:p-0 md:translate-x-0 ${mobileMenuOpen ? '' : '-translate-x-full'}`}
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
      
      {/* SearchBar */}
      <div className="md:hidden flex justify-end">
        <SearchBarTemp />
      </div>

      {/* logIn button */}
      <Link to="/login" className="hidden md:block text-gray-900 bg-primary px-3 py-1 rounded-md">
        Log In
      </Link>
    </nav>
  )
}