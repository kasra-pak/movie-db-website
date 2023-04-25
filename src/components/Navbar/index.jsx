import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSearchContext } from "../../contexts/SearchContext";
import Logo from "../Shared/Logo";
import SearchBar from "../SearchBar";
import MobileMenu from "./MobileMenu";
import Navigations from "./Navigations";
import LoginBtn from "./LoginBtn";

import Close from "../../images/navbar/close.svg";

export default function Navbar() {
  const { searchBarOpen } = useSearchContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (searchBarOpen && mobileMenuOpen) toggleMobileMenu();
  }, [searchBarOpen]);

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState);
  }

  return (
    <nav className='sticky top-0 z-40 flex items-center justify-between bg-gray-800 px-4 py-2 text-lg font-semibold tracking-wider text-gray-100 sm:px-6 sm:text-xl md:tracking-wide'>
      {/* Mobile Menu */}
      <button
        className='relative z-30 w-8 sm:w-11 md:hidden'
        aria-controls='mobile-menu'
        aria-expanded={mobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          <Close
            className='w-[90%] fill-primary stroke-primary'
            aria-hidden='true'
          />
        ) : (
          <Hamburger className='w-full stroke-primary' aria-hidden='true' />
        )}
      </button>
      <MobileMenu id='mobile-menu' mobileMenuOpen={mobileMenuOpen} />

      {/* Logo */}
      <Link
        to='/'
        className={`flex items-center gap-x-1.5 fill-primary text-primary ${
          searchBarOpen ? "z-10" : "z-30"
        } transition-all`}
      >
        <Logo />
      </Link>

      <Navigations />

      {/* SearchBar */}
      <div className='w-8 sm:w-11 md:hidden'>
        <div
          className={`${
            searchBarOpen ? "absolute z-30" : ""
          } inset-x-4 inset-y-2 flex justify-end sm:inset-x-6`}
        >
          <SearchBar />
        </div>
      </div>

      {/* logIn button */}
      <LoginBtn />
    </nav>
  );
}
