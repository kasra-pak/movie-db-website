import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./containers/Home"
import Login from "./containers/Login"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}