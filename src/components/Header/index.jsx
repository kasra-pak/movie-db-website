import React from "react";

import Logo from "../Shared/Logo";
import HamburgerButton from "./HamburgerButton";
import SearchButton from "./SearchButton";

function Header() {
  return (
    <header className='flex items-center justify-between gap-3 p-2'>
      <Logo />
      <SearchButton />
      <HamburgerButton />
    </header>
  );
}

export default Header;
