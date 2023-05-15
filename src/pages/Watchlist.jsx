import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { useCurrentUserWatchlist } from "@/hooks/ListHooks";
import { auth } from "@/firebase";
import Header from "@/components/Header";
import Tabs from "@/components/Shared/Tabs";
import WatchlistCard from "../components/WatchlistCard";

const allTabs = ["watched", "not watched"];

function Watchlist() {
  const [user] = useAuthState(auth);
  const [watched, unwatched] = useCurrentUserWatchlist();
  // const [watchlist] = useCurrentUserWatchlistTemp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(allTabs[0]);

  useEffect(() => {
    // if (!user) navigate("/login", { replace: false });
  }, [user, navigate]);

  if (!user) {
    return (
      <h1>
        we can place a timer and a message to tell the users that they need an
        account to access their watchlist
      </h1>
    );
  }

  // console.log(watched, unwatched);

  const watchedItems = watched.map(item => (
    <WatchlistCard key={item.id} data={item} />
  ));

  const unwatchedItems = unwatched.map(item => (
    <WatchlistCard key={item.id} data={item} />
  ));

  return (
    <>
      <Header />
      <main className='my-8 px-4 sm:px-6'>
        <h1 className='mb-6 font-barlow text-[1.5rem] font-bold text-midnightExpress'>
          Watchlist
        </h1>

        <Tabs names={allTabs} active={activeTab} setActive={setActiveTab} />

        <div className='mt-6 space-y-4'>
          {activeTab === "watched" ? watchedItems : unwatchedItems}
        </div>
      </main>
    </>
  );
}

export default Watchlist;
