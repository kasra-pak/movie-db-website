import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { useCurrentUserWatchlist } from "@/hooks/ListHooks";
import { auth } from "@/firebase";
import Header from "@/components/Header";
import Tabs from "@/components/Shared/Tabs";

const allTabs = ["watched", "not watched"];

function Watchlist() {
  const [user] = useAuthState(auth);
  const [watched, unwatched] = useCurrentUserWatchlist();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(allTabs[0]);

  useEffect(() => {
    // if (!user) navigate("/login", { replace: false });
  }, [user, navigate]);

  useEffect(() => {}, [activeTab]);
  console.log(watched, unwatched);
  return !user ? (
    <h1>
      we can place a timer and a message to tell the users that they need an
      account to access their watchlist
    </h1>
  ) : (
    <>
      <Header />
      <main className='my-8 px-4 sm:px-6'>
        <h1 className='mb-6 font-barlow text-[1.5rem] font-bold text-midnightExpress'>
          Watchlist
        </h1>

        <Tabs names={allTabs} active={activeTab} setActive={setActiveTab} />

        <div className='mt-6 space-y-4'>
          {activeTab === "watched"
            ? watched.map(item => (
                <div
                  key={item.id}
                  className='flex items-start gap-5 rounded-lg border border-lostAtSee/[0.24] p-5'
                >
                  <div className='overflow-hidden rounded-lg'>
                    <img src={item.poster} alt={item.title} className='w-20' />
                  </div>

                  <p>
                    <span className='font-semibold text-midnightExpress'>
                      {item.title}
                    </span>
                    <br />
                    <span className='text-sm text-nightRendezvous'>
                      {item.media}
                    </span>
                  </p>
                </div>
              ))
            : unwatched.map(item => (
                <div
                  key={item.id}
                  className='flex items-start gap-5 rounded-lg border border-lostAtSee/[0.24] p-5'
                >
                  <div className='overflow-hidden rounded-lg'>
                    <img src={item.poster} alt={item.title} className='w-20' />
                  </div>

                  <p>
                    <span className='font-semibold text-midnightExpress'>
                      {item.title}
                    </span>
                    <br />
                    <span className='text-sm text-nightRendezvous'>
                      {item.media}
                    </span>
                  </p>
                </div>
              ))}
        </div>
      </main>
    </>
  );
}

export default Watchlist;
