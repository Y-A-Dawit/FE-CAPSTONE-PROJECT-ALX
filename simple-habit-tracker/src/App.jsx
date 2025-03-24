import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar /> {/* when writing navbar like this it is like rendering a react component inside another react component */}
      <h1>Hello There</h1>
      <h3>testing if it works correctly</h3>
      <Footer />
    </>
  )
}

export default App
