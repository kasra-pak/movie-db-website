import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Detail from "@/pages/Detail";
import Watchlist from "@/pages/Watchlist";
import AllResults from "@/pages/AllResult";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/detail/:media/:id' element={<Detail />} />
      <Route path='/watchlist' element={<Watchlist />} />
      <Route path='/all/:resultsFor/:media' element={<AllResults />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
