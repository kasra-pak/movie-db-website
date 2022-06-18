import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Home from "./containers/Home"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie" element={<Movie />} /> */}
      </Routes>
    </>
  )
}