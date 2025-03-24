import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
