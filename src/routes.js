import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home/Home'
import Features from './pages/features/Features'
import Pricing from './pages/pricing/Pricing'
import Stories from './pages/stories/Stories'

import React from 'react'


function routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/features" element={<Features/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/stories" element={<Stories/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default routes