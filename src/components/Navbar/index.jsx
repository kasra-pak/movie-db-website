import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSearchContext } from "../../contexts/SearchContext";
import Logo from "../Shared/Logo";
import SearchBar from "../SearchBar";
import MobileMenu from "./MobileMenu";
import Navigations from "./Navigations";
import LoginBtn from "./LoginBtn";

import Hamburger from "../../images/navbar/hamburger.svg";
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
    <nav className='sticky top-0 z-40 bg-gray-800 text-gray-100 text-lg font-semibold tracking-wider flex justify-between items-center px-4 py-2 sm:text-xl sm:px-6 md:tracking-wide'>
      {/* Mobile Menu */}
      <button
        className='relative z-30 w-8 sm:w-11 md:hidden'
        aria-controls='mobile-menu'
        aria-expanded={mobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          <Close
            className='w-[90%] stroke-primary fill-primary'
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
        className={`flex gap-x-1.5 items-center text-primary fill-primary ${
          searchBarOpen ? "z-10" : "z-30"
        } transition-all`}
      >
        <Logo />
      </Link>

      <Navigations />

      {/* SearchBar */}
      <div className='md:hidden w-8 sm:w-11'>
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
