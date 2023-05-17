import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, logOutUser } from "@/firebase";
import Logo from "@/components/Shared/Logo";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SearchResult from "@/components/SearchResult";
import Spinner from "@/images/loading/spinner.svg";

import Tv from "@/images/mobile-menu/tv.svg";
import Movie from "@/images/mobile-menu/movie.svg";
import Eye from "@/images/mobile-menu/eye.svg";

const navItems = [
  {
    name: "Movies",
    path: "/nowhere",
    icon: <Movie className='w-5 fill-current' />,
  },
  {
    name: "TV Shows",
    path: "/nowhere",
    icon: <Tv className='w-5 fill-current' />,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <Eye className='w-5 fill-current' />,
  },
];

function Header({ blendOnTop }) {
  const [user, loading] = useAuthState(auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const headerRef = useRef(null);

  const onTopClasses = useMemo(() => {
    return blendOnTop
      ? ["fill-white", "text-white"]
      : ["fill-midnightExpress", "text-midnightExpress", "bg-white"];
  }, [blendOnTop]);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      const headerRightPadding = parseInt(
        window
          .getComputedStyle(headerRef.current)
          .getPropertyValue("padding-right")
      );

      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      headerRef.current.style.paddingRight = `${
        scrollBarWidth + headerRightPadding
      }px`;
    } else {
      document.body.style.overflowY = "";
      document.body.style.paddingRight = "";
      headerRef.current.style.paddingRight = "";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const toggleHeaderStyles = e => {
      const isWindowOnTop = e.currentTarget.scrollY === 0;
      const scrolledClasses = [
        "fill-midnightExpress",
        "text-midnightExpress",
        "bg-white/80",
        "backdrop-blur-[6px]",
      ];

      if (isWindowOnTop) {
        headerRef.current.classList.add(...onTopClasses);
        headerRef.current.classList.remove(...scrolledClasses);
      } else {
        headerRef.current.classList.remove(...onTopClasses);
        headerRef.current.classList.add(...scrolledClasses);
      }
    };

    window.addEventListener("scroll", toggleHeaderStyles);

    return () => {
      window.removeEventListener("scroll", toggleHeaderStyles);
    };
  }, [onTopClasses]);

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState);
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`${
          blendOnTop ? "fixed" : ""
        } inset-x-0 z-10 ${onTopClasses.join(" ")}`}
      >
        <div className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 min-[900px]:h-20 min-[900px]:px-6'>
          <Logo />

          <nav className='ml-10 hidden h-full gap-10 min-[900px]:flex'>
            {navItems.map((item, idx) => (
              <NavLink
                to={item.path}
                key={idx}
                className={({ isActive }) => {
                  const classNames =
                    'relative flex items-center text-sm text-inherit before:absolute before:-left-3 before:aspect-square before:w-[6px] before:rounded-full before:bg-smashingPumpkins before:content-[""] hover:opacity-80';

                  return isActive
                    ? `${classNames} before:block`
                    : `${classNames} before:hidden hover:before:block`;
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <SearchButton
            openSearchBar={() => {
              setSearchBarOpen(true);
            }}
          />

          {user || loading ? (
            <button
              onClick={logOutUser}
              className='hidden cursor-pointer rounded-full p-2 text-left text-sm hover:bg-nightRendezvous1 min-[900px]:block'
            >
              {user && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  aria-hidden='true'
                  className='w-5 fill-current'
                >
                  <path d='M3.651 16.989h17.326a1 1 0 1 0 0-2H3.713l3.617-3.617a.999.999 0 1 0-1.414-1.414L.009 16.02l5.907 6.063a.999.999 0 1 0 1.414-1.414zM29.989 0h-17a2 2 0 0 0-2 2v9h2.013V3.22c0-.668.542-1.21 1.21-1.21h14.523c.669 0 1.21.542 1.21 1.21l.032 25.572a1.21 1.21 0 0 1-1.21 1.21H14.214a1.21 1.21 0 0 1-1.21-1.21v-7.824l-2.013.003v9.03a2 2 0 0 0 2 2H29.99a2 2 0 0 0 2.001-2v-28a2 2 0 0 0-2-2z' />
                </svg>
              )}

              {loading && (
                <Spinner className='mx-auto w-5 animate-spin fill-current' />
              )}
            </button>
          ) : (
            <Link
              to='/login'
              className={`hidden w-full min-w-[75px] rounded-lg bg-midnightExpress px-4 py-1.5 text-center text-sm font-bold text-white min-[900px]:block ${
                loading ? "pointer-events-none cursor-wait" : ""
              }`}
            >
              Login
            </Link>
          )}

          <HamburgerButton handleClick={toggleMobileMenu} />
        </div>
      </header>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        navItems={navItems}
      />

      <div
        className={`fixed inset-x-0 top-0 z-20 bg-white/70 shadow-multi backdrop-blur-[6px] ${
          searchBarOpen ? "" : "-translate-y-full"
        }`}
      >
        <SearchBar
          isOpen={searchBarOpen}
          closeSearchBar={() => {
            setSearchBarOpen(false);
          }}
        />
        <SearchResult />
      </div>
    </>
  );
}

export default Header;
