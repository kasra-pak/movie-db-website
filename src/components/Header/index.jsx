import React, { useEffect, useMemo, useRef, useState } from "react";

import Logo from "@/components/Shared/Logo";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SearchResult from "@/components/SearchResult";

function Header({ blendOnTop }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const headerRef = useRef(null);

  const onTopClasses = useMemo(() => {
    return blendOnTop
      ? ["fill-white", "text-white"]
      : ["fill-midnightExpress", "bg-white"];
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
        } inset-x-0 z-10 flex items-center justify-between gap-3 p-4 ${onTopClasses.join(
          " "
        )}`}
      >
        <Logo />

        <SearchButton
          openSearchBar={() => {
            setSearchBarOpen(true);
          }}
        />

        <HamburgerButton handleClick={toggleMobileMenu} />
      </header>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
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
