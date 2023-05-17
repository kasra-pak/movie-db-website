import React from "react";
import Search from "@/images/home/search.svg";

const SearchButton = ({ openSearchBar }) => {
  return (
    <button
      id='search-toggle-button'
      className='ml-auto rounded-full p-2 hover:bg-nightRendezvous1'
      onClick={openSearchBar}
    >
      <Search className='pointer-events-none aspect-square w-5' />
    </button>
  );
};

export default SearchButton;
