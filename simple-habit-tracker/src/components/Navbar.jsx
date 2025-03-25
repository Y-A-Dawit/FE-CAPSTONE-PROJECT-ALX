import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/search'>Search</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/about'>About</Link>
    </>
  )
}

export default Navbar
