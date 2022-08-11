import React from "react";
import Logo from "./Logo";

import FacebookLogo from "../../images/login/facebook.svg";
import TwitterLogo from "../../images/login/twitter.svg";
import GoogleLogo from "../../images/login/google.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-slate-100 flex flex-col justify-center items-center gap-4 p-10'>
      <div className='fill-slate-100 flex items-center gap-3'>
        <Logo />
      </div>
      <div className='fill-slate-100 flex gap-4'>
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
      <ul className='grid justify-items-center xs:grid-cols-3 capitalize my-3'>
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
