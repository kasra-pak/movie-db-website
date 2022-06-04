import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/movie" element={<Movie />} /> */}
      </Routes>
    </>
  )
}