import React from 'react'
import './footer.css'
import '../pages/LandingPage.css'

const Footer = () => {
  return (
    <div
      className="MainFooter"
      style={{
      display: 'flex',
      flexDirection: "row",
      alignItems: "self-end",
      justifyContent: "space-around",
      height: '10vh',
      marginTop: "36px",
      marginBottom: "0px",
      border: "none",
      borderTop: "3px solid white",
      boxShadow: "20px 14px 100px rgba(0,0,0,0.1)",
      backgroundColor: "white",}}>
      <p className="copyright" style={{padding: "25px", bottom: '0'}}>&copy; 2025 SimpleHabitTracker. All rights reserved.</p>

      <div className="footer" style={{display:'flex', gap: "11px", padding: "25px", marginTop: '36px'}}>
        <p><a href="#Privacy">Privacy</a><span> |</span></p>
        <p><a href="#TermsofService">Terms of Service</a><span> |</span></p>
        <p><a href="Contact">Contact</a></p>
      </div>
    </div>
  )
}

export default Footer
