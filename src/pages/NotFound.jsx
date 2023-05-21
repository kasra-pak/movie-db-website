import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className='mx-auto flex h-screen w-11/12 flex-col items-center justify-center gap-y-5 md:gap-y-8'>
      <h1 className='text-center text-2xl font-bold tracking-wide text-orange-100 sm:text-3xl md:text-4xl lg:text-5xl lg:tracking-wider xl:text-6xl xl:leading-snug'>
        Whooops... This page is not available!
      </h1>
      <button
        onClick={() => navigate(-1)}
        className='text-md rounded-md bg-midnightExpress px-4 py-2 font-semibold uppercase tracking-wider text-gray-100 shadow-sm hover:bg-orange-500 hover:shadow-md sm:text-lg md:text-xl'
      >
        go back
      </button>
    </main>
  );
}

export default NotFound;
