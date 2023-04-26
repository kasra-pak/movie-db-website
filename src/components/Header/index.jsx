import React, { useEffect, useRef, useState } from "react";

import Logo from "../Shared/Logo";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";
import MobileMenu from "../Navbar/MobileMenu";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [mobileMenuOpen]);

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState);
  }

  const headerRef = useRef(null);

  useEffect(() => {
    const toggleHeaderStyles = e => {
      if (e.currentTarget.scrollY > 0) {
        headerRef.current.classList.remove("fill-white", "text-white");
        headerRef.current.classList.add(
          "fill-midnightExpress",
          "bg-white/80",
          "backdrop-blur-[6px]"
        );
      } else {
        headerRef.current.classList.remove(
          "fill-midnightExpress",
          "bg-white/80",
          "backdrop-blur-[6px]"
        );
        headerRef.current.classList.add("fill-white", "text-white");
      }
    };

    window.addEventListener("scroll", toggleHeaderStyles);

    return () => {
      window.removeEventListener("scroll", toggleHeaderStyles);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className='fixed inset-x-0 z-10 flex items-center justify-between gap-3 fill-white p-2 text-white'
    >
      <Logo />
      <SearchButton />
      <HamburgerButton handleClick={toggleMobileMenu} />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </header>
  );
}

export default Header;
