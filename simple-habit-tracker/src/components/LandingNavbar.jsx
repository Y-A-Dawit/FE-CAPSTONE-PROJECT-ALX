import React from 'react';
import { Link } from "react-router-dom";
import faviconLogo from '../assets/faviconLogo.png'
import {faSlash} from '@fortawesome/free-solid-svg-icons';
import './LandingNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingNavbar = () => {
  return (
    <nav style={styles.navbar}> {/*here "styles" is a javascript object that contains multiple style properties, useful if wanna look at this project in the future*/}
        <div style={styles.logoContainer}>
            <img src={faviconLogo} alt="website-logo" style={styles.faviconLogo} />
            <h1 style={styles.websiteName}>Simple<span style={{color: ' #2A858F'}}>Habit</span>Tracker</h1>
        </div>
        <div style={{display:'flex', gap: '15px'}}>
            <Link to='/signup' className="f-button" style={{marginBottom: "7px", marginTop: "0px", padding: "12px 35px"}}>Sign Up</Link>
            <FontAwesomeIcon icon={faSlash} style={{ transform: "scaleX(-1)", marginBottom: '7px', marginTop: '0px', padding: '12px 2px', color: '#2A858F'}}/>
            <Link to='/login' className="ss-button" style={{marginBottom: "7px", marginTop: "0px", padding: "12px 35px"}}>Login</Link>
        </div>
    </nav>
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

export default LandingNavbar
