import React from "react";

export default function Logo() {
  return (
    <>
      <span className='flex items-baseline gap-x-px text-sm font-bold uppercase '>
        movie
        <svg
          className='aspect-square w-1 fill-smashingPumpkins'
          viewBox='0 0 32 32'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='16' cy='16' r='16' />
        </svg>
      </span>
    </>
  );
}
