import React, { useState } from "react";

import Logo from "../Shared/Logo";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";
import MobileMenu from "../Navbar/MobileMenu";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen(prevState => !prevState);
  }

  return (
    <header className='flex items-center justify-between gap-3 p-2'>
      <Logo />
      <SearchButton />
      <HamburgerButton handleClick={toggleMobileMenu} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
    </header>
  );
}

export default Header;
