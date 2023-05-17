import React from "react";

const SearchButton = ({ openSearchBar }) => {
  return (
    <button
      id='search-toggle-button'
      className='ml-auto rounded-full p-2 hover:bg-nightRendezvous1'
      onClick={openSearchBar}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        viewBox='0 0 32 32'
        className='pointer-events-none aspect-square w-5'
      >
        <path d='m29 27.586-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9Z' />
      </svg>
    </button>
  );
};

export default SearchButton;
