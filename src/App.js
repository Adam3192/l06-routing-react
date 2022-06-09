import React from 'react'
import AboutUs from './AboutUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
