import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

    /* this code snippet/piece of code is for handling empty form submission, */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    const handleLoginSubmission = (e) => {
      e.preventDefault();
      const newErrors = {};


      if (!email) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email";
      }
  
      if (!password) {
        newErrors.password = "Password is required";
      } else if (!passwordRegex.test(password)) {
        newErrors.password = "Password must be at least 8 characters long, with 1 uppercase, 1 number, and 1 special character.";
      }
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setErrors({}); // this one will help clear the error if validation passes

      setTimeout(() => {
        navigate('/dashboard');
      }, 450)
    };

  return (
      <>
        <form onSubmit={handleLoginSubmission}>
          <div className="login-form">
            <div className="login-html">
                <div className="group">
                  <h2 style={{textAlign: 'center'}}>Login to Simple<span style={{color: 'orange'}}>Habit</span>Tracker</h2>
                </div>
                <div>
                  <h6 style={{color: 'rgb(97, 95, 95)'}}>
                    Welcome back! Please login to continue
                  </h6>
                </div>
                <div className="group stack">
                  <label htmlFor="email" className="label" style={{ color: 'black' }}>Email</label>
                  <input id="email" placeholder="Enter Email" type="email" className="input" onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                </div>
                <div className="group stack">
                  <label htmlFor="password" className="label" style={{ color: 'black' }}>Password</label>
                  <input id="password" type="password" placeholder="Enter Password" className="input" data-type="password" onChange={(e) => setPassword(e.target.value)} />
                  {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
                </div>
                <div className="checkbox" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <input id="keep-signed-in" type="checkbox" className="check" defaultChecked />
                  <label htmlFor="keep-signed-in" style={{ color: 'black'}}>
                    <span className="icon"></span> Keep me signed in
                  </label>
                </div>
                <div className="group stack">
                  <button onClick={handleLoginSubmission} className='button' style={{backgroundColor: '#2A8858F'}}>
                    Login
                  </button>
                </div>
                <div className="hr" style={{ backgroundColor: '#2A858F' }}></div>
                <div>
                  <p style={{fontSize: '14px', fontWeight: 'bold'}}>Don't have an account? <Link to='/signup' className="toSU" >Sign up here!</Link> </p>
                </div>
                <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
            </div>
          </div>
        </form>
      </>
  )
}

export default Login