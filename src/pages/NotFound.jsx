import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

function NotFound() {
  return (
    <>
      <Header />
      <main className='mx-auto flex h-[85vh] flex-col items-center justify-center gap-y-5 p-4 sm:p-6 md:gap-y-6'>
        <h2 className='font-barlow text-2xl font-bold text-midnightExpress min-[600px]:text-[1.625rem] min-[900px]:text-3xl xl:text-[2rem]'>
          Page Not Found!
        </h2>

        <p className='font-barlow text-5xl font-black capitalize text-smashingPumpkins min-[900px]:text-7xl'>
          404 error
        </p>

        <p className='max-w-xl text-center text-nightRendezvous'>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Perhaps
          you&apos;ve mistyped the URL? Be sure to check your spelling.
        </p>

        <Link
          to='/'
          className='rounded-md bg-midnightExpress px-4 py-3 text-sm font-bold text-white hover:bg-nightfall'
        >
          Go To Home
        </Link>
      </main>
    </>
  );
}

export default NotFound;
