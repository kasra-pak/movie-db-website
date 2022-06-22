import React, { useContext, useEffect, useState } from 'react'
import { searchItems } from '../api/functions'

const SearchContext = React.createContext()

function SearchProvider({ children }) {
  const [searching, setSearching] = useState(false)
  const [searchBarOpen, setSearchBarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState(null)

  useEffect(() => {
    
    const searchingTimeout = setTimeout(() => {
      setSearching(true)
      searchItems(searchTerm).then(data => {
        setResults(data)
        setSearching(false)
      })
    }, 1000);

    return (() => clearTimeout(searchingTimeout))
  }, [searchTerm])


  console.log(results)

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchBarOpen,
        setSearchBarOpen,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

function useSearchContext() {
  return useContext(SearchContext)
}

export { SearchProvider, useSearchContext }