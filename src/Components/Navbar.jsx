import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="logo">
        <img src="Logo.jpg" alt="logo" />

      </div>
      <div className="list">
        <ul>
          <li>Home</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>

        </ul>

      </div>
      <div className="butn">
        <button>Login</button>
      </div>
    </nav>
      
    </>
  )
}

export default Navbar;
