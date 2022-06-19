import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./containers/Home"
import Login from "./containers/Login"
import Detail from "./containers/Detail"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:media/:id" element={<Detail />} />
    </Routes>
  )
}