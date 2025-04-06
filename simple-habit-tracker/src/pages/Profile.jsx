import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("fullName");
    const savedEmail = localStorage.getItem("email");
    const savedPhone = localStorage.getItem("phone");

    if (savedName) setFullName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  const handleSave = () => {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>
      <button className="save-btn" onClick={handleSave}>Save Profile</button>
      <button style={{backgroundColor: 'white'}}>
        <Link to="/" className="signout-btn">Sign Out</Link>
      </button>
    </div>
  )
}

export default Profile
