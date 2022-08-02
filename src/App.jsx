import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Watchlist from "./pages/Watchlist";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/detail/:media/:id' element={<Detail />} />
      <Route path='/watchlist/' element={<Watchlist />} />
    </Routes>
  );
}
