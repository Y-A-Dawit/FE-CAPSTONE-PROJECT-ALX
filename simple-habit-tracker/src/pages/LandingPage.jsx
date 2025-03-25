import { Link } from "react-router-dom";
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      Does it work
      <Link to='/signup'>SignUp</Link>
      this should be the first page to appear or it should be the landing page
    </div>
  )
}

export default LandingPage
