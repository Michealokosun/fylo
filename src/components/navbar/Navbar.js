import React from 'react'
import Logo from "../../images/Logo.svg"
import "./navbar.css"

function Navbar() {
  return (
    <nav>
       <div className='container '>
      <div className="navbar">
      <div className="logo">
         <img src={Logo}  alt="logo-img"/>
        </div>

        <div className="menu-item">
         <ul>
            <li><a href="/">Features</a></li>
            <li><a href="/">Team</a></li>
            <li><a href="/">Sign In</a></li>
          </ul>
        </div>

      </div>
       
    </div>
    </nav>
   
  )
}

export default Navbar