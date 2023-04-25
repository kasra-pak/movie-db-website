import React from "react";

const HamburgerButton = () => {
  return (
    <button className='p-1'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        viewBox='0 0 32 32'
        className='aspect-square w-4 fill-midnightExpress'
      >
        <path d='M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z' />
      </svg>
    </button>
  );
};

export default HamburgerButton;
