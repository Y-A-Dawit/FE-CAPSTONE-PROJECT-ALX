import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <>
      <Link to='/dashboard'>Dashboard</Link> {/*here "Link" is like anchor tag with href, but without connecting to a network server will it connect to other page for rendering*/}
      <Link to='/search'>Search</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/about'>About</Link>
    </>
  )
}

export default Navbar
