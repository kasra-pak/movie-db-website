import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../components/Navbar";
import FadingLine from "../components/FadingLine";

function Watchlist() {
  const [user] = useAuthState(auth);
  const [Tab, setActiveTab] = useState("watched");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login", { replace: false });
  }, [user]);

  return !user ? (
    <h1>
      we can place a timer and a message to tell the users that they need an
      account to access their watchlist
    </h1>
  ) : (
    <>
      <Navbar />
      <main className='px-4 sm:px-6'>
        <section>
          <header className='text-slate-100 capitalize pt-5'>
            <div className='flex justify-around'>
              <button className='shrink-0 capitalize border-b-2 border-primary rounded-t-md py-2 px-4'>
                <h2>watched</h2>
              </button>
              <button className='shrink-0 capitalize border-2 border-primary border-b-secondary rounded-t-md py-2 px-4'>
                <h2>not watched</h2>
              </button>
              {/* <div className='self-end bg-gradient-to-r from-orange-600 to-transparent h-0.5 w-full'></div> */}
            </div>
          </header>
          <div className='border-l-2 border-primary p-2'>
            <div className='grid justify-items-center items-center grid-cols-3 gap-4'>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
              <div className='w-20 bg-slate-500 aspect-video'></div>
            </div>
          </div>
          <div className='self-end bg-gradient-to-r from-orange-600 to-transparent h-0.5 w-full'></div>
        </section>
      </main>
    </>
  );
}

export default Watchlist;
