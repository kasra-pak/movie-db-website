import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to='/'
      className='flex items-baseline gap-x-px text-xl font-black uppercase text-inherit'
    >
      movie
      <svg
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        className='aspect-square w-2 fill-smashingPumpkins'
      >
        <circle cx='16' cy='16' r='16' />
      </svg>
    </Link>
  );
}
