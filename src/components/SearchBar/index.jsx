import React, { useRef } from "react"
import Search from "../../images/navbar/search.svg"
import { useSearchContext } from "../../contexts/SearchContext"

export default function SearchBarTemp() {
  const { searchTerm, handleSearchTermChange, searchBarOpen, toggleSearchBarOpen } = useSearchContext()
  const searchInput = useRef()
  
  return (
    <div className={`${searchBarOpen ? 'w-full' : 'w-12 delay-300 sm:w-14'} transition-[width] duration-300 relative h-12 sm:h-14`}>
      <label htmlFor="search-input" className="sr-only">search bar</label>
      <input
        type="search"
        id="search-input"
        placeholder="Search..."
        ref={searchInput}
        value={searchTerm}
        onChange={handleSearchTermChange}
        className={`${searchBarOpen ? '' : 'scale-x-0 -translate-x-6'} bg-orange-100 text-gray-900 w-full h-full border-2 border-primary rounded-full px-6 transition-transform origin-right duration-300`}
      />

      <button
        aria-controls="search-input"
        aria-expanded={searchBarOpen}
        onClick={() => toggleSearchBarOpen(searchInput.current)}
        className={`absolute right-0 w-12 bg-gray-800 border-primary rounded-full z-30 aspect-square transition-all sm:w-14 ${searchBarOpen ? 'border-2' : ''}`}
      >
        <Search className="w-full stroke-primary fill-gray-800" aria-hidden="true" />
      </button>
    </div>
  )
}