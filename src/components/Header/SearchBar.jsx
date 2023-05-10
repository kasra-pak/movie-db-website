import React, { useEffect, useRef } from "react";

const SearchBar = ({ isOpen, closeSearchBar }) => {
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
      className={`fixed inset-x-0 z-20 flex cursor-text justify-between bg-white/70 px-6 py-3 backdrop-blur-[6px] ${
        isOpen ? "fixed" : "-translate-y-full"
      }`}
    >
      <div className='flex flex-grow gap-x-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          viewBox='0 0 32 32'
          className='aspect-square w-5 fill-lostAtSee'
        >
          <path d='m29 27.586-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9Z' />
        </svg>
        <label htmlFor='search-input' className='sr-only'>
          Search
        </label>
        <input
          type='search'
          name='search'
          id='search-input'
          placeholder='Search...'
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
