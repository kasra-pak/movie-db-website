import React from "react";
import { logOutUser } from "../../firebase";
import { useCurrentUserData } from "../../hooks/UserHooks";
import NavLink from "./NavLink";

import Tv from "../../images/mobile-menu/tv.svg";
import Movie from "../../images/mobile-menu/movie.svg";
import Bookmark from "../../images/mobile-menu/bookmark.svg";
import Login from "../../images/mobile-menu/login.svg";
import LogoutMobileMenu from "../../images/mobile-menu/logout.svg";
import Spinner from "../../images/loading/spinner.svg";

function MobileMenu({ mobileMenuOpen, ...rest }) {
  const [userData, userDataStatus] = useCurrentUserData();

  return (
    <ul
      className={`bg-inherit absolute h-screen inset-0 z-20 right-1/4 right flex flex-col gap-10 px-4 py-32 transition-transform xs:right-1/3 sm:right-1/2 sm:gap-12 sm:px-6 sm:py-40 ${
        mobileMenuOpen ? "md:-translate-x-full" : "-translate-x-full"
      }`}
      {...rest}
    >
      <NavLink linkTo='/'>
        <Movie className='mobile-menu-icon' aria-hidden='true' />
        Movies
      </NavLink>

      <NavLink linkTo='/'>
        <Tv className='mobile-menu-icon' aria-hidden='true' />
        TV Shows
      </NavLink>

      <NavLink linkTo='/watchlist'>
        <Bookmark className='mobile-menu-icon' aria-hidden='true' />
        Watch List
      </NavLink>

      <NavLink linkTo={userDataStatus === "idle" ? "/login" : null}>
        {userDataStatus === "idle" && (
          <>
            <Login className='mobile-menu-icon' aria-hidden='true' />
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
            className='relative block w-full text-inherit text-lg font-semibold tracking-wider capitalize after:content-[""] after:absolute after:-inset-2 after:rounded-r-full sm:after:-inset-3 sm:text-xl md:tracking-wide'
          >
            <div className='flex items-end'>
              <LogoutMobileMenu
                className='mobile-menu-icon'
                aria-hidden='true'
              />
              <span className='text-primary'>Logout</span>
              <span className='ml-auto capitalize'>{userData.name}</span>
            </div>
          </button>
        )}
      </NavLink>

      {/* <li className='nav-link md:hidden'>
        {Object.entries(userData).length ? (
          <button
            onClick={logOutUser}
            className='block w-full text-inherit text-lg font-semibold tracking-wider capitalize p-2 sm:text-xl md:tracking-wide sm:p-3'
          >
            <div className='flex flex-wrap items-end'>
              <LogoutMobileMenu className='fill-primary shrink-0 w-7 mr-1 -mt-1 sm:w-8 sm:mr-2' />
              <p>logout</p>
              <p className='w-max ml-auto'>{userData.name}</p>
            </div>
          </button>
        ) : (
          <Link to='/login' className='block p-2 sm:p-3'></Link>
        )}
      </li> */}
    </ul>
  );
}

export default MobileMenu;
