/* eslint-disable */ 

import React from 'react';
import { Helmet } from "react-helmet";
import "./pagesCSS/contacts.css";

import committeePicture from "./pagesResources/images/committeePicture.jpg";

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"></link>
        <title>FIRE+ | Contact Us</title>
      </Helmet>

      <div className="ContactContent">
        <div className="contact-container">

          {/* Left - Contact Form */}
          <div className="contact-info"> 
            <div className="social-links">
              <a href="https://www.facebook.com/firengineering/" target="_blank" rel="noreferrer" >
              <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/firengineering_/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/firengineering/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://discord.com/channels/799421462598647851/799422177912684596" target="_blank" rel="noreferrer">
              <i className="fab fa-discord"></i>
              </a>
              <a href="https://www.tiktok.com/@firengineering?lang=en" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
              </a>
            </div>
            </div>

          {/* Right - Contact Info */}
          <div className="comitteePicture">
            <img src={committeePicture} alt="Committee" height={300} width={400} />
          </div>
        </div>

        {/*Overlayed contact form*/}
        <div  className="contact-form">
            <h2>Get in touch</h2>
            <hr></hr>
            <br></br>
            <form>
              <div className="form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Comment or Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Contacts;
