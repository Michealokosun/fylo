import React from "react";
import "./faq.css";
import faqImg from "../../images/illustration-stay-productive.png";
import arrow from "../../images/icon-arrow.svg"

export const Faq = ({ title }) => {
  return (
    <section>
      <div className="container">
        <div className="faq">
          <div className="faq-img">
            <img src={faqImg} alt="faq-banner" />
          </div>
          <div className="faq-content">
            <h1>{title}</h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
              <br /><br />

              Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.
            </p>
            <div className="link">
            <a href="#faq">see how Fylo works</a>
            <div className="arrow-icon">
            <img src={arrow} alt="linkarrow" />

            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
