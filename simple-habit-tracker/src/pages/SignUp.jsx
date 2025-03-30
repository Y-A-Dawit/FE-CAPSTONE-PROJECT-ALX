import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
        <>
          <div className="signUp-form">
            <div className="signUp-html">
            <div className="group">
              <label htmlFor="signup-username" className="label" style={{ color: 'black' }}>Username</label>
              <input id="signup-username" type="text" className="input" />
            </div>
            <div className="group">
              <label htmlFor="signup-password" className="label" style={{ color: 'black' }}>Password</label>
              <input id="signup-password" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
              <label htmlFor="repeat-password" className="label" style={{ color: 'black' }}>Repeat Password</label>
              <input id="repeat-password" type="password" className="input" data-type="password" />
            </div>
            <div className="group">
              <label htmlFor="email" className="label" style={{ color: 'black' }}>Email Address</label>
              <input id="email" type="text" className="input" />
            </div>
            <div className="group">
              <input type="submit" className="button" value="Sign Up" style={{ backgroundColor: '#2A858F' }} />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <label htmlFor="tab-1">Already Member?</label>
            </div>
            </div>
          </div>
        </>
  );
};

export default SignUp;
