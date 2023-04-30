import React, { useContext, useEffect, useState } from "react";
import { searchItems } from "@/api/functions";

const SearchContext = React.createContext();

function SearchProvider({ children }) {
  const [searching, setSearching] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    const searchingTimeout = setTimeout(() => {
      setSearching(true);
      searchItems(searchTerm).then(data => {
        setResults(data);
        setSearching(false);
      });
    }, 400);
    return () => {
      setResults(null);
      clearTimeout(searchingTimeout);
    };
  }, [searchTerm]);

  function toggleSearchBarOpen(inputEl) {
    setSearchBarOpen(prevState => !prevState);
    if (!searchBarOpen) inputEl.focus();
  }

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        handleSearchTermChange,
        searchBarOpen,
        toggleSearchBarOpen,
        results,
        searching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearchContext() {
  return useContext(SearchContext);
}

export { SearchProvider, useSearchContext };
