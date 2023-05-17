import React from 'react';
import "./Footer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaEnvelopeOpen, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-sec">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <div className="row footer-top">
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list footer-1 pr-lg-5">
                <div className="footer-logo mb-3">
                  <a className="navbar-brand" href="/">Medick</a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit.</p>
                <ul className="mt-3">
                  <li><a href="tel:+(21) 255 999 8888"><FaPhone className="icon" /> +(21) 255 999 8888</a></li>
                  <li><a href="mailto:medick@mail.com" className="mail"><FaEnvelopeOpen className="icon" />
                    medick@mail.com</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list footer-2 mt-sm-0 mt-5">

                <ul>
                  <h6 className="footer-title">History</h6>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/blog"> Blog Posts</a></li>
                  <li><a href="/services">Departments</a></li>
                  <li><a href="/careers"> Careers</a></li>
                  <li><a href="/about">Team</a></li>
                  <li><a href="/contact">Contact us</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title">Useful Links</h6>
                <ul>
                  <li><a href="/terms">Terms of service</a></li>
                  <li><a href="/privacy"> Privacy policy</a></li>
                  <li><a href="/doc"> Documentation</a></li>
                  <li><a href="/support"> Support</a></li>
                  <li><a href="/components"> Components</a></li>
                  <li><a href="/changelog"> Changelog</a></li>
                </ul>

              </div>
              <div className="col-lg-4 col-md-6 col-sm-7 footer-list footer-4 mt-lg-0 mt-5">
                <h6 className="footer-title">Subscribe to our Newsletter </h6>
                <p>Enter your email and receive the latest news, updates and special offers from us.</p>

                <form action="#" className="subscribe" method="post">
                  <input type="email" name="email" placeholder="Your Email Address" required=""/>
                  <button className="btn-style w-100 mt-3">Subscibe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="copyright-sec">
        <div className="container">
          <div className="row bottom-copies">
            <p className="col-lg-8 copy-footer">© 2021 Medick. All rights reserved. Design by <a
              href="https://w3layouts.com/" target="_blank">
              W3Layouts</a></p>

            <div className="col-lg-4 main-social-footer">
              <a href="/facebook" className="facebook"><FaFacebook className="icon" /></a>
              <a href="/twitter" className="twitter"><FaTwitter className="icon" /></a>
              <a href="/instagram" className="instagram"><FaInstagram className="icon" /></a>
              <a href="/linkedin" className="linkedin"><FaLinkedin className="icon" /></a>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer