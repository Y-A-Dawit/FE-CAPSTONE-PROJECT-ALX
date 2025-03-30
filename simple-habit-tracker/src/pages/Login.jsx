import React from 'react'
import './Login.css'

const Login = () => {
  return (
      <>
        <div className="login-form">
          <div className="login-html">
              <div className="group">
                <h1>Login</h1>
              </div>
              <div className="group stack">
                <label htmlFor="email" className="label" style={{ color: 'black' }}>Email</label>
                <input id="email" type="text" className="input" />
              </div>
              <div className="group stack">
                <label htmlFor="password" className="label" style={{ color: 'black' }}>Password</label>
                <input id="password" type="password" className="input" data-type="password" />
              </div>
              <div className="checkbox" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <input id="keep-signed-in" type="checkbox" className="check" defaultChecked />
                <label htmlFor="keep-signed-in" style={{ color: 'black'}}>
                  <span className="icon"></span> Keep me signed in
                </label>
              </div>
              <div className="group stack">
                <input type="submit" className="button" value="Sign In" style={{ backgroundColor: '#2A858F' }} />
              </div>
              <div className="hr" style={{ backgroundColor: '#656565' }}></div>
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
          </div>
        </div>
      </>
  )
}

export default Login
