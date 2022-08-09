import React from 'react'
import "./form.css"

export const Form = () => {
  return (
    <section id='main__form'>
        <div className="container">
            <div className="form">
                <h1>Get early access today</h1>
                <p> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>
  <div className="form-input">
    <form action="">
        <input type="Email" name="email" placeholder='example@gmail.com'/>
        <button type="submit">Get Started For Free</button>
    </form>
  </div>
            </div>
        </div>

    </section>
  )
}
