import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSearchContext } from "@/contexts/SearchContext";
import SearchBar from "./index";

export default function StickySearchBar() {
  const { searchBarOpen, searchTerm } = useSearchContext();
  const [isPassed, setIsPassed] = useState(false);
  const searchEl = useRef();
  const lineEl = useRef();

  useEffect(() => {
    window.addEventListener("scroll", checkPassed);

    return () => window.removeEventListener("scroll", checkPassed);
  }, [checkPassed, searchBarOpen, searchTerm]);

  useEffect(() => {
    checkStick();
  }, [checkStick, isPassed, searchBarOpen, searchTerm]);

  const checkPassed = useCallback(() => {
    const topValue = searchEl.current.offsetTop;
    const navbarHeightValue = document.querySelector("nav").offsetHeight;

    const searchBarPassed = window.scrollY + 1 >= topValue - navbarHeightValue;

    if (searchBarOpen && searchTerm && searchBarPassed) {
      return;
    }

    setIsPassed(searchBarPassed);
  }, [searchBarOpen, searchTerm]);

  const checkStick = useCallback(() => {
    // "sticky-searchbar", "fix-to-top" and "stick" are custom classes
    const baseClassNames = `sticky-searchbar ${
      searchBarOpen
        ? "opacity-100 max-w-md w-full"
        : "opacity-80 max-w-[8rem] delay-300"
    }`;

    let finalClassNames = "";

    if (isPassed) {
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
  }, [isPassed, searchBarOpen, searchTerm]);

  return (
    <div ref={searchEl} className=''>
      <div
        ref={lineEl}
        className='absolute top-1/2 h-1 w-96 -translate-y-1/2 bg-gradient-to-l from-transparent via-primary to-transparent'
      ></div>
      <SearchBar />
    </div>
  );
}
