import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';

const App = () => {
  return (
      <Router>
        <Main />
      </Router>
  )
}

function Main() {
  const location = useLocation(); 
  // useLocation hook must be used only inside a component that is rendered by the Router, that is why "Main" function is created and rendered inside <Router> which is inside app function so that it will be same as declaring "const location = useLocation()" inside a "Router" context
  
  useEffect(() => {
    const pageTitles = {
      '/': 'Simple Habit Tracker',
      '/dashboard': 'Dashboard - Simple Habit Tracker',
      '/profile': 'Profile - Simple Habit Tracker',
      '/about': 'About - Simple Habit Tracker',
      '/login': 'Login - Simple Habit Tracker',
      '/signup': 'Sign Up - Simple Habit Tracker'
    }
  
  document.title = pageTitles[location.pathname] || 'Simple Habit Tracker';
}, [location.pathname]);

  return ( 
    <>
        {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/" && location.pathname !== '/dashboard' && <Navbar />} {/*checks whether the current file/location/route has has a url "signup" or "login" if not it will render navbar, and it is same for the footer*/}
        <Routes>
          <Route path='/' element={<LandingPage />} /> {/*since landingPage is already imported at the top we just need to use "/", w/c is the 'default route', and <LandingPage /> is rendering as the first things to be seen when the entire website or project is run */}
          <Route path='/dashboard' element={<Dashboard />} /> {/*in path props "URLs" are always written in small letters regardles of whether the actual file name has capital letter in it or not. and again <Dashboard /> here is being rendered*/}
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== '/dashboard' && <Footer />}
    </>
  )
}

export default App
