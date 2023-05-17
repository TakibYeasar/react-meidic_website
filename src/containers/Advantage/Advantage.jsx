import React from 'react';
import "./Advantage.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaCheck } from "react-icons/fa";
import g4 from "../../assets/images/g4.jpg";

const Advantage = () => {
  return (
    <section className="advantage-sec py-5" id="services2">
      <div className="container py-lg-5 py-md-4 py-2">

        <div className="row bottom-ab-grids">
          <div className="col-lg-6 bottom-ab-left align-self">
            <h6 className="title-subhny">What We Offer</h6>
            <h3 className="title-w3l mb-4">Our Advantages</h3>
            <p className="">Lorem ipsum dolor sit amet elit. hic odio tenetur. ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia acere aperiam sequi optio consectetur adipisicing
              dolor et amet. </p>
            <ul className="advantage-right-book mt-4">
              <li><FaCheck className="icon" /> Specialists and Dentists as One Team</li>
              <li><FaCheck className="icon" /> Complimentary Consultations</li>
              <li><FaCheck className="icon" /> All Types of Dental Services</li>
              <li><FaCheck className="icon" /> On-site Laboratory</li>
            </ul>
          </div>
          <div className="col-lg-6 bottom-right-grids pl-lg-5 mt-lg-0 mt-5">
            <img src={g4} alt="" className="radius-image img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantage