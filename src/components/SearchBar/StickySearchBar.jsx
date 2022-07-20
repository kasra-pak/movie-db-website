import React, { useEffect, useRef, useState } from "react";
import { useSearchContext } from "../../contexts/SearchContext";
import SearchBar from "./index";

export default function StickySearchBar() {
  const { searchBarOpen } = useSearchContext();
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
  }, [searchBarTop, searchBarOpen]);

  function setValues() {
    const topValue = searchEl.current.offsetTop;
    const navbarHeightValue = document.querySelector("nav").offsetHeight;

    if (topValue <= navbarHeightValue) return;
    if (searchEl.current.classList.contains("sticky")) return;

    setSearchBarTop(topValue);
    setNavbarHeight(navbarHeightValue);
  }

  function checkStick() {
    const classes = ["sticky", "top-[68px]", "z-40", "border-b-[4px]"];

    if (window.scrollY > searchBarTop - navbarHeight) {
      searchEl.current.classList.add(...classes);
      lineEl.current.classList.add("hidden");
    } else {
      searchEl.current.classList.remove(...classes);
      lineEl.current.classList.remove("hidden");
    }
  }

  return (
    <div
      ref={searchEl}
      className={`relative bg-secondary border-primary rounded-b-full hidden px-8 justify-center mx-auto transition-[opacity,_max-width] duration-300 md:flex ${
        searchBarOpen
          ? "opacity-100 max-w-md"
          : "opacity-80 max-w-[8rem] delay-300"
      }`}
    >
      <div
        ref={lineEl}
        className='absolute w-96 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-l from-transparent via-primary to-transparent'
      ></div>
      <SearchBar />
    </div>
  );
}
