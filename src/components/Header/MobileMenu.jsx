import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOutUser } from "@/firebase";
import Logo from "@/components/Shared/Logo";

import Spinner from "@/images/loading/spinner.svg";
import Logout from "@/images/home/logout.svg";

function MobileMenu({ mobileMenuOpen, toggleMobileMenu, navItems }) {
  const [user, loading] = useAuthState(auth);
  // const [userData, userDataStatus] = useCurrentUserData();

  return (
    <div
      className={`fixed inset-0 z-20 ${
        mobileMenuOpen ? "block" : "hidden"
      } min-[900px]:hidden`}
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
            <Link
              to={item.path}
              key={idx}
              className='flex gap-3 px-6 py-3.5 text-sm text-nightRendezvous hover:bg-lostAtSee1'
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <span className='my-2 block h-px border-b border-dashed border-lostAtSee/[0.24]'></span>

        {user || loading ? (
          <button
            onClick={logOutUser}
            className='flex w-full cursor-pointer gap-3 px-6 py-3.5 text-left text-sm text-nightRendezvous hover:bg-lostAtSee1'
          >
            {loading && <Spinner className='w-5 animate-spin fill-current' />}

            {user && (
              <>
                <Logout className='w-5 fill-current' />
                Logout
              </>
            )}
          </button>
        ) : (
          <div className='p-6'>
            <Link
              to='/login'
              className={`block w-full rounded-lg bg-midnightExpress py-1.5 text-center font-bold text-white ${
                loading ? "pointer-events-none cursor-wait" : ""
              }`}
            >
              Login
            </Link>
          </div>
        )}
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
                  <span className='text-midnightExpress'>Login</span>
                </>
              )}
              {userDataStatus === "loading" && (
                <>
                  <Spinner
                    className='mobile-menu-icon animate-spin'
                    aria-hidden='true'
                  />
                  <span className='text-midnightExpress'>Loading</span>
                </>
              )}
              {userDataStatus === "success" && (
                <button
                  onClick={logOutUser}
                  className='relative block w-full text-lg font-semibold capitalize tracking-wider text-inherit after:absolute after:-inset-2 after:rounded-r-full after:content-[""] sm:text-xl sm:after:-inset-3 md:tracking-wide'
                >
                  <div className='flex items-end'>
                    <LogoutMobileMenu aria-hidden='true' />
                    <span className='text-midnightExpress'>Logout</span>
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
