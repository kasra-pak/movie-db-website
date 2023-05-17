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

const navItems = [
  { name: "Movies", path: "/nowhere" },
  { name: "TV Shows", path: "/nowhere" },
  { name: "Watchlist", path: "/watchlist" },
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
                  aria-hidden='true'
                  viewBox='0 0 32 32'
                  className='w-5 fill-current'
                >
                  <path d='M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2Z' />
                  <path d='M20.586 20.586 24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6-6 6-1.414-1.414z' />
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
