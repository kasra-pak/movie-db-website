import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center gap-2 bg-midnightExpress p-10 text-white'>
      <div>
        <Logo />
      </div>
      <p className='text-xs'>&copy; {currentYear}. All rights reserved</p>
    </footer>
  );
}
