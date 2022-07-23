import React, { useEffect, useRef, useState } from "react";
import { useSearchContext } from "../../contexts/SearchContext";
import SearchBar from "./index";

export default function StickySearchBar() {
  const { searchBarOpen, searchTerm } = useSearchContext();
  const [searchBarTop, setSearchBarTop] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(null);
  const searchEl = useRef();
  const lineEl = useRef();

  useEffect(() => {
    setValues();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setValues);

    return () => window.removeEventListener("resize", setValues);
  }, []);

  useEffect(() => {
    if (!searchBarTop) return;
    checkStick();
    window.addEventListener("scroll", checkStick);

    return () => window.removeEventListener("scroll", checkStick);
  }, [searchBarTop, searchBarOpen, searchTerm]);

  function setValues() {
    const topValue = searchEl.current.offsetTop;
    const navbarHeightValue = document.querySelector("nav").offsetHeight;

    if (topValue <= navbarHeightValue) return;
    if (searchEl.current.classList.contains("sticky")) return;

    setSearchBarTop(topValue);
    setNavbarHeight(navbarHeightValue);
  }

  function checkStick() {
    const searchBarPassed = window.scrollY > searchBarTop - navbarHeight;

    // "sticky-searchbar", "fix-to-top" and "stick" are custom classes
    const baseClassNames = `sticky-searchbar ${
      searchBarOpen
        ? "opacity-100 max-w-md w-full"
        : "opacity-80 max-w-[8rem] delay-300"
    }`;

    let finalClassNames = "";

    if (searchBarPassed) {
      lineEl.current.classList.add("hidden");
      finalClassNames = `${baseClassNames} stick`;
    } else {
      lineEl.current.classList.remove("hidden");

      if (searchBarOpen && searchTerm) {
        finalClassNames = `${baseClassNames} fix-to-top`;
      } else {
        finalClassNames = `relative ${baseClassNames}`;
      }
    }

    searchEl.current.classList = finalClassNames;
  }

  return (
    <div ref={searchEl} className='opacity-0'>
      <div
        ref={lineEl}
        className='absolute w-96 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-l from-transparent via-primary to-transparent'
      ></div>
      <SearchBar />
    </div>
  );
}
