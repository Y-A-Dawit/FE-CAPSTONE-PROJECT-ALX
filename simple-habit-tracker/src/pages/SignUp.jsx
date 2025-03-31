import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
      const navigate = useNavigate();

      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [repeatPassword, setRepeatPassword] = useState("")
      const [error, setError] = useState("");
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignUpSubmission = (e) => {
    e.preventDefault();

    if (!email || !password || !username || !repeatPassword) {
      setError('Please fill in all the fields');
      return;
    }


    if (!emailRegex.test(email)) {
      setError('Please enter a valid email!');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long, with 1 uppercase, 1 number, and 1 special character.");
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match!")
      return;
    }

    setError("");

    setTimeout (() => {
      navigate('/dashboard');
    }, 450)
  }

  return (
        <>
        <form onSubmit={handleSignUpSubmission}>
          <div className="signUp-form">
            <div className="signUp-html">
              <div className="group">
                <h2 style={{textAlign: "center"}}>
                  Sign up to Simple<span style={{color: 'orange'}}>Habit</span>Tracker
                </h2>
              </div>
              <div>
                <h6 style={{color: 'rgb(97, 95, 95)'}}>
                  Join us today! Create an account and start your journey!
                </h6>
              </div>
              <div className="group">
                <label htmlFor="signup-username" className="label" style={{ color: 'black' }}>Username</label>
                <input id="signup-username" type="text" className="input" placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="group">
                <label htmlFor="signup-password" className="label" style={{ color: 'black' }}>Password</label>
                <input id="signup-password" type="password" className="input" data-type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="group">
                <label htmlFor="repeat-password" className="label" style={{ color: 'black' }}>Repeat Password</label>
                <input id="repeat-password" type="password" className="input" data-type="password" placeholder='Repeat password' onChange={(e) => setRepeatPassword(e.target.value)} />
              </div>
              <div className="group">
                <label htmlFor="email" className="label" style={{ color: 'black' }}>Email Address</label>
                <input id="email" type="text" className="input" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="group">
              <button onClick={handleSignUpSubmission} className='button' style={{backgroundColor: '#2A8858F'}}>
                  Sign Up
                </button>
              </div>
              <div className="hr" style={{ backgroundColor: '#2A858F' }}></div>
              <div className="foot-lnk">
                <p>
                  <Link to='/login' className='toL'>Already a member?</Link>
                </p>
              </div>
            </div>
          </div>
        {error && <p style={{ color: 'red'}}>{error}</p>}
        </form>
        </>
  );
};

export default SignUp;
