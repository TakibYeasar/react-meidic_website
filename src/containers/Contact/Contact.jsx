import React from 'react';
import "./Contact.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaArrowRight, FaEnvelope, FaLifeRing, FaMapMarker, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w3l-contact-2">
      <div className="breadcrumb-bg py-5  w3l-inner-page-breadcrumb">
        <div className="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
          <h2 className="title pt-5">Contact Us</h2>
          <ul className="breadcrumbs-custom-path mt-3 text-center">
            <li><a href="index.html">Home</a></li>
            <li className="active"><FaArrowRight className=" mx-2" aria-hidden="true" /> Contact </li>
          </ul>
        </div>
      </div>

      <div className="position-relative">
        <div className="shape overflow-hidden">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="contact-sec py-5" id="contact">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="contact-grids d-grid">
            <div className="contact-left">
              <h6 className="title-subhny mb-1">Get in Touch</h6>
              <h3 className="title-w3l mb-2">Contact Us</h3>
              <p>We have a dedicated support center for all of your support needs. We usually get back to you within
                12-24 hours.</p>
              <div className="cont-details">
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <FaMapMarker className="icon" />
                  </div>
                  <div className="cont-right">
                    <h6>Our Address</h6>
                    <p>SEO Agency, 343 Medick, #2214 cravel street, NY - 62617.</p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center"> 
                    <FaPhone className="icon" />
                  </div>
                  <div className="cont-right">
                    <h6>Call Us</h6>
                    <p><a href="tel:+1(21) 234 4567">+1(21) 234 4567</a></p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <FaEnvelope className="icon" />
                  </div>
                  <div className="cont-right">
                    <h6>Email Us</h6>
                    <p><a href="mailto:example@mail.com" className="mail">example@mail.com</a></p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <FaLifeRing className="icon" />
                  </div>
                  <div className="cont-right">
                    <h6>Customer Support</h6>
                    <p><a href="mailto:info@support.com" className="mail">info@support.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                <div className="input-grids">
                  <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*" className="contact-input"
                    required="" />
                  <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*" className="contact-input"
                    required="" />
                  <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*" className="contact-input"
                    required="" />
                  <input type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL*" className="contact-input"
                    required="" />
                </div>
                <div className="form-input">
                  <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*" required=""></textarea>
                </div>
                <div className="w3l-submit text-lg-right">
                  <button className="btn-style btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact