import { Link } from "react-router-dom";
import './landingpage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons"
import React from 'react';

const LandingPage = () => {
  return (
    <>
      <h1>Stay on Track with SimpleHabitTracker - Your Smart Habit Companion!</h1>
      <p>Track your habits effortlessly and improve your daily routine. <br /> Our intuitive interface and powerful features make it easy to stay on top of your goals.</p>
      <Link to='/signup' className="f-button" >Sign Up</Link>
      <p><em>Don't wait-<strong>Sign up today!</strong></em></p>
      <p>Already have an account? <Link to='/login' className="s-button">Login here!</Link> </p>

      <div>
        <div> {/*first*/}
          <div className="icon-container">
            <FontAwesomeIcon icon={faCheck} size="2x" style={{color: "#2A858F"}} />
          </div>

          <div>
            <h2>Easy Tracking</h2>
          </div>

          <div>
            <p>Quickly log your habits and monitory your progress with our user-freindly interface.</p>
          </div>
        </div>

        <div> {/*second*/}
          <div className="icon-container">
            <FontAwesomeIcon icon={faChartSimple} size="2x" style={{color: "#2A858F"}} />
          </div>

          <div>
            <h2>Detailed Analytics</h2>
          </div>

          <div>
            <p>Access comprehensive analytics to understand your habit and make informed decisions.</p>
          </div>
        </div>

        <div> {/*third*/}
          <div className="icon-container">
            <FontAwesomeIcon icon={faBell} size="2x" style={{color: "#2A858F"}} />
          </div>

          <div>
            <h2>Timely Reminders</h2>
          </div>

          <div>
            <p>Set reminders to keep you on track and never miss a habit again.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage