import React from "react";
import "./footer.css"
import logo from "../../images/Logo.svg";
import location from "../../images/icon-location.svg";
import phone from "../../images/icon-phone.svg";
import email from "../../images/icon-email.svg";
// import facebook from "../../images/"
// import twitter from "../../images/icon-phone.svg"
// import insta from "../../images/icon-phone.svg"

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col_1">
            <img src={logo} alt="" />
          </div>
          <div className="col_2">
            <div className="col_item_1">
              <div className="icon_img">
                <img src={location} alt="location" />
              </div>
              <div className="icon-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="col_item_2">
              <div className="phone">
                <div className="phone_img">
                  <img src={phone} alt="" />
                </div>
                <div className="phone__text">
                  <p>+1-543-123-4567</p>
                </div>
              </div>
              <div className="email">
                <div className="email_img">
                  <img src={email} alt="" />
                </div>
                <div className="email__text">
                  <p>example@flyo.com</p>
                </div>
              </div>
            </div>
            <div className="col_item_3">
              <ul>
                <li>About us</li>
                <li>jobs</li>
                <li>press</li>
                <li>blog</li>
              </ul>
            </div>
            <div className="col_item_4">
            <ul>
                <li>contact us</li>
                <li>terms</li>
                <li>privacy</li>
              </ul>
            </div>
            <div className="col_item_5"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
