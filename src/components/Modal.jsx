import React, { useEffect, useState } from "react";

export default function Modal({ show, children }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (show) {
      setIsOpen(true);
    }
  }, [show]);

  const dismiss = () => setIsOpen(prevState => !prevState);

  return isOpen && show ? (
    <div
      onClick={dismiss}
      className='scroller fixed inset-0 top-[47px] z-30 flex items-start justify-center overflow-y-scroll bg-[rgba(0,0,0,.6)] px-4 sm:top-[59px]'
    >
      <div className='mt-4 h-[min(80%,_fit-content)] min-h-[7rem] w-full max-w-md rounded-md bg-slate-600 p-6 md:mt-20'>
        {children}
      </div>
    </div>
  ) : null;
}
