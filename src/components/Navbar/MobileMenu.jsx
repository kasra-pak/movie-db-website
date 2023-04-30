import React from "react";
import { logOutUser } from "@/firebase";
import { useCurrentUserData } from "@/hooks/UserHooks";
import NavLink from "./NavLink";

import Logo from "@/components/Shared/Logo";
import Tv from "@/images/mobile-menu/tv.svg";
import Movie from "@/images/mobile-menu/movie.svg";
import Bookmark from "@/images/mobile-menu/bookmark.svg";
import Login from "@/images/mobile-menu/login.svg";
import LogoutMobileMenu from "@/images/mobile-menu/logout.svg";
import Spinner from "@/images/loading/spinner.svg";

function MobileMenu({ mobileMenuOpen, toggleMobileMenu }) {
  const [userData, userDataStatus] = useCurrentUserData();

  const navItems = ["Movies", "TV Shows", "Watchlist"];

  return (
    <div
      className={`fixed inset-0 z-20 ${mobileMenuOpen ? "block" : "hidden"}`}
    >
      <div
        className='absolute inset-0 bg-gray-800/60'
        onClick={toggleMobileMenu}
      ></div>
      <div
        className='absolute inset-0 max-w-[260px] overflow-auto bg-white'
        // className={`absolute inset-0 right-1/4 z-20 flex h-screen flex-col gap-10 bg-gray-300 px-4 py-32 transition-transform xs:right-1/3 sm:right-1/2 sm:gap-12 sm:px-6 sm:py-40 ${
        //   mobileMenuOpen ? "md:-translate-x-full" : "-translate-x-full"
        // }`}
      >
        <div className='p-4'>
          <Logo />
        </div>
        <nav className='flex flex-col'>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              className='cursor-pointer px-8 py-3.5 text-sm text-nightRendezvous hover:bg-lostAtSee1'
            >
              {item}
            </a>
          ))}
        </nav>
        <div className='p-6'>
          <button className='w-full rounded-lg bg-midnightExpress py-1.5 font-bold text-white'>
            Login
          </button>
        </div>
        {/* <NavLink linkTo='/'>
              <Movie aria-hidden='true' />
              Movies
            </NavLink>
            <NavLink linkTo='/'>
              <Tv aria-hidden='true' />
              TV Shows
            </NavLink>
            <NavLink linkTo='/watchlist'>
              <Bookmark aria-hidden='true' />
              Watch List
            </NavLink>
            <NavLink linkTo={userDataStatus === "idle" ? "/login" : null}>
              {userDataStatus === "idle" && (
                <>
                  <Login aria-hidden='true' />
                  <span className='text-primary'>Login</span>
                </>
              )}
              {userDataStatus === "loading" && (
                <>
                  <Spinner
                    className='mobile-menu-icon animate-spin'
                    aria-hidden='true'
                  />
                  <span className='text-primary'>Loading</span>
                </>
              )}
              {userDataStatus === "success" && (
                <button
                  onClick={logOutUser}
                  className='relative block w-full text-lg font-semibold capitalize tracking-wider text-inherit after:absolute after:-inset-2 after:rounded-r-full after:content-[""] sm:text-xl sm:after:-inset-3 md:tracking-wide'
                >
                  <div className='flex items-end'>
                    <LogoutMobileMenu aria-hidden='true' />
                    <span className='text-primary'>Logout</span>
                    <span className='ml-auto capitalize'>{userData.name}</span>
                  </div>
                </button>
              )}
            </NavLink> */}
      </div>
    </div>
  );
}

export default MobileMenu;
