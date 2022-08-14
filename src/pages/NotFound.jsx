import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className='flex flex-col justify-center items-center gap-y-5 h-screen w-11/12 mx-auto md:gap-y-8'>
      <h1 className='text-orange-100 text-center text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:leading-snug lg:tracking-wider'>
        Whooops... This page is not available!
      </h1>
      <button
        onClick={() => navigate(-1)}
        className='bg-primary text-gray-100 text-md font-semibold tracking-wider uppercase px-4 py-2 rounded-md shadow-sm hover:bg-orange-500 hover:shadow-md sm:text-lg md:text-xl'
      >
        go back
      </button>
    </main>
  );
}

export default NotFound;
