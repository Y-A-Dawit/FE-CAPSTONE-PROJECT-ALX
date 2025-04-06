import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Simple Habit Tracker</h1>
      </header>

      <div className="about-content">

        <div className="about-section">
          <h2>About the Developer</h2>
          <p>
            Hi, I'm <strong>Yohannes Dawit</strong>, a front-end web developer passionate about building 
            clean, interactive, and user-friendly web applications. I created this habit tracker to help 
            users stay consistent and motivated in achieving their goals.
          </p>
        </div>

        <div className="about-section">
          <h2>About This Project</h2>
          <p>
            Simple Habit Tracker is designed to help users track their daily habits with ease.  
            It allows users to add habits, mark them as complete, track their streaks, and remove habits when needed.
          </p>
          <p>
            Key Features:
          </p>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} style={{ color: '#2A858F', fontSize: '24px' ,marginRight: '10px'}} />
              Add & remove habits</li>
            <li><FontAwesomeIcon icon={faCheck} style={{ color: '#2A858F', fontSize: '24px' ,marginRight: '10px'}} />
              Streak counter for motivation</li>
            <li><FontAwesomeIcon icon={faCheck} style={{ color: '#2A858F', fontSize: '24px' ,marginRight: '10px'}} />
              Search bar to find habits quickly</li>
            <li><FontAwesomeIcon icon={faCheck} style={{ color: '#2A858F', fontSize: '24px' ,marginRight: '10px'}} />
              Responsive & user-friendly interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
