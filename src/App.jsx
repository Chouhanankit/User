import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import UserPage from './pages/UserPage'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:id' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App