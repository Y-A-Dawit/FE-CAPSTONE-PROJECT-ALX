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
      const [errors, setErrors] = useState({});
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignUpSubmission = (e) => {
    e.preventDefault();
    const newErrors = {};


    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email!";

    if (!password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(password)) {
      newErrors.password = "Password must be at least 8 characters long, with 1 uppercase, 1 number, and 1 special character.";
    }

    if(!repeatPassword) newErrors.repeatPassword = "Please repeat your password";
    else if (password !== repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match!";
    }

    setErrors(newErrors);

    if(Object.keys(newErrors).length > 0) return;

    setErrors({});
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
                {errors.username && <p style={{ color: 'red', fontSize: '12px' }}>{errors.username}</p>}
              </div>
              <div className="group">
                <label htmlFor="signup-password" className="label" style={{ color: 'black' }}>Password</label>
                <input id="signup-password" type="password" className="input" data-type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
              </div>
              <div className="group">
                <label htmlFor="repeat-password" className="label" style={{ color: 'black' }}>Repeat Password</label>
                <input id="repeat-password" type="password" className="input" data-type="password" placeholder='Repeat password' onChange={(e) => setRepeatPassword(e.target.value)} />
                {errors.repeatPassword && <p style={{ color: 'red', fontSize: '12px' }}>{errors.repeatPassword}</p>}
              </div>
              <div className="group">
                <label htmlFor="email" className="label" style={{ color: 'black' }}>Email Address</label>
                <input id="email" type="text" className="input" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
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
        </form>
        </>
  );
};

export default SignUp;
