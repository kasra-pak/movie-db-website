import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { logOutUser } from "../firebase";
import { useSearchContext } from "../contexts/SearchContext";
import { useCurrentUserData } from "../hooks/UserHooks";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Tooltip from "./Tooltip";

import Hamburger from "../images/navbar/hamburger.svg";
import Close from "../images/navbar/close.svg";
import Tv from "../images/mobile-menu/tv.svg";
import Movie from "../images/mobile-menu/movie.svg";
import Bookmark from "../images/mobile-menu/bookmark.svg";
import Login from "../images/mobile-menu/login.svg";
import Logout1 from "../images/login/logout1.svg";
import Logout2 from "../images/login/logout2.svg";
import Logout3 from "../images/login/logout3.svg";

export default function Navbar() {
  const { searchBarOpen } = useSearchContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [userData] = useCurrentUserData();

  useEffect(() => {
    if (searchBarOpen && mobileMenuOpen) toggleMobileMenu();
  }, [searchBarOpen]);

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState);
  }

  return (
    <nav className='sticky top-0 z-40 bg-gray-800 text-gray-100 text-lg font-semibold tracking-wider flex justify-between items-center px-4 py-2 sm:text-xl sm:px-6 md:tracking-wide'>
      {/* Hamburger button */}
      <button
        className='relative z-30 w-8 sm:w-11 md:hidden'
        aria-controls='mobile-menu'
        aria-expanded={mobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          <Close
            className='w-full stroke-primary fill-primary'
            aria-hidden='true'
          />
        ) : (
          <Hamburger className='w-full stroke-primary' aria-hidden='true' />
        )}
      </button>
      {/* Logo */}
      <Link
        to='/'
        className={`flex gap-x-1.5 items-center text-primary fill-primary ${
          searchBarOpen ? "z-10" : "z-30"
        } transition-all`}
      >
        <Logo />
      </Link>
      {/* Links */}
      <ul
        id='mobile-menu'
        className={`bg-inherit absolute h-screen inset-0 z-20 right-1/4 right flex flex-col gap-10 py-32 px-4 transition-transform xs:right-1/3 sm:right-1/2 sm:py-40 sm:px-6 sm:gap-12 md:static md:h-auto md:flex-row md:gap-x-1 md:p-0 md:translate-x-0 ${
          mobileMenuOpen ? "" : "-translate-x-full"
        }`}
      >
        <li className='nav-link'>
          <a href='#' className='block p-2 sm:p-3'>
            <Movie
              className='inline-block fill-primary w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden'
              aria-hidden='true'
            />
            Movies
          </a>
        </li>
        <li className='nav-link'>
          <a href='#' className='block p-2 sm:p-3'>
            <Tv
              className='inline-block fill-primary w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden'
              aria-hidden='true'
            />
            TV Shows
          </a>
        </li>
        <li className='nav-link'>
          <a href='#' className='block p-2 sm:p-3'>
            <Bookmark
              className='inline-block fill-primary w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden'
              aria-hidden='true'
            />
            Watch List
          </a>
        </li>
        <li className='nav-link md:hidden text-primary'>
          <Link to='/login' className='block p-2 sm:p-3'>
            <Login
              className='inline-block fill-primary w-6 mr-2 -mt-1 sm:w-7 sm:mr-3 md:hidden'
              aria-hidden='true'
            />
            Login
          </Link>
        </li>
      </ul>
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
      {Object.entries(userData).length ? (
        <div className='hidden justify-around items-center border-2 border-primary rounded-md md:flex'>
          <p className='w-max text-primary capitalize px-2 py-1'>
            {userData.name}
          </p>
          <Tooltip label='Logout' className=''>
            <button
              onClick={logOutUser}
              className='block rounded-r-sm text-gray-900 px-2 py-1 bg-primary'
            >
              <Logout1 className='w-7 fill-secondary' />
            </button>
          </Tooltip>
        </div>
      ) : (
        <Link
          to='/login'
          className='hidden md:block text-gray-900 bg-primary px-3 py-1 rounded-md'
        >
          Log In
        </Link>
      )}
    </nav>
  );
}
