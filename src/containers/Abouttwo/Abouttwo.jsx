import React from 'react';
import "./Abouttwo.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import banner2 from "../../assets/images/banner2.jpg";
import { } from "react-icons";
import { FaArrowRight } from 'react-icons/fa';

const Abouttwo = () => {
  return (
    <div className="abouttwo-sec">
      <div className="breadcrumb-bg w3l-inner-page-breadcrumb py-5">
        <div className="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
          <h2 className="title pt-5">About us</h2>
          <ul className="breadcrumbs-custom-path mt-3 text-center">
            <li><a href="/">Home</a></li>
            <li className="active"><FaArrowRight /> About us </li>
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

      <section className="about-ab-sec" id="about">
        <div className="midd-w3 py-5">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="imgw3l-ab mb-md-5 mb-3">
              <img src={banner2} alt="" className="radius-image img-fluid"/>
            </div>
            <div className="row">
              <div className="col-lg-5 left-wthree-img">
                <h6 className="title-subhny">About Us</h6>
                <h3 className="title-w3l mb-4">The Best Medics, Doctors & Physicians</h3>

              </div>
              <div className="col-lg-7 pl-lg-5 align-self">
                <p className="">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Learn more about our work!
                  Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.
                </p>
                <p className="mt-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
                  tempufddfel. Learn more about our work! Lorem ipsum viverra feugiat.consectetur adipisicing dolor et amet.
                </p>
                <a href="/about" className="btn-style mt-lg-5 mt-4">Read More</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Abouttwo