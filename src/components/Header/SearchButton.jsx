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
        viewBox='0 0 32 32'
        aria-hidden='true'
        className='pointer-events-none aspect-square w-5'
      >
        <path d='m31.707 30.282-9.717-9.776a12.45 12.45 0 0 0 2.902-8.007c0-6.904-5.596-12.5-12.5-12.5s-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5a12.45 12.45 0 0 0 8.197-3.067l9.703 9.764a1.001 1.001 0 0 0 1.415-1.415zm-19.314-7.266c-5.808 0-10.517-4.709-10.517-10.517S6.584 1.982 12.393 1.982c5.808 0 10.516 4.708 10.516 10.517S18.2 23.016 12.392 23.016z' />
      </svg>
    </button>
  );
};

export default SearchButton;
