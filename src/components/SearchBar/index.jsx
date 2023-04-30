import React, { useEffect, useRef } from "react";
import Search from "@/images/navbar/search.svg";
import { useSearchContext } from "@/contexts/SearchContext";

export default function SearchBarTemp() {
  const {
    searchTerm,
    handleSearchTermChange,
    searchBarOpen,
    toggleSearchBarOpen,
  } = useSearchContext();
  const searchInput = useRef();

  useEffect(() => {
    if (searchBarOpen) searchInput.current.focus();
  }, []);

  return (
    <div
      className={`${
        searchBarOpen ? "w-full" : "w-8 delay-300 sm:w-11"
      } relative h-8 transition-[width] duration-300 sm:h-11`}
    >
      <label htmlFor='search-input' className='sr-only'>
        search bar
      </label>
      <input
        type='search'
        id='search-input'
        placeholder='Search...'
        ref={searchInput}
        value={searchTerm}
        onChange={handleSearchTermChange}
        className={`${
          searchBarOpen ? "px-6" : "-translate-x-4 scale-x-0 sm:-translate-x-6"
        } h-full w-full origin-right rounded-full border-2 border-primary bg-orange-100 text-gray-900 transition-transform duration-300`}
      />

      <button
        aria-controls='search-input'
        aria-expanded={searchBarOpen}
        onClick={() => toggleSearchBarOpen(searchInput.current)}
        className={`absolute right-0 z-30 aspect-square w-8 rounded-full border-primary bg-gray-800 transition-all sm:w-11 ${
          searchBarOpen ? "border-2" : ""
        }`}
      >
        <Search
          className='w-full fill-gray-800 stroke-primary'
          aria-hidden='true'
        />
      </button>
    </div>
  );
}
