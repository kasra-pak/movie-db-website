import React, { useEffect, useRef, useState } from "react";

import Logo from "@/components/Shared/Logo";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";
import MobileMenu from "@/components/Navbar/MobileMenu";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;

      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflowY = "";
      document.body.style.paddingRight = "";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const toggleHeaderStyles = e => {
      const isWindowOnTop = e.currentTarget.scrolly === 0;
      const onTopClasses = ["fill-white", "text-white"];
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
  }, []);

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState);
  }

  return (
    <>
      <header
        ref={headerRef}
        className='fixed inset-x-0 z-10 flex items-center justify-between gap-3 fill-white p-2 text-white'
      >
        <Logo />
        <SearchButton />
        <HamburgerButton handleClick={toggleMobileMenu} />
      </header>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </>
  );
}

export default Header;
