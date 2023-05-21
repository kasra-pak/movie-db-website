import React, { useEffect, useRef } from "react";
import { useSearchContext } from "@/contexts/SearchContext";
import Search from "@/images/home/search.svg";

const SearchBar = ({ isOpen, closeSearchBar }) => {
  const { searchTerm, handleSearchTermChange } = useSearchContext();
  const searchBarRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      searchBarRef.current.querySelector("#search-input").focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const dismiss = e => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target) &&
        e.target.id !== "search-toggle-button"
      ) {
        closeSearchBar();
      }
    };

    if (isOpen) {
      document.addEventListener("click", dismiss);
    }

    return () => {
      document.removeEventListener("click", dismiss);
    };
  }, [closeSearchBar, isOpen]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={searchBarRef}
      onClick={e => {
        e.currentTarget.querySelector("#search-input").focus();
      }}
      id='search-bar'
      className='mx-auto flex max-w-6xl cursor-text justify-between px-6 py-3'
    >
      <div className='flex flex-grow gap-x-2'>
        <Search className='aspect-square w-5 fill-lostAtSee' />

        <label htmlFor='search-input' className='sr-only'>
          Search
        </label>

        <input
          type='search'
          name='search'
          id='search-input'
          placeholder='Search...'
          autoComplete='off'
          value={searchTerm}
          onChange={handleSearchTermChange}
          className='flex-grow bg-inherit text-sm font-bold text-midnightExpress outline-none'
        />
      </div>

      <button className='rounded-lg bg-smashingPumpkins px-3 py-2 text-sm font-bold text-white hover:bg-lobster hover:shadow-pumpkins'>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
