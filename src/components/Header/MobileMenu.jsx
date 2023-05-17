import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOutUser } from "@/firebase";
import Logo from "@/components/Shared/Logo";

import Spinner from "@/images/loading/spinner.svg";

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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  className='w-5 fill-current'
                >
                  <path d='M3.651 16.989h17.326a1 1 0 1 0 0-2H3.713l3.617-3.617a.999.999 0 1 0-1.414-1.414L.009 16.02l5.907 6.063a.999.999 0 1 0 1.414-1.414zM29.989 0h-17a2 2 0 0 0-2 2v9h2.013V3.22c0-.668.542-1.21 1.21-1.21h14.523c.669 0 1.21.542 1.21 1.21l.032 25.572a1.21 1.21 0 0 1-1.21 1.21H14.214a1.21 1.21 0 0 1-1.21-1.21v-7.824l-2.013.003v9.03a2 2 0 0 0 2 2H29.99a2 2 0 0 0 2.001-2v-28a2 2 0 0 0-2-2z' />
                </svg>
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
