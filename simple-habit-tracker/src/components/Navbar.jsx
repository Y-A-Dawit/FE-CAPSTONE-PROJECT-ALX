import { Link } from "react-router-dom";
import faviconLogo from '../assets/faviconLogo.png';
import './Navbar.css'
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav style={styles.navbar}>
          <div style={styles.logoContainer}>
            <img src={faviconLogo} alt="website-logo" style={styles.faviconLogo} />
            <h1 style={styles.websiteName}>Simple<span style={{color: ' #2A858F'}}>Habit</span>Tracker</h1>
          </div>
          <div className="Nav">
            <Link to='/dashboard' className="NavLink">Dashboard</Link> {/*here "Link" is like anchor tag with href, but without connecting to a network server will it connect to other page for rendering*/}
            <Link to='/profile' className="NavLink">Profile</Link>
            <Link to='/about' className="NavLink">About</Link>
          </div>
      </nav>
    </>
  )
}


const styles = {
  navbar: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0px 20px',
      border: "none",
      borderBottom: "3px solid white",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      backgroundColor: "white",
  },
  logoContainer: {
      display: 'flex',
      alignItems: 'center',
  },
  faviconLogo: {
      height:"40px",
      marginRight: "10px",
  },
  websiteName: {
      fontSize: "1.5rem",
      fontWeight: 'bold',
      color: '#333',
  },
}

export default Navbar
