import React from 'react';
import faviconLogo from '../assets/faviconLogo.png'

const LandingNavbar = () => {
  return (
    <nav style={styles.navbar}> {/*here "styles" is a javascript object that contains multiple style properties, useful if wanna look at this project in the future*/}
        <div style={styles.logoContainer}>
            <img src={faviconLogo} alt="website-logo" style={styles.faviconLogo} />
            <h1 style={styles.websiteName}>SimpleHabitTracker</h1>
        </div>
    </nav>
  )
}

const styles = {
    navbar: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-bbetween',
        padding: '4px 50px',
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
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
