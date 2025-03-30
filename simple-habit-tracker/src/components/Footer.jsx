import React from 'react'

const Footer = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: "row",
      alignItems: "self-end",
      justifyContent: "space-around",
      height: '13.8vh',
      marginTop: "36px",
      marginBottom: "0px",
      border: "none",
      borderTop: "3px solid white",
      boxShadow: "20px 14px 100px rgba(0,0,0,0.1)",
      backgroundColor: "white",}}>
      <p style={{padding: "25px", bottom: '0'}}>&copy; 2025 SimpleHabitTracker. All rights reserved.</p>

      <div style={{display:'flex', gap: "11px", padding: "25px", marginTop: '36px'}}>
        <p>Privacy |</p> 
        <p>Terms of Service |</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Footer
