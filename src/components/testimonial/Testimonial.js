import React from 'react'
import "./testimonial.css"
import firstessIcon from "../../images/profile-1.jpg"
import secondIcon from "../../images/profile-2.jpg"
import thirdIcon from "../../images/profile-3.jpg"
import quote from "../../images/bg-quotes.png"

export const Testimonial = () => {
    const testimonialObj = [
        {
            id: 1,
            icon : firstessIcon,
            firstName:"Satish Patel",
            job:"Founder & CEO, Huddle",
            testimony:" Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has  become a well-oiled collaboration machine."
        },
        {
            id: 2,
            firstName:"Satish Patel",
            icon: secondIcon,
            job:"Founder & CEO, Huddle",
            testimony:" Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has  become a well-oiled collaboration machine."
        },
        {
            id: 3,
            firstName:"Satish Patel",
            job:"Founder & CEO, Huddle",
            icon: thirdIcon,
            testimony:" Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has  become a well-oiled collaboration machine."
        }
    ]
  return (
    <section className='tess'>
        <div className="container tess__quote">
            <div className="tess__items">
                <img className='quote__img' src={quote} alt="quote" />

                
                    {
                        testimonialObj.map((list)=>{
                            return(
                                <div className="tess__item">
                                <p>{list.testimony}</p>
                                <div className="profile">
                                    <div className="profile__img">
                                        <img src={list.icon} alt="profile" />

                                    </div>
                                    <div className="profile__content">
                                        <h3>{list.firstName}</h3>
                                        <p>{list.job}</p>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
              
                
            </div>
        </div>
    </section>
  )
}
