import React, { useEffect, useRef, useState } from "react"
import { useSearchContext } from "../../contexts/SearchContext"
import SearchBar from './index'

export default function StickySearchBar() {
  const { searchBarOpen } = useSearchContext
  const [searchBarTop, setSearchBarTop] = useState(null)
  const [navbarHeight, setNavbarHeight] = useState(null)
  const searchEl = useRef()

  useEffect(() => {
    setValues()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setValues)
    
    return (() => window.removeEventListener('resize', setValues))
  }, [])
  
  useEffect(() => {
    if (!searchBarTop) return
    checkStick()
    
    window.addEventListener('scroll', checkStick)
    
    return (() => window.removeEventListener('scroll', checkStick))
  }, [searchBarTop])

  function setValues() {
    const topValue = searchEl.current.offsetTop
    const navbarHeightValue = document.querySelector('nav').offsetHeight

    if (topValue <= navbarHeightValue) return

    setSearchBarTop(topValue)
    setNavbarHeight(navbarHeightValue)
  }

  function checkStick() {
    // const jis = Math.floor(navbarHeight * 0.75).toString()
    const classes = ['fixed', 'inset-x-0','top-[75px]', 'z-40']

    if (window.scrollY > searchBarTop - navbarHeight) {
      searchEl.current.classList.remove('relative')
      searchEl.current.classList.add(...classes)
    } else {
      searchEl.current.classList.add('relative')
      searchEl.current.classList.remove(...classes)
    }
  }

  return (
    <div ref={searchEl} className={`relative max-w-md rounded-full hidden justify-center mx-auto md:flex`}>

      <div className='absolute inset-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-l from-transparent via-primary to-transparent'></div>

      <SearchBar />
    </div>
  )
}