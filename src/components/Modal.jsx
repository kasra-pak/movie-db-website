import React, { useState } from "react";

export default function Modal({ show, children }) {
  // const [isOpen, setIsOpen] = useState("false");

  ////
  return show ? (
    <div className='fixed inset-0 top-[47px] bg-[rgba(0,0,0,.6)] flex justify-center items-start px-4 z-30 scroller overflow-y-scroll sm:top-[59px]'>
      <div className='bg-slate-600 w-full max-w-md h-[min(80%,_fit-content)] min-h-[7rem] mt-4 p-6 rounded-md md:mt-20'>
        {children}
      </div>
    </div>
  ) : null;
}

// shadow-[0_0_0_max(100vw,_100vh)_rgba(0,0,0,0.75)]
