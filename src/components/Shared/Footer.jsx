import React from "react";
import Logo from "./Logo";

import FacebookLogo from "../../images/login/facebook.svg";
import TwitterLogo from "../../images/login/twitter.svg";
import GoogleLogo from "../../images/login/google.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='flex flex-col items-center justify-center gap-4 bg-gray-900 p-10 text-slate-100'>
      <div className='flex items-center gap-3 fill-slate-100'>
        <Logo />
      </div>
      <div className='flex gap-4 fill-slate-100'>
        <a href='#' className='w-10 sm:w-12'>
          <FacebookLogo />
        </a>
        <a href='#' className='w-10 sm:w-12'>
          <TwitterLogo />
        </a>
        <a href='#' className='w-10 sm:w-12'>
          <GoogleLogo />
        </a>
      </div>
      <ul className='my-3 grid justify-items-center capitalize xs:grid-cols-3'>
        <li>
          <a className='hover:underline' href='#'>
            get the MDB App
          </a>
        </li>
        <li>
          <a className='hover:underline' href='#'>
            about MDB
          </a>
        </li>
        <li>
          <a className='hover:underline' href='#'>
            contact us
          </a>
        </li>
      </ul>
      <p>&copy; by tmdb.com - {currentYear}</p>
    </footer>
  );
}
