import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";

function Watchlist() {
  const [user] = useAuthState(auth);
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
        <Tabs />
      </main>
    </>
  );
}

export default Watchlist;
