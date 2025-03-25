import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Profile from './pages/Profile';
import About from './pages/About';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} /> {/*since landingPage is already imported at the top we just need to use "/", w/c is the 'default route', and <LandingPage /> is rendering as the first things to be seen when the entire website or project is run */}
          <Route path='/dashboard' element={<Dashboard />} /> {/*in path props "URLs" are always written in small letters regardles of whether the actual file name has capital letter in it or not. and again <Dashboard /> here is being rendered*/}
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} /> {/*here <Profile/> is also being rendered since it was exported as "Profile" inside Profile.jsx file, if there was no separate "Profile.jsx" file it is possible to directly insert text inside element={<h1>Welcome</h1>} */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
