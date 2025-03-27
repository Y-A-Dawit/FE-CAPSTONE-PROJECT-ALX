import { Link } from "react-router-dom";
import './landingpage.css';
import LandingNavbar from '../components/LandingNavbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons"
import React from 'react';

const LandingPage = () => {
  return (
    <>
      <LandingNavbar />
      <div className="headlineSection">

        
        <h1>
          Stay on Track with SimpleHabitTracker - <span style={{color: '#2A858F'}}>Your Smart Habit Companion!</span>
          </h1>

        <p style={{textAlign: "center"}}>Track your habits effortlessly and improve your daily routine. Our intuitive interface <br /> and powerful features make it easy to stay on top of your goals.</p>
        <p><em>Don't wait-<strong>Sign up today!</strong></em></p>
        <Link to='/signup' className="f-button" style={{marginBottom: "7px", marginTop: "0px", padding: "12px 35px"}}>Sign Up</Link>
      </div>
      <p style={{textAlign: "center", marginTop: "0px"}}>Already have an account? <Link to='/login' className="s-button">Login here!</Link> </p>
      
      <div className="featureSection">
        <div className="featureSectionNested"> {/*first*/}
          <div className="icon-container">
            <FontAwesomeIcon icon={faCheck} size="2x" style={{color: "#2A858F"}} />
          </div>

          <div>
            <h2 style={{textAlign: "center"}}><strong>Easy Tracking</strong></h2>
          </div>

          <div>
            <p style={{textAlign: "center"}} >Quickly log your habits and monitor <br /> your progress with our user-freindly <br /> interface.</p>
          </div>
        </div>

        <div className="featureSectionNested"> {/*second*/}
          <div className="icon-container">
            <FontAwesomeIcon icon={faChartSimple} size="2x" style={{color: "#2A858F"}} />
          </div>

          <div>
            <h2 style={{textAlign: "center"}}>Detailed Analytics</h2>
          </div>

          <div>
            <p style={{textAlign: "center"}}>Access comprehensive analytics to <br /> understand your habits and make <br /> informed decisions.</p>
          </div>
        </div>

        <div className="featureSectionNested"> {/*third*/}
          <div className="icon-container">
            <FontAwesomeIcon icon={faBell} size="2x" style={{color: "#2A858F"}} />
          </div>

          <div>
            <h2 style={{textAlign: "center"}}>Timely Reminders</h2>
          </div>

          <div>
            <p style={{textAlign: "center"}}>Set reminders to keep you on track <br /> and never miss a habit again.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage