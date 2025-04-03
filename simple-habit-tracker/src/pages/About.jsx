import React from "react";
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
            <li>✔ Add & remove habits</li>
            <li>✔ Streak counter for motivation</li>
            <li>✔ Search bar to find habits quickly</li>
            <li>✔ Responsive & user-friendly interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
