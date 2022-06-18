import React, { useRef, useState } from "react";
import Search from "../images/navbar/search.svg"

export default function SearchBar() {
  const [searchBarOpen, setSearchBarOpen] = useState(false)
  const searchInput = useRef()

  function toggleSearchBar() {
    setSearchBarOpen(prevState => !prevState)
    if (!searchBarOpen) searchInput.current.focus()
  }

  return (
    <div className="hidden justify-center items-center h-16 relative bg-gray-800 px-4 py-2 md:flex">
      <div className="bg-primary w-2/3 h-0.5 rounded-lg"></div>
      {/* Search bar */}
      <div className={`absolute inset-0 mx-auto w-2/3 py-2 transition-all`}>
        <label htmlFor="search-input" className="sr-only">search bar</label>
        <input
          className={`${searchBarOpen ? '' : 'scale-x-0'} h-full w-full bg-yellow-50 text-gray-900 border-primary border-2 rounded-full px-6 transition-transform`}
          ref={searchInput}
          type="search"
          id="search-input"
          placeholder="Search"
        />
        <button
        className={`absolute ${searchBarOpen ? 'right-6 translate-x-0' : 'right-1/2'} translate-x-1/2 w-12 bg-gray-800 border-primary border-2 z-20 rounded-full aspect-square transition-all`}
        aria-controls="search-input"
        aria-expanded={searchBarOpen}
        onClick={toggleSearchBar}
      >
        <Search className="w-full stroke-primary fill-gray-800" aria-hidden="true"/>
      </button>
      </div>
      {/* Search button */}
      
  </div>
  )
}