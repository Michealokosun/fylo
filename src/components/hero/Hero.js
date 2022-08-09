import React from 'react'
import "./hero.css"
import banner from "../../images/illustration-intro.png"

export const Hero = () => {
  return (
   
        <header>
            <div className="container hero">
            <div className="col-1">
                <img src={banner} alt="banner" />
            </div>
            <div className="col-2">
                <h1>All your files in one secure location accessible anywhere</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.</p>
        <button>Get Started</button>
            </div>
            </div>
           
        </header>

    
  )
}
