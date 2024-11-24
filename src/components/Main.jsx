import React from 'react'
import { Routes, Route } from "react-router-dom";
import Red from './Red'
import Green from './Green'
import Blue from './Blue'
import Home from './Home'

export default function Main() {
  return (
    <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/blue" element={<Blue />} />
        </Routes>
      </div>
  )
}
