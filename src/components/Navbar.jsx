import React, { useState } from "react"

import LogoImg from "../images/navbar/logo.svg"
import HamburgerImg from "../images/navbar/hamburger.svg"
import SearchImg from "../images/navbar/search.svg"
import CloseImg from "../images/navbar/close.svg"
import TvImg from "../images/mobile-menu/tv.svg"
import MovieImg from "../images/mobile-menu/movie.svg"
import BookmarkImg from "../images/mobile-menu/bookmark.svg"
import LoginImg from "../images/mobile-menu/login.svg"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchBarOpen, setSearchBarOpen] = useState(false)

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState)
  }

  function toggleSearchBar() {
    setSearchBarOpen(prevState => !prevState)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-gray-800 text-gray-100 text-xl font-semibold tracking-wider flex justify-between items-center p-4 sm:text-2xl sm:p-6 md:tracking-wide">
      {/* Hamburger button */}
      <button
        className="relative z-20 w-10 sm:w-14 md:hidden"
        aria-controls="mobile-menu"
        aria-expanded={mobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <img className="w-full" src={mobileMenuOpen ? CloseImg : HamburgerImg} aria-hidden="true" />
      </button>
      {/* Logo */}
      <a href="#" className="flex gap-x-2.5 items-center z-10">
        <div className="w-7 sm:w-8">
          <img src={LogoImg} alt="Website Logo" />
        </div>
        <p className="text-4xl font-semibold space text-yellow-400">
          M<span className="hidden sm:inline">OVIE </span>DB
        </p>
      </a>
      {/* Links */}
      <ul
        id="mobile-menu"
        className={`bg-inherit absolute inset-0 right-1/4 flex flex-col gap-10 py-32 px-4 transition-transform sm:py-40 sm:px-6 sm:gap-12 md:static md:flex-row md:gap-x-1 md:p-0 md:translate-x-0 overflow-hidden ${mobileMenuOpen ? '' : '-translate-x-full'}`}
      >
        <li className="nav-link">
          <a className="block p-2 sm:p-3" href="#">
            <img className="inline-block w-6 mr-2 -mt-1 my-auto sm:w-7 sm:mr-3 md:hidden" src={MovieImg} aria-hidden="true" />
            Movies</a>
        </li>
        <li className="nav-link">
          <a className="block p-2 sm:p-3" href="#">
            <img className="inline-block w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden" src={TvImg} aria-hidden="true" />
            TV Shows</a>
        </li>
        <li className="nav-link">
          <a className="block p-2 sm:p-3" href="#">
            <img className="inline-block w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden" src={BookmarkImg} aria-hidden="true" />
            Watch List</a>
        </li>
        <li className="nav-link md:hidden text-yellow-400">
          <a className="block p-2 sm:p-3" href="#">
            <img className="inline-block w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden" src={LoginImg} aria-hidden="true" />
            Login</a>
        </li>
      </ul>
      {/* Search bar */}
      <div className={`${searchBarOpen ? 'z-20' : 'z-0'} absolute inset-x-0 px-4 sm:px-6 md:hidden transition-all`}>
        <label htmlFor="search-input" className="sr-only">search bar</label>
        <input
          className={`${searchBarOpen ? '' : 'scale-x-0 -translate-x-5'} w-full bg-gray-100 text-gray-900 p-2 sm:p-4 rounded-full origin-right transition-transform`}
          type="search"
          id="search-input"
          placeholder="Search"
        />
      </div>
      {/* Search button */}
      <button
        className={`w-10 bg-gray-800 border-gray-100 rounded-full z-20 aspect-square transition-all sm:w-14 md:hidden ${searchBarOpen ? 'border-2' : ''}`}
        aria-controls="search-input"
        aria-expanded={searchBarOpen}
        onClick={toggleSearchBar}
      >
        <img src={SearchImg} className="w-full" aria-hidden="true"/>
      </button>
      {/* logIn button */}
      <a href="#" className="hidden md:block text-gray-900 bg-yellow-400 px-3 py-1 rounded-md">
        Log In
      </a>
    </nav>
  )
}