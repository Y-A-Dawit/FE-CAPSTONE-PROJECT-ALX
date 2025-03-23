import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">LandingPage</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Settings">Settings</Link>
    </nav>
  )
}

export default Navbar
