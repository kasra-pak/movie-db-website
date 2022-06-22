import React, { useRef } from "react"
import Search from "../images/navbar/search.svg"
import { useSearchContext } from "../contexts/SearchContext"

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



{/* Search bar */}
{/* <div className={`${searchBarOpen ? 'z-30' : 'z-0'} absolute inset-x-0 px-4 transition-all sm:px-6 md:hidden`}>
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
</div> */}

{/* Search button */}
{/* <button
className={`w-10 bg-gray-800 border-gray-100 rounded-full z-30 aspect-square transition-all sm:w-14 md:hidden ${searchBarOpen ? 'border-2' : ''}`}
aria-controls="search-input"
aria-expanded={searchBarOpen}
onClick={handleSearchBtnClick}
>
<Search className="w-full stroke-primary fill-gray-800" aria-hidden="true"/>
</button> */}