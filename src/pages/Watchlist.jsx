import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { useCurrentUserWatchlist } from "@/hooks/ListHooks";
import { auth } from "@/firebase";
import LoadingImg from "@/images/loading/loading.svg";
import Header from "@/components/Header";
import Tabs from "@/components/Shared/Tabs";
import WatchlistCard from "../components/WatchlistCard";

const allTabs = ["watched", "not watched"];

function Watchlist() {
  const [user, loading] = useAuthState(auth);
  const [watched, unwatched] = useCurrentUserWatchlist();
  const [activeTab, setActiveTab] = useState(allTabs[0]);
  const location = useLocation();

  const watchedItems = watched.map(item => (
    <WatchlistCard key={item.id} data={item} />
  ));

  const unwatchedItems = unwatched.map(item => (
    <WatchlistCard key={item.id} data={item} />
  ));

  if (loading) {
    return (
      <main className='my-8 flex h-[85vh] items-center justify-center px-4 sm:px-6'>
        <LoadingImg className='w-10 text-midnightExpress' />
      </main>
    );
  }

  if (!user && !loading) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (user) {
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
}

export default Watchlist;
