import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
        <Main />
      </Router>
  )
}

function Main() {
  const location = useLocation(); // "useLocation()" is a hook provided by react-router-dom that allows for accessing the current location or route of an app
  return ( // useLocation hook must be used only inside a component that is rendered by the Router, that is why "Main" function is created and rendered inside <Router> which is inside app function so that it will be same as declaring "const location = useLocation()" inside a "Router" context
    <>
        {location.pathname !== "/login" && location.pathname !== "/signup" && <Navbar />} {/*checks whether the current file/location/route has has a url "signup" or "login" if not it will render navbar, and it is same for the footer*/}
        <Routes>
          <Route path='/' element={<LandingPage />} /> {/*since landingPage is already imported at the top we just need to use "/", w/c is the 'default route', and <LandingPage /> is rendering as the first things to be seen when the entire website or project is run */}
          <Route path='/dashboard' element={<Dashboard />} /> {/*in path props "URLs" are always written in small letters regardles of whether the actual file name has capital letter in it or not. and again <Dashboard /> here is being rendered*/}
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} /> {/*here <Profile/> is also being rendered since it was exported as "Profile" inside Profile.jsx file, if there was no separate "Profile.jsx" file it is possible to directly insert text inside element={<h1>Welcome</h1>} */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {location.pathname !== "/login" && location.pathname !== "/signup" && <Footer />}

    </>
  )
}

export default App
